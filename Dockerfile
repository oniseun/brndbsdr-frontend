FROM node:12.13-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock  ./
RUN yarn install
RUN yarn global add react-scripts@3.4.1 --silent
COPY . ./
COPY .envsample ./.env
RUN yarn build

# build static fle and launch nginx server
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]