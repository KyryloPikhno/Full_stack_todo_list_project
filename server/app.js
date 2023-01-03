const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require('dotenv').config();

const todoRouter = require('./router/todo.router');


const app = express();

app.use(express.json());

app.use(cors());

app.use('/todos', todoRouter);

app.get('/', (req, res) => {
    res.json('WELCOME')
});

app.listen(process.env.PORT, async () => {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
        console.log(`Server start on ${process.env.PORT}`)
    } catch (e) {
        console.log(e)
    }
});