FROM node:lts
WORKDIR .
RUN npm install --location=global --force yarn lerna

COPY /packages ./packages
COPY lerna.json ./lerna.json
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY .eslintrc.json ./.eslintrc.json

RUN yarn
RUN lerna link
RUN yarn lint
RUN yarn test
RUN yarn build

RUN ls ./node_modules

EXPOSE 80
CMD ["yarn", "start"]
