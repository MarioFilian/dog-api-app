# Imagen base oficial de Node.js
FROM node:18

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto que usa Express
EXPOSE 3000

# Comando para arrancar la app
CMD ["npm", "start"]
