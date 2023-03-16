FROM node:17-alpine as base

FROM base as builder

WORKDIR /todo-list

COPY ./ .
RUN yarn && yarn build

FROM builder

WORKDIR /app

COPY --from=builder /todo-list/node_modules ./node_modules
COPY --from=builder /todo-list/dist .
COPY --from=builder /todo-list/package.json .

ENV PORT=5000

EXPOSE 5000
ENTRYPOINT exec node src/index.js