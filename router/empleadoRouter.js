const express=require('express');
const palechorelloro=express.Router();
const EmpleadoController =require('../controllers/empleadoController');


palechorelloro.get("/mensaje",EmpleadoController.obtenerEmpleados);
palechorelloro.post("/insertar",EmpleadoController.insertarEmpleado);
palechorelloro.delete("/eliminar:id",EmpleadoController.eliminarEmpleador);
palechorelloro.put("/actualizar",EmpleadoController.actualizarEmpleados);
palechorelloro.get("buscar",EmpleadoController.buscarEmpleado);


module.exports = palechorelloro;
