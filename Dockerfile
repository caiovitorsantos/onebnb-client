<<<<<<< HEAD
FROM node:6
ENV INSTALL_PATH /onebnb_client
RUN npm install -g angular-cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
=======
# Usa essa imagem para gerar nosso container
FROM ruby:2.3-slim

# Instala nossas dependencias
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      build-essential nodejs libpq-dev

# Seta nosso path
ENV INSTALL_PATH /onebnb_api

# Cria nosso diretório
RUN mkdir -p $INSTALL_PATH

# Seta o nosso path como o diretório principal
WORKDIR $INSTALL_PATH

# Copia o nosso Gemfile para dentro do container
COPY Gemfile Gemfile.lock ./

# Instala nossas Gems
RUN bundle install

# Copia nosso código para dentro do container
COPY . .

# Roda nosso servidor
CMD puma -C config/puma.rb
>>>>>>> a50ef2c44078729a238abd9a7f1c9ae193bf4386
