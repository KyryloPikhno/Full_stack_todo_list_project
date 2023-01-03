const Todo = require("../dataBase/Todo");


module.exports = {
    getAll: async (req, res, next) => {
        try {
            const todos = await Todo.find();

            res.status(200).json(todos);
        } catch (e) {
            next(e);
        }
    },

    create: async (req, res, next) => {
        try {
            const todo = await Todo.create(req.body);

            res.json(todo);
        } catch (e) {
            next(e);
        }
    },

    update: async (req, res, next) => {
        try {
            const todo = await Todo.findById(req.params.id)

            todo.complete = !todo.complete

            todo.save()

            res.status(201).json(todo)
        } catch (e) {
            next(e);
        }
    },

    delete: async (req, res, next) => {
        try {
            const result = await Todo.findByIdAndDelete(req.params.id);

            res.status(204).json(result);
        } catch (e) {
            next(e);
        }
    },
};
