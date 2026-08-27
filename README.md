# DIDeccan India website

Company site for **DIDeccan India Software Technologies Pvt Ltd** — product studio and engineering partner in Tirupati and Bangalore.

This repo has two apps:

- **Frontend** — React (Create React App) company site
- **Backend** — Django API for the contact form and course registration

## Stack

| Layer | Tech |
| --- | --- |
| Frontend | React 19, React Router, Axios |
| Backend | Django 5.2, django-cors-headers, SQLite |
| Containers | Docker Compose (nginx frontend, gunicorn backend) |

## Project layout

```
.
├── Frontend/dist/     React app (run `npm start` here)
├── Backend/dist/      Django project (run `manage.py` here)
├── docker-compose.yml
└── Scripts/
```

## Prerequisites

- Node.js 20+
- Python 3.11+ (3.13 works locally)
- npm

For Docker: Docker Desktop.

## Quick start (local)

Run **both** servers. The site is on port **3000**; the API is on port **8000**.

### 1. Backend

```bash
cd Backend/dist
python -m pip install -r requirement.txt
python manage.py migrate
python manage.py runserver 8000
```

API: [http://localhost:8000](http://localhost:8000)

Without SMTP settings, inquiry emails are printed in the backend console. Submissions are still saved in SQLite.

### 2. Frontend

```bash
cd Frontend/dist
npm install
```

Create `Frontend/dist/.env` (optional — this is the default):

```env
REACT_APP_API_BASE_URL=http://localhost:8000
```

Then:

```bash
npm start
```

Site: [http://localhost:3000](http://localhost:3000)

Restart `npm start` after changing `.env`.

## Environment variables

### Backend (`Backend/dist/.env` or `Backend/.env`)

Copy `Backend/.env.example`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=
HR_EMAIL=hr@dideccanindia.com
BUSINESS_EMAIL=business@dideccanindia.com
```

| Variable | Purpose |
| --- | --- |
| `EMAIL_HOST` / `EMAIL_PORT` | SMTP server (leave empty to use console email) |
| `EMAIL_HOST_USER` / `EMAIL_HOST_PASSWORD` | SMTP login |
| `BUSINESS_EMAIL` | Contact-form inbox (default `business@dideccanindia.com`) |
| `HR_EMAIL` | Hiring inquiries and course registrations |

Django loads `.env` from the process working directory (`Backend/dist` when you run `manage.py` from there).

### Frontend (`Frontend/dist/.env`)

| Variable | Purpose |
| --- | --- |
| `REACT_APP_API_BASE_URL` | Django origin, no trailing slash. Defaults to `http://localhost:8000` |

## API

Base URL: `REACT_APP_API_BASE_URL`

| Method | Path | Body | Notes |
| --- | --- | --- | --- |
| `POST` | `/contact` | JSON: `name`, `email`, `phone`, `company`, `topic`, `message` | Contact page. Saved as `ContactInquiry`. Hiring topics go to `HR_EMAIL`. |
| `POST` | `/register` | `multipart/form-data`: `fullname`, `email`, `phone`, `course`, `resume` | Course registration email to HR |

Successful responses look like:

```json
{
  "message": "Message received. We will get back to you shortly.",
  "message_type": "success",
  "status_code": 200
}
```

Example:

```bash
curl -X POST http://localhost:8000/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Ada\",\"email\":\"ada@example.com\",\"topic\":\"Product partnership\",\"message\":\"We would like to discuss a new platform.\"}"
```

Admin (after `createsuperuser`): [http://localhost:8000/admin/](http://localhost:8000/admin/) — contact inquiries are listed there.

## Frontend routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/About` | About |
| `/Services` | Services |
| `/products` | Product catalog |
| `/StudentBook` `/HappyRide` `/BusinessGuider` `/TirumalaYatra` `/MyFinaz` `/Mobotos` | Product pages |
| `/contact` `/contactus` | Contact |
| `/FAQ` | FAQ |
| `/PrivacyPolicy` | Privacy |
| `/TermsConditions` | Terms |

## Docker

From the repo root:

```bash
docker compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000) (nginx)
- Backend: [http://localhost:8000](http://localhost:8000)

Pass SMTP and `REACT_APP_API_BASE_URL` into the images if you need live email or a non-local API host. The frontend API URL is baked in at **build** time.

## Production notes

- Set a real `SECRET_KEY`, `DEBUG=False`, and a tight `ALLOWED_HOSTS` in Django before going live.
- Point `REACT_APP_API_BASE_URL` at the public API origin.
- Configure SMTP so contact and registration emails actually send.
- SQLite is fine for light traffic; use Postgres if you outgrow it.

## Company contact (on the site)

- Business: [business@dideccanindia.com](mailto:business@dideccanindia.com)
- Hiring: [hr@dideccanindia.com](mailto:hr@dideccanindia.com)
- Phone: +91 79815 59252
- Tirupati HQ: KKR Heights, Flat Nos. 401 & 402, D.No. 23-8-158, Air Bypass Rd, New Balaji Colony, Tirupati, Andhra Pradesh 517502
- Bangalore: 01, Hennur Main Rd, PO, opposite to Yulu Center, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
