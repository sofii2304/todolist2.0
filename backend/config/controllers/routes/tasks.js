const express = require('express'); const router = express.Router();
const db = require('../config/db');
// Obtener todas las tareasrouter.get('/', (req, res) => {
db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
        return res.status(500).send(err);
    }
    res.json(results);
});
});
// Crear una nueva tarearouter.post('/', (req, res) => {
const { title, description } = req.body; db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err, results) => {
    if (err) {
        return res.status(500).send(err);
    } res.json({ id: results.insertId, title, description });
});});
// Actualizar una tarea
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body; db.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        } res.json(results);
    });
});

// Eliminar una tarearouter.delete('/:id', (req, res) => {
const { id } = req.params; db.query('DELETE FROM tasks WHERE id = ?', [id], (err, results) => {
    if (err) {
        return res.status(500).send(err);
    } res.json(results);
});});
module.exports = router;