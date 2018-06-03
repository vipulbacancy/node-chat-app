module.exports = {
  connections:{
    mongoDb:{
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || "webChat"
    }
  },
};
