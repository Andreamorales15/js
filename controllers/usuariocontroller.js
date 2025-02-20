let db = require("../config/database")

 class Usuario
{
 static async obternerUsuarios (req, res){
   // obtenerEmpleados (req,res) 
    await db.query("SELECT * FROM usuaro")
    }
       
    static async insertarUusuario(req,res){
        let {nombre,contrasena,email}=req.body;
       let persona = await db.query("INSERT INTO usuario (nombre,contrasena,email) VALUES (?,?,?)",[nombre,contrasena,email])
      res.json(req.body);
    }
    static async eliminarUsuario(req,res){
        let {id}=req.params;
        await db.query("delete from usuario where id =?",[id ]);
        res.send({mensaje:"usuario eliminado"});
    }
    static async actualizarUsuario(req, res) {
        let { id } = req.params;
        let { nombre, contrasena, email, rol } = req.body;
        try {
            await db.query("UPDATE usuario SET nombre = ?, contrasena = ?, email = ?, rol = ? WHERE id = ?", [nombre, contrasena, email, rol, id]);
            res.json({ mensaje: "Usuario actualizado con éxito" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar usuario", error });
        }
    }

    static async buscarEmpleado(req,res){
        await db.query("update  empleado set nombre ?, apellido?, emall=?,  where i");
    }
}   

module.exports=Usuario;


