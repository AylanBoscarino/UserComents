# NodeJS Restful API Starter Pack

Do you ever feel like you don't know how your applications should be structured? Yes, i know the feel. You can use this starter pack for your node projects, but make sure to contribute with something new.

Make sure to use Docker. It's 2018.

# Configuration

You can configure the ENV variables in the docker-compose.yml

```yml 
environment:
 - EV_PORT=3000
 - EV_HOST=0.0.0.0
 - DB_HOST=mongo
 - DB_PORT=27017
 - DB_NAME=jwt-auth
 - ENV=production
```

# Running

To run the application (and the Mongo database) you can use:

```
docker-compose up
```


(Aylan Boscarino)[https://github.com/AylanBoscarino]