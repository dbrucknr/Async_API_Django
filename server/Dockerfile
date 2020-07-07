FROM python:3.7.6-alpine
# Install system-level dependencies
RUN apk update && apk add build-base python-dev py-pip jpeg-dev zlib-dev openssl-dev gcc libffi-dev postgresql-dev
# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Make a new "/taxi-app/" directory in the container
# Set that directory as the working directory (similar to using cd to step inside it)
WORKDIR /taxi-app/

# Install Dependencies from Pipfile/Pipfile.lock
COPY Pipfile Pipfile.lock /taxi-app/
RUN pip install --upgrade pip
RUN pip install pipenv && pipenv install --system

# Gather remaining files/folders
COPY . /taxi-app/