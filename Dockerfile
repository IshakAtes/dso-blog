FROM node:20.16-alpine as builder

WORKDIR /app

ARG BLOG_ENABLED=false
ARG DEPLOYMENT_URL="https://ishak-ates.github.io"
ARG DEPLOYMENT_BRANCH="dev"
ARG GITHUB_ORG="ishak-ates"
ARG GITHUB_PROJECT="dso-blog"

COPY . $WORKDIR

RUN npm install && npm run build

FROM nginx:latest as runner

COPY --from=builder /app/build /usr/share/nginx/html