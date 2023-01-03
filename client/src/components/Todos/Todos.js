import {useEffect, useState} from "react";

import {todoService} from "../../services";
import {Todo} from "../Todo/Todo";
import css from './Todos.module.css'


const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        try {
            todoService.getAll()
                .then((response) => setTodos(response.data))
        } catch (e) {
            console.error("Error",e)
        }
    }, []);

    return (
        <div className={css.todos}>
            {todos && todos.map(todo=><Todo key={todo._id} setTodos={setTodos} todo={todo}/>)}
        </div>
    );
};

export {Todos};