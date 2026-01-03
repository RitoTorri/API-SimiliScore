const request = require('supertest');
const App = require('../src/app');

describe('POST /api/detector/plagio/compare', () => {
    let appInstance;
    let app;

    beforeEach(() => {
        appInstance = new App();
        app = appInstance.app;
    });

    // Test case 1
    test('Should return a 200 status code', async () => {
        const response = await request(app).post('/api/detector/plagio/compare').send({
            string1: 'hola',
            string2: 'hola'
        });
        expect(response.statusCode).toBe(200);
    });

    // Test case 2
    test('Should return a 422 status code', async () => {
        const response = await request(app).post('/api/detector/plagio/compare').send({
            string1: '',
            string2: ''
        });
        expect(response.statusCode).toBe(422);
    });

    // Test case 3
    test('Should return a Json response', async () => {
        const response = await request(app).post('/api/detector/plagio/compare').send({
            string1: 'hola',
            string2: 'hola'
        });
        expect(response.type).toBe("application/json");
    });

    // Test case 4
    test('Should return a JSON with properties success, message and data', async () => {
        const response = await request(app).post('/api/detector/plagio/compare').send({
            string1: 'hola',
            string2: 'hola'
        });
        expect(response.body.success).toBeDefined();
        expect(response.body.message).toBeDefined();
        expect(response.body.data).toBeDefined();
    });

    // Test case 5
    test('Should return a 400 status code when strings are not provided', async () => {
        const response = await request(app).post('/api/detector/plagio/compare').send({});
        expect(response.statusCode).toBe(400);
    });
});