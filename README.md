# docker-node-api
REST API server based on nodejs, express, postgres

Build
docker build -t izafar/docker-node-api .

Run
docker run -p 8001:8001 -d izafar/docker-node-api

Run using local volume
docker run -p 8001:8001 -d -v $(pwd):/usr/src/app izafar/docker-node-api
