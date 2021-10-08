FROM cypress/base:10

COPY . .
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run