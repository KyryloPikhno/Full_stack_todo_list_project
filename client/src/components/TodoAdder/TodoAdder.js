import {useForm} from "react-hook-form";

import {todoService} from "../../services";
import css from './TodoAdder.module.css';


const TodoAdder = ({setActive}) => {
    const {handleSubmit, register, reset} = useForm()

    const submit = async ({text}) => {
        try {
            await todoService.create(text)
        } catch (e) {
            console.error('Error', e)
        }
        reset()

        setActive(false)
    };

    return (
        <div className={css.popup}>
            <div className={css.closePopup} onClick={() => setActive(false)}>
                X
            </div>
                <h3>Add task</h3>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"
                       placeholder={'   Enter task...'} {...register('text')}/>
                <button>Create task</button>
            </form>
        </div>
    );
};


export {TodoAdder};