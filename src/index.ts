/*
import express from 'express'

const app = express()
app.use(express.json())
const PORT = 3000

app.get('/', (_req, res) => {
    console.log('productos corriendo')
    res.send('hola mundo')
})

app.listen(PORT, () => {
    console.log(Mi primer Servicio de Productos! ${PORT})
})
*/
import express from "express";
import dotenv from "dotenv";
import {usuariosRoutes} from "./routes/index";
dotenv.config({path:"/home/usuarios/src/.env"});

dotenv.config(); // Asegúrate de que .env esté cargado si lo usas

const app = express();

const port = process.env.PORT || 3002;


app.get("/", (_req, res) => {
    res.send("Usuarios corriendo en el puerto " + port);
});

// Usa las rutas correctamente
app.use("/usuarios", usuariosRoutes);

app.listen(port, () => {
    console.log("Mi primer Servicio de Usuarios en el puerto", port);
});