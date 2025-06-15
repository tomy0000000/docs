# 🐳 Docker

## Dockerfile Template

A univerally applicable Dockerfile template for Python, Node.js, Ruby, and PHP projects.

```dockerfile
FROM _

# Pre-config for build
EXPOSE 80
WORKDIR /app
USER root

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        python3-dev \
        python3-pip \
        python3-setuptools \
        python3-wheel \
        npm \
        yarn \
        ruby-full \
        rubygems \
        bundler \
        composer \
    # Clean up
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy project manifest files and lock files
COPY requirements.txt ./
COPY pyproject.toml poetry.lock ./
COPY Pipfile Pipfile.lock ./

COPY package.json yarn.lock ./
COPY Gemfile Gemfile.lock ./
COPY composer.json composer.lock ./

# Install dependencies
RUN npm
RUN yarn
RUN bundle
RUN composer install
RUN pip install --no-cache-dir -r requirements.txt
RUN poetry install

# Copy project files
COPY . .

# Post-config for execution
WORKDIR /app
USER root

# Start the application
# Fixed entrypoint
ENTRYPOINT ["python", "app.py"]
# Variable flags
CMD ["--port", "80"]
```
