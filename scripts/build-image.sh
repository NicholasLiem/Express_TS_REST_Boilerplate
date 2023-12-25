# Define the image name and tag
IMAGE_NAME="myapp"
IMAGE_TAG="latest"

# Path to the Dockerfile (uncomment and update if your Dockerfile is not in the project root)
# DOCKERFILE_PATH="./path/to/Dockerfile"

# Building the Docker image
echo "Building Docker image ${IMAGE_NAME}:${IMAGE_TAG}..."
# Uncomment the next line and comment the one after if you have a custom Dockerfile path
# docker build -t ${IMAGE_NAME}:${IMAGE_TAG} -f ${DOCKERFILE_PATH} .
docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

echo "Build completed for ${IMAGE_NAME}:${IMAGE_TAG}"
