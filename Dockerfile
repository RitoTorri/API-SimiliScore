FROM node:24.12.0-alpine3.23

# Entorno de trabajo
WORKDIR /home/app

# Copiamos dependencias
COPY package*.json ./

# Instalamos dependencias de produccion
RUN npm ci --only=production

# Copiamos el codigo fuente
COPY . /home/app/

# Documentacion
EXPOSE 3000

# Usuario de ejecucion
USER node

# Ejecucion del servidor
CMD ["npm", "run", "start:docker"]