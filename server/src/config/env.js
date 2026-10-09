import 'dotenv/config';

const required = ['PORT', 'NODE_ENV', 'MONGO_URI', 'JWT_SECRET', 'JWT_EXPIRES_IN'];

const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Faltan variables de entorno requeridas: ${missing.join(', ')}`);
  process.exit(1);
}

export const env = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  isDev: process.env.NODE_ENV === 'development',
};

export default env;
