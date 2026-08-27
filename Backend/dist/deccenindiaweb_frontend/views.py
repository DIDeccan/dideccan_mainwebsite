import json

from django.conf import settings
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status

from .models import ContactInquiry


def _json(message, message_type, http_status):
    return JsonResponse(
        {
            "message": message,
            "message_type": message_type,
            "status_code": http_status,
        },
        status=http_status,
    )


def _payload(request):
    content_type = request.content_type or ""
    if "application/json" in content_type:
        try:
            data = json.loads(request.body.decode("utf-8") or "{}")
            return data if isinstance(data, dict) else {}
        except json.JSONDecodeError:
            return {}
    return request.POST


@csrf_exempt
def register(request):
    if request.method != "POST":
        return _json("Invalid request.", "error", status.HTTP_400_BAD_REQUEST)

    fullname = request.POST.get("fullname")
    email = request.POST.get("email")
    phone = request.POST.get("phone")
    course = request.POST.get("course")
    resume = request.FILES.get("resume")

    html_content = render_to_string(
        "emails/registration_email.html",
        {
            "fullname": fullname,
            "email": email,
            "phone": phone,
            "course": course,
        },
    )

    mail = EmailMessage(
        subject="New Course Registration",
        body=html_content,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.HR_EMAIL or settings.BUSINESS_EMAIL],
    )
    mail.content_subtype = "html"

    if resume:
        resume.open("rb")
        mail.attach(
            filename=resume.name,
            content=resume.read(),
            mimetype=resume.content_type or "application/octet-stream",
        )
        resume.close()

    try:
        mail.send(fail_silently=False)
        return _json("Registration successful, email sent to HR!", "success", status.HTTP_200_OK)
    except Exception as exc:
        return _json(f"Registration email failed: {exc}", "error", status.HTTP_500_INTERNAL_SERVER_ERROR)


@csrf_exempt
def contact(request):
    if request.method != "POST":
        return _json("Invalid request.", "error", status.HTTP_400_BAD_REQUEST)

    data = _payload(request)
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    company = (data.get("company") or "").strip()
    topic = (data.get("topic") or "General inquiry").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or len(message) < 12:
        return _json(
            "Name, email, and a short message are required.",
            "error",
            status.HTTP_400_BAD_REQUEST,
        )

    inquiry = ContactInquiry.objects.create(
        name=name,
        email=email,
        phone=phone,
        company=company,
        topic=topic,
        message=message,
    )

    html_content = render_to_string(
        "emails/contact_email.html",
        {
            "name": inquiry.name,
            "email": inquiry.email,
            "phone": inquiry.phone or "—",
            "company": inquiry.company or "—",
            "topic": inquiry.topic,
            "message": inquiry.message,
        },
    )

    hiring = "hiring" in inquiry.topic.lower()
    recipient = settings.HR_EMAIL if hiring and settings.HR_EMAIL else settings.BUSINESS_EMAIL
    smtp_ready = bool(getattr(settings, "EMAIL_HOST", None) and getattr(settings, "EMAIL_HOST_USER", None))

    if smtp_ready:
        mail = EmailMessage(
            subject=f"Website inquiry — {inquiry.topic} — {inquiry.name}",
            body=html_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[recipient],
            reply_to=[inquiry.email],
        )
        mail.content_subtype = "html"
        try:
            mail.send(fail_silently=False)
        except Exception as exc:
            return _json(
                f"Message saved, but email delivery failed: {exc}",
                "error",
                status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    return _json("Message received. We will get back to you shortly.", "success", status.HTTP_200_OK)
