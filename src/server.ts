import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: ':)',
  });
});

app.post('/test-post', (request, response) => {
  return response.send('Olá NLW método POST');
});

app.listen(3001, () => console.log('Server is running'));
