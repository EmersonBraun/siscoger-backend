module.exports = {
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  entities: [
    "dist/src/modules/**/entity/*.entity.js"
  ],
  migrations: [
    "dist/src/modules/**/migrations/*.js" 
  ],
  seeds: [
    'dist/src/modules/**/seeds/*.js'
  ],
  factories: [
    'dist/src/modules/**/factory/*.js'
  ],
}
