import {todoService} from "../../services";
import css from './Todo.module.css'


const Todo = ({todo, setTodos}) => {
    const completeTodo = (id) => {
        try {
            todoService.update(id)
                .then((response) => setTodos(todos => todos.map(todo => {
                if (todo._id === response.data._id) {
                    todo.complete = response.data.complete
                }
                return todo
            })));
        } catch (e) {
            console.error("Error", e)
        }
    };

    const deleteTodo = (id) =>{
        try {
            todoService.delete(id)
                .then((response) => setTodos(todos => todos.filter(todo => todo._id !== response.data._id)))
            }catch (e){
            console.error("Error", e)
        }
    }

    return (
        <div className={css.todo + ' ' + (todo.complete ? 'isComplete' : '')}
             onClick={() => completeTodo(todo._id)}>
            <div className={css.check}>

            </div>
            <div className={css.text}>
                {todo.text}
            </div>
            <div className={css.deleteTodo} onClick={()=>deleteTodo(todo._id)}>
                X
            </div>
        </div>
    );
};

export {Todo};