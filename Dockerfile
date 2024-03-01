FROM node:21 
RUN  yarn create next-app links -e https://github.com/realvjy/nxt-lnk
WORKDIR /links/
CMD [ "yarn", "dev" ]
EXPOSE 3000