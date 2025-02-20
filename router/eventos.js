const express=require('express');
const router=express.Router();
const Eventos =require('../controllers/eventoscontrolador');

router.get("/mensaje",Eventos.listarEventos);
router.post("/crearevento",Eventos.crearEvento);
router.delete("/eliminar:id",Eventos.eliminarEvento);
router.put("/actualizar",Eventos.actualizarEvento);
router.get("buscar",Eventos.buscarEmpleado);


module.exports = router;
