FROM python:3.11-slim

WORKDIR /app

# Install required system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY dist/ /app

# Install Python dependencies
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirement.txt gunicorn

EXPOSE 8000

CMD ["gunicorn", "deccenindiaweb_backend.wsgi:application", "--bind", "0.0.0.0:8000"]
