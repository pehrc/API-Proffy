import express from 'express'

const app = express();

app.get('/users', (resquest, response) => {
  return response.send('Olá')
});

app.listen(3333); 

