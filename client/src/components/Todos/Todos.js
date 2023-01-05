import {useEffect, useState} from "react";

import {todoService} from "../../services";
import {TodoAdder} from "../TodoAdder/TodoAdder";
import {Todo} from "../Todo/Todo";
import css from './Todos.module.css'


const Todos = () => {
    const [todos, setTodos] = useState([]);

    const [active, setActive] = useState([]);

    useEffect(() => {
        try {
            todoService.getAll()
                .then((response) => setTodos(response.data))
        } catch (e) {
            console.error("Error", e)
        }
    }, [todos]);

    return (
        <div className={css.todos}>
            {
                active &&
                        <TodoAdder setActive={setActive}/>
            }
            <div className={css.addTodo} onClick={() => setActive(true)}>
                +
            </div>
            {
                todos.length !== 0 ?
                todos.map(todo => <Todo key={todo._id} setTodos={setTodos} todo={todo}/>)
                    :
                    <h3>Such empty 🥴</h3>
            }
        </div>
    );
};


export {Todos};