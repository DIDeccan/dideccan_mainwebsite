from django.contrib import admin
from .models import ContactInquiry


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "topic", "company", "created_at")
    search_fields = ("name", "email", "company", "topic")
    readonly_fields = ("created_at",)
