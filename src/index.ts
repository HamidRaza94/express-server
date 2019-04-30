import Server from './Server';
import { config } from './config';

const initServer = () => {
  const server: Server = new Server(config);
  server.bootstrap().run();
};

initServer();