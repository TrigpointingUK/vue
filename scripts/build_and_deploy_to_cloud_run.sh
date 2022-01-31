#!/bin/bash
docker build .. -t tuk-vue:latest

gcloud auth login teasel.ian@gmail.com
gcloud config set project trigpointinguk
gcloud auth configure-docker europe-west1-docker.pkg.dev

docker tag vue:latest europe-west1-docker.pkg.dev/trigpointinguk/images/tuk-vue:latest
docker push europe-west1-docker.pkg.dev/trigpointinguk/images/tuk-vue:latest

gcloud run deploy vue \
  --image=europe-west1-docker.pkg.dev/trigpointinguk/images/tuk-vue:latest \
  --region=europe-west1 \
  --allow-unauthenticated \
  --port=80
