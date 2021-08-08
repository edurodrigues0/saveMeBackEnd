import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({messagem: "qualquer coisa"})
})

app.listen(3333, () => {
    console.log('servidor funcionando');
})