FROM node:16-buster-slim

COPY . .

RUN yarn

ENV NODE_ENV production

RUN yarn build

CMD ["yarn", "start"]
