import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (request, response) => {
    return response.json({messagem: "Hello World"})
})

app.use(cors());

app.listen(3333, () => {
    console.log('servidor funcionando');
})
