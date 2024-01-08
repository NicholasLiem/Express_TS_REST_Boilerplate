#!/bin/bash

# Echo commands
set -x

# Create a new Docker env file
cp docker.env.example docker.env

# Move to 'src' folder
cd src

# Create new env files and key files
cp .env.example .env
cp public.key.example public.key
cp private.key.example private.key

# Build and run Docker containers
docker-compose up -d --build

# Echo completion
echo "Setup complete. Your environment is now ready."
