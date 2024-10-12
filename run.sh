CURR_DATE=$(date -I)

SERVICE_NAME=todo-list.site
IMAGE=$SERVICE_NAME:$CURR_DATE
CONTAINER=$SERVICE_NAME.$CURR_DATE
DOCKERFILE=deploy/Dockerfile
PORT=8002

docker build -f $DOCKERFILE -t $IMAGE .
docker stop $CONTAINER || true && docker rm $CONTAINER || true
docker run --name $CONTAINER --restart=unless-stopped -d -p $PORT:80 $IMAGE