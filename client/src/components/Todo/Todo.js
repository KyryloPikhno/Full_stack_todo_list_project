import css from './Todo.module.css'
import {todoService} from "../../services";


const Todo = ({todo, setTodos}) => {

    const completeTodo = (id) => {
        try {
        todoService.update(id).then((response)=>setTodos(todos =>todos.map(todo=>{
            if(todo._id===response.data._id){
                todo.complete = response.data.complete
            }
            return todo
        })))
        }catch (e) {
            console.error("Error",e)
        }
    };

    return (
        <div className={css.todo + ' ' + (todo.complete ? 'isComplete' : '')} onClick={() => completeTodo(todo._id)}>
            <div className={css.check}></div>
            <div className={css.text}>{todo.text}</div>
            <div className={css.deleteTodo}>X</div>
        </div>
    );
};

export {Todo};