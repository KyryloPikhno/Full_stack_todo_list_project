const router = require("express").Router();

const controller = require("../controller/todo.controller");


router.get('/', controller.getAll);

router.get('/:id', controller.update);

router.post('/', controller.create);

router.delete('/:id', controller.delete);

module.exports = router;
