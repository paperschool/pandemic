#!/bin/sh

if [ -z "$DOCKER_USER" ] || [ -z "$DOCKER_PASS" ]; then
    echo "Missing Docker Username or Password"
    exit 1;
fi

docker login -u $DOCKER_USER -p $DOCKER_PASS

IMAGE_NAME=$APP_NAME

if [ -z "$IMAGE_NAME"]; then
    echo "No Image Name Provided"
    exit 1;
fi

if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
elif [ "$TRAVIS_BRANCH" != "master" ]; then
    TAG="$TRAVIS_BRANCH"
else
    TAG="latest"
fi

echo "Building Docker Image"
docker build -f Dockerfile -t $IMAGE_NAME .

echo "Tagging Docker Image"
docker tag $IMAGE_NAME $DOCKER_USER/$IMAGE_NAME

echo "Pushing Docker Image"
docker push $DOCKER_USER/$IMAGE_NAME