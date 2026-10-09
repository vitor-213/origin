import app from './app.js';
import env from './config/env.js';
import connectDB from './config/db.js';

let server;

process.on('unhandledRejection', (reason) => {
  console.error(`Unhandled Rejection: ${reason}`);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});

process.on('uncaughtException', (error) => {
  console.error(`Uncaught Exception: ${error.message}`);
  process.exit(1);
});

const start = async () => {
  await connectDB();
  server = app.listen(env.port, () => {
    console.log(`Servidor corriendo en modo ${env.nodeEnv} en el puerto ${env.port}`);
  });
};

start();
