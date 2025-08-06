import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";
import sequelize from './config/dataBase.js';
import './models/index.js';
import swaggerUi from 'swagger-ui-express';

import fs from 'fs';
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf8'));


const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log(
      "Tablas sincronizadas con la base de datos- SISTEMA FUNCIONAL  "
    );
  } catch (err) {
    console.error("Error al sincronizar las tablas:", err);
    process.exit(1);
  }
};

syncDatabase();

const app = express();


const port = process.env.PORT || 3000;

// app.use(cors());
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.send("HOLA GRUPO DevBuggs desde el servicio 2!");
});

app.use("/products", productRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Servicio 2 escuchando en el puerto ${port}`);
});