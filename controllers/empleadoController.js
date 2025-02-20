let db = require("../config/database")

 class EmpleadoController
{
 static async obtenerEmpleados (req, res){
   // obtenerEmpleados (req,res) 
    await db.query("SELECT * FROM empleado")
    }
       
    static async insertarEmpleado(req,res){
        let {nombre,apellido,email}=req.body;
       let persona = await db.query("INSERT INTO persona (nombre,apellido,email) VALUES (?,?,?)",[nombre,apellido,email])
      res.json(req.body);
    }
    static async eliminarEmpleador(req,res){
        let {id}=req.params;
        await db.query("delete from empleado where id =?",[id ]);
        res.send({mensaje:"registro eliminado"});
    }
    static  async actualizarEmpleados(req,res){
        await db.query("update empleado set nombre =? , apellido=? , email=? where")
    }
    static async buscarEmpleado(req,res){
        await db.query("update  empleado set nombre ?, apellido?, emall=?,  where i");
    }
}   

module.exports=EmpleadoController;


