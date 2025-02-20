
const express = require("express");
const app=express();
const EmpleadoRoutes=require('./router/empleadoRouter');
const usuario=require('./router/usuario');
const eventos=require('./router/eventos');
const PORT=4002;
app.use(express.json());
app.use("/api",EmpleadoRoutes);
app.use("/api",usuario);
app.use("/api",eventos);


app.listen(PORT,()=>
{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

})