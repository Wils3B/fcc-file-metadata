import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';
import FileRouter from './components/file/file.router';

async function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(morgan(config.app.isProd ? 'common' : 'dev'));

  app.use('/api/fileanalyse', FileRouter);
  app.use('/', express.static('public'));

  app.listen(config.app.port, () => {
    console.log('⚡️[server]: Server is running on port %s', config.app.port);
  });
}

bootstrap();
