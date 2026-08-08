/**
 * creamos un módulo por eso utilizamos express
 */
const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

router.get('/', empleadoCtrl.getEmpleados); // Obtener empleados
router.post('/', empleadoCtrl.createEmpleados); // Guardar
router.get('/:id', empleadoCtrl.getUnicoEmpleado); // Obtiene un único empleado
router.put('/:id', empleadoCtrl.editarEmpleado); // Actualizar datos
router.delete('/:id', empleadoCtrl.eliminarEmpleado); // Eliminar

module.exports = router;
