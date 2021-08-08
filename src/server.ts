import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({messagem: "Hello World"})
})

app.listen(3333, () => {
    console.log('servidor funcionando');
})