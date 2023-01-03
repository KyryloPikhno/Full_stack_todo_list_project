const router = require("express").Router();

const controller = require("../controller/todo.controller");


router.get('/', controller.getAll);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
