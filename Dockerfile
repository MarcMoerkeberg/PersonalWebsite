#Dockerization section from Vue's own documentation (vue2 because it's not documented in vue 3 per 10-04-2023)
#https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html#Real-World-Example

#BUILD VUE APP
#Select node version
FROM node:lts-alpine as build-stage

#Create folder "app"
WORKDIR /app

#copy package.json from project to rootfolder and install node dependencies
COPY package*.json ./
RUN npm install

#Copy all files from project into rootfolder and make a build/dist folder
COPY . .
RUN npm run build

#CREATE NGINX SERVER
FROM nginx:stable-alpine as production-stage

#Copy files from vueapp image (root/app/dist). dist is the build files/folder node creates
#Format = {from stagename} {path of files in stage to copy} {path to copy files to}
COPY --from=build-stage /app/dist /usr/share/nginx/html

#Port to expose
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
