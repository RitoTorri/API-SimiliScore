# 🔍 Detector de Plagio

![Estado del proyecto](https://img.shields.io/badge/Estado-Completado-green?style=for-the-badge)

<table>
  <tr>
    <td>
      <img src="public/icon.png" alt="Logo de la API" width="250" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    </td>
    <td>
      <h2>📋 Descripción</h2>
      <p>Esta API REST permite analizar la similitud entre dos textos y devuelve un porcentaje de coincidencia en formato JSON.
       </p>
      
<h2>🚀 Funcionalidades</h2>
      <ol>
        <li>Detectar similitud entre 2 textos</li>
        <li>Devolver porcentajes como resultados</li>
      </ol>
    </td>
  </tr>
</table>

## 🛠 Stack Tecnológico

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

## 📖 Documentos
Accede a la guía detallada de endpoints y pruebas:
- 📘 [Manual Técnico (Markdown)](https://github.com/RitoTorri/Detector-de-Plagio/blob/master/docs/Manual.md) - Detalles de parámetros y respuestas.  
- 🚀 [Workspace de Postman](https://ritotorri-5321757.postman.co/workspace/Cortez-Jes%C3%BAs-'s-Workspace~f2d04eac-b157-4c2b-8546-4c816e6a14a8/collection/48845560-59e68cbf-ce85-432b-ae25-7424889a5fb9?action=share&creator=48845560&active-environment=48845560-3eb25b89-fab4-499d-8321-ee69fd59539c) - Pruebas interactivas de la API.  

## ⚙️ Configuracion
En la carpeta raiz del proyecto hay un archivo llamado `example.env` que contiene las variables de entorno necesarias para ejecutar el proyecto. 

Debes de cambiarle el nommbre del archivo `example.env` a `.env` y luego debes de darle valor a las variable definidas en ese archivo.

**Importante:** El archivo `.env` debe de estar en la carpeta raiz del proyecto. Ademas las variables definidas alli seran o son utilizada para la ejecucion del proyecto desde docker.

#### 🌍 Variables de entorno
`PORT`: Puerto de ejecución del servidor. Puedes cambiarlo a cualquier puerto que desees. Por defecto es `3000`.
```bash
PORT=3000
```
`API_RATE_LIMIT`: Cantidad máxima de peticiones por IP. Puedes cambiarlo a cualquier número que desees. Por defecto es `100`.
```bash
API_RATE_LIMIT=100
```
`API_RATE_LIMIT_WINDOW`: Tiempo de bloqueo de dirección IP. Debes de cambiarlo a un número en milisegundos. Por defecto es 15 minutos (900000 milisegundos).
```bash
API_RATE_LIMIT_WINDOW=900000
```

## 📦 Instalación
Ejecuta los siguientes comandos en la terminal para instalar el proyecto:

```bash
# Clonar el repositorio
git clone ttps://github.com/RitoTorri/Detector-de-Plagio

# Entrar en la carpeta del proyecto
cd Detector-de-Plagio

# Instalar las dependencias de producción
npm run install:prod

# Instalar las dependencias todas las dependencias
npm run install:all
```

## 🚀 Ejecución
Este proyecto se compone de diferentes scripts para ejecutar el servidor en diferentes entornos. Desde docker hasta desarrollo local.

### 💻 Ejecucion en el entorno LOCAL

```bash
# Ejecutar el servidor de desarrollo
npm run dev:local

# Ejecutar el servidor de producción
npm start:local

# Ejecutar los tests
npm run test
```

### 🐳 Ejecucion en el entorno de DOCKER

Este proyecto utiliza Docker exclusivamente para entornos de producción. Al no utilizar volúmenes de sincronización en tiempo real, cualquier modificación en el código fuente requiere una reconstrucción de la imagen para que los cambios sean aplicados.

Para construir la imagen desde cero y levantar el servicio, ejecuta:
```bash
# Construir la imagen de docker
docker compose build --no-cache detector-de-plagio

# ejecutar en primer plano
docker compose up detector-de-plagio

# Ejecutar en segundo plano
docker compose up -d detector-de-plagio
```

Si has realizado cambios en el código y necesitas que el contenedor los reconozca, el flujo correcto es detener el servicio actual y reconstruir:
```bash
# Eliminar el contenedor
docker compose rm -s -f detector-de-plagio

# Reconstruir la imagen de docker
docker compose build --no-cache detector-de-plagio

# Ejecutar en segundo plano
docker compose up -d detector-de-plagio
```

## 💡 ¿Necesitas ayuda o encontraste un error?

Si experimentas problemas con la API o consideras que la documentación puede mejorar, te invitamos a abrir un [Issue en GitHub](https://github.com/RitoTorri/Detector-de-Plagio/issues). Tu retroalimentación es fundamental para seguir mejorando este proyecto.
