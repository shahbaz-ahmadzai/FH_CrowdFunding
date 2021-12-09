import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from './config';
import { routes } from './routes';
import swaggerDocument from './utils/swagger.json';
import { serve, setup } from 'swagger-ui-express';


const app = express();
app.use('/api-docs', serve, setup(swaggerDocument));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use('/api', routes.router);

app.listen(config.port, () => { console.log(`Crowd Funding CORS server listening on port ${config.port}`); });