FROM nginx:latest

RUN apt-get update \
        && apt-get install openssl --no-install-recommends --no-install-suggests -y \
        && rm -fr /var/lib/apt/lists/*

EXPOSE 6000

