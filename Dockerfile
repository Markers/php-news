FROM node:16

RUN mkdir /otp/php-news -p

WORKDIR /otp/php-news

COPY . .

RUN yarn

ENV NODE_ENV production

RUN yarn build

CMD ["yarn", "start"]




