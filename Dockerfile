# Imagen base de Node.js (versión 18 con Alpine para ser ligera)
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para arrancar la aplicación
CMD ["node", "index.js"]
