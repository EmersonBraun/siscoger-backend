/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

export const bullConfig = {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
  },
};
