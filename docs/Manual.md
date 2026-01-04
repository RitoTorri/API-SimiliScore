# 🔍 Manual de la API - Detector de Plagio

Esta API permite analizar y comparar la similitud entre dos bloques de texto utilizando algoritmos de procesamiento de lenguaje natural.

Accede a los endpoints de la API para ejecutarlos en Postman: [Documentacion de la API - Postman](https://ritotorri-5321757.postman.co/workspace/Cortez-Jes%C3%BAs-'s-Workspace~f2d04eac-b157-4c2b-8546-4c816e6a14a8/collection/48845560-59e68cbf-ce85-432b-ae25-7424889a5fb9?action=share&creator=48845560&active-environment=48845560-3eb25b89-fab4-499d-8321-ee69fd59539c)

## 🚀 Endpoints

### `POST` /api/detector/plagio/compare

Compara dos textos y devuelve un índice de similitud basado en el contenido proporcionado.

**Headers:**

* `Content-Type: application/json`

**Cuerpo de la Petición (Body):**

```json
{
  "texto1": "Este es el texto original a comparar.",
  "texto2": "Este es el segundo texto para verificar similitud."
}

```

**Respuesta Exitosa (200 OK):**

```json
{
  "success": true,
  "message": "Successful Comparison",
  "similitud": "80%"
}

```

---

## ⚠️ Gestión de Errores

La API utiliza códigos de estado HTTP estándar para indicar el éxito o fracaso de las solicitudes.

| Código | Estado | Descripción |
| --- | --- | --- |
| **200** | `OK` | La comparación se realizó con éxito. |
| **400** | `Bad Request` | Estructura de JSON inválida o faltan campos obligatorios. |
| **422** | `Unprocessable Entity` | Los campos están presentes pero vacíos o no cumplen el formato (ej. texto muy largo). |
| **500** | `Internal Server Error` | Error inesperado en el servidor. |

### Ejemplo de error (422)

```json
{
  "success": false,
  "message": "Strings cannot be longer than 1000 characters"
}

```
