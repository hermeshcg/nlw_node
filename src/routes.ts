import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    message: ':)',
  });
});

routes.post('/test-post', (request, response) => {
  return response.send('Olá NLW método POST');
});

export default routes;

// teste