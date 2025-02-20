const express=require('express');
const router=express.Router();
const Usuario =require('../controllers/usuariocontroller');

router.get("/mensaje",Usuario.obternerUsuarios);
router.post("/insertar",Usuario.insertarUusuario);
router.delete("/eliminar:id",Usuario.eliminarUsuario);
router.put("/actualizar",Usuario.actualizarUsuario);
router.get("buscar",EmpleadoController.buscarEmpleado);


module.exports = router;
