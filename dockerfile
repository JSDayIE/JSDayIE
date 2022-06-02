FROM node:lts as dependencies
WORKDIR /packages/@jsdayie/ui/
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /packages/@jsdayie/ui/
COPY . .
COPY --from=dependencies /packages/@jsdayie/ui//node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /packages/@jsdayie/ui/
ENV NODE_ENV production

COPY --from=builder /packages/@jsdayie/ui/next.config.js ./
COPY --from=builder /packages/@jsdayie/ui/.next ./.next
COPY --from=builder /packages/@jsdayie/ui/node_modules ./node_modules
COPY --from=builder /packages/@jsdayie/ui/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
