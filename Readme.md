COPY OF https://bitbucket.org/as-docker/pushd

# About this image

This image is based on node [node](https://hub.docker.com/_/node/) image.
It is extended to support pushd service.

# Docker-compose example

```
pushd:
    image: amsdard/pushd:latest
    volumes:
      - ./settings:/opt/settings
    environment:
      - REDIS_PORT=6379
      - REDIS_HOST=redis
      - GCM_KEY=AIwwSyDNo1CG-YjSt6ITbDvTOQFsKfmF0Ab3Om3

```
Use /opt/settings volume to use your custom settings template and/or to provide extra files like apns certificates.
If you are running redis in a container which is linked to pushd container and your redis container is named *redis*,
remember to explicitly pass REDIS_PORT otherwise docker will populate pushd container with its own envs including REDIS_PORT.


# Defined environment variables

#### Redis
* REDIS_PORT=6379
* REDIS_HOST=localhost
* REDIS_PASSWORD=

#### APNS
* APNS_CERT=
* APNS_KEY=

#### GCM
* GCM_KEY=

#### WP8
* WNS_ID=
* WNS_SECRET=

#### Logging level, on of: error, warn, info, verbose, silly
* PUSHD_LOGGING_LEVEL=silly

#### Enabling ACL

By default pushd acl is disabled (because of problems with IPv6) - if you want
to enable it, you can set variable:

* ENABLE_ACL=1

Acl will block publish requests not from private network.
