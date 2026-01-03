// Importación de dependencias
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Configuración de variables de entorno
dotenv.config();

// Importación de rutas
const compare = require('./controller/compare.controller');

// Clase App
class App {
    // Atributos
    app;
    port; 
    urlBase;

    // Rate limir
    rateLimit;
    rateLimitWindow;

    // Inicializacion de atributos
    constructor() {
        this.app = new express();
        this.port = process.env.PORT || 3000;
        this.rateLimit = process.env.API_RATE_LIMIT || 100;
        this.rateLimitWindow = process.env.API_RATE_LIMIT_WINDOW || 15 * 60 * 1000;
        this.urlBase = `/api/detector/plagio`;
        this.middlewares();
        this.urls = {
            compare : `${this.urlBase}/compare`,
        }
        this.routes();
    }

    middlewares = () => {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(rateLimit({
            windowMs: parseInt(this.rateLimitWindow), // 15 minutes
            max: parseInt(this.rateLimit), // Limit each IP to 100 requests per `window` (here, per 15 minutes)
            message: 'Too many requests from this IP, please try again in 15 minutes'
        }));
    }

    routes = () => {
        this.app.use(this.urls.compare, compare);
    }

    start = () => {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
            console.log(`API available at http://localhost:${this.port}${this.urls.compare}`);
        });
    }
}

module.exports = App;