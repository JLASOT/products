import { Sequelize } from "sequelize";

// const sequelize = new Sequelize("orders", "orders_user", "orders_pass", {
// // const sequelize = new Sequelize("orders", "root", "", {
//   host: "127.0.0.1", // <--- ¡CAMBIA ESTO! Usa la dirección IPv4 de localhost
//   dialect: "mysql",
// });

// export default sequelize;
const sequelize = new Sequelize(
  process.env.DB_NAME || "products",               // base de datos
  process.env.DB_USER || "root",                // usuario
  process.env.DB_PASSWORD || "12345",         // contraseña
  {
    host: process.env.DB_HOST || "localhost",   // local host del contenedor
    // host: process.env.DB_HOST || "localhost",   // dirección del host
    port: 3306,                                  // puerto interno del contenedor
    dialect: "mysql",
  }
);

export default sequelize;