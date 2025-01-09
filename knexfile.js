let connectionString =
  process.platform === "win32"
    ? "postgres://192.168.0.201:49157/township2"
    : "postgres://192.168.0.201:49157/township2";

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "192.168.0.201",
      port: 49157,
      user: "postgres",
      password: "postgres",
      database: "township2",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
    useNullAsDefault: true,
    password: "",
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
    useNullAsDefault: true,
  },
};
