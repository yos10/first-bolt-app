FROM --platform=linux/x86_64 node:14.15.4-slim

RUN apt-get update
RUN apt-get install -y locales
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo

RUN mkdir /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app

# node のイメージに用意されているユーザー
# https://github.com/nodejs/docker-node/blob/3101ce6b5b3a0308b58d464eef141e0043c3bf5b/14/stretch-slim/Dockerfile#L3-L4
USER node

COPY --chown=node:node package.json .
RUN yarn install
COPY --chown=node:node . .

CMD ["node", "app.js"]
