import css from './Header.module.css'


const Header = () => {

    return (
        <div className={css.container}>
            <h2>
                Welcome, user
            </h2>
            <p>
                your tasks
            </p>
        </div>
    );
};

export {Header};