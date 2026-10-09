import mongoose from 'mongoose';

import env from './env.js';

export async function connectDB() {
  try {
    const conn = await mongoose.connect(env.mongoUri);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar a MongoDB: ${error.message}`);
    process.exit(1);
  }

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB desconectado');
  });

  mongoose.connection.on('error', (error) => {
    console.error(`Error de MongoDB: ${error.message}`);
  });
}

export default connectDB;
