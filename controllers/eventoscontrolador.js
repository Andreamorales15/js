class eventos{
    static async listarEventos(req, res) {
        try {
            const [eventos] = await db.execute("SELECT * FROM eventos");
            res.json(eventos);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener eventos", error });
        }
    }
    static async crearEvento(req, res) {
        let { nombre, descripcion, fecha, lugar, capacidad_max } = req.body;
        try {
            await db.query("INSERT INTO eventos (nombre, descripcion, fecha, lugar, capacidad_max) VALUES (?, ?, ?, ?, ?)", [nombre, descripcion, fecha, lugar, capacidad_max]);
            res.status(201).json({ mensaje: "Evento creado con éxito" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al crear evento", error });
        }
    }
    static async actualizarEvento(req, res) {
        let { id } = req.params;
        let { nombre, descripcion, fecha, lugar, capacidad_max } = req.body;
        try {
            await db.query("UPDATE eventos SET nombre = ?, descripcion = ?, fecha = ?, lugar = ?, capacidad_max = ? WHERE id = ?", [nombre, descripcion, fecha, lugar, capacidad_max, id]);
            res.json({ mensaje: "Evento actualizado con éxito" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar evento", error });
        }
    }
    static async eliminarEvento(req, res) {
        let { id } = req.params;
        try {
            await db.query("DELETE FROM eventos WHERE id = ?", [id]);
            res.json({ mensaje: "Evento eliminado con éxito" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar evento", error });
        }
    }




}
module.exports=eventos;