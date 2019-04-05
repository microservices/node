FROM        node:10-alpine

RUN         mkdir /app
ADD         package.json package-lock.json /app/
RUN         npm install --prefix /app
COPY        src /app/src

ENTRYPOINT  ["node", "/app/src/index.js"]
