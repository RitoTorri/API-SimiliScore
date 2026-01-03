# 🔍 Detector de Plagio

![Estado del proyecto](https://img.shields.io/badge/Estado-Desarrollo-yellow?style=for-the-badge)

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

</div>

## 📖 Documentos
Accede a la guía detallada de endpoints y pruebas:
- 📘 [Manual Técnico (Markdown)](https://github.com/RitoTorri/Detector-de-Plagio/blob/main/docs/Manual.md) - Detalles de parámetros y respuestas.  
- 🚀 [Workspace de Postman](https://ritotorri-5321757.postman.co/workspace/Cortez-Jes%C3%BAs-'s-Workspace~f2d04eac-b157-4c2b-8546-4c816e6a14a8/collection/48845560-59e68cbf-ce85-432b-ae25-7424889a5fb9?action=share&creator=48845560) - Pruebas interactivas de la API.  

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
Ejecuta el siguiente comando en la terminal para ejecutar el proyecto:

### Para desarrollo
```bash
# Ejecutar el servidor de desarrollo
npm run dev

# Ejecutar el servidor de producción
npm start

# Ejecutar los tests
npm run test
```