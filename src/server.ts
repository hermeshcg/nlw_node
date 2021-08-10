import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(routes);

app.listen(3001, () => console.log('Server is running'));
