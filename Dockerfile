FROM node:8-alpine

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

EXPOSE 3000

RUN npm install -g serve

# Przed zbudowaniem umieścić kody w folderze source
COPY source .

RUN npm install
CMD ["npm", "start"]