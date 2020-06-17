import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import typeorm from 'typeorm';
import cors from 'cors';

import Answer from './src/db/entities/Answer.mjs';
import Disease from './src/db/entities/Disease.mjs';
import Doctor from './src/db/entities/Doctor.mjs';
import Question from './src/db/entities/Question.mjs';
import Parameters from './src/db/entities/Parameters.mjs';
import Plant from './src/db/entities/Plant.mjs';
import config from './src/config/db.mjs';

import routesInit from './src/routes/index.mjs';
//import swaggerDoc from './src/swagger/index.mjs';

const app = express();
const server = new http.Server(app);
const router = express.Router();
const db = config.mongodb;

//swaggerDoc(app);

typeorm.createConnection({
  type: db.type,
  host: db.host,
  port: db.port,
  database: db.database,
  synchronize: true,
  entities: [Answer, Disease, Doctor, Question, Parameters, Plant],
}).then(() => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  routesInit(router);

  server.listen(3001, (err) => {
    if (err) {
      return console.log(err);
    }
    router.get('*', (req, res) => {
      res.json({ status: 404, error: 'not found' });
    });

    app.use(router);
  });
});

export default app;
