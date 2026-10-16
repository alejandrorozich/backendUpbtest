const { Router } = require('express');
const productoController = require('../controllers/producto.controller');

const router = Router();

router.get('/', productoController.listar);
// Debe ir antes de '/:id' para que "resumen" no se tome como un id
router.get('/resumen', productoController.resumen);
router.get('/:id', productoController.obtener);
router.post('/', productoController.crear);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;
