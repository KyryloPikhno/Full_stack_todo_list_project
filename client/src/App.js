import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayoutPage} from "./layouts";
import {TodosPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayoutPage/>}>
                <Route index element={<Navigate to={'/todo_list'}/>}/>
                <Route path={'/todo_list'} element={<TodosPage/>}/>
            </Route>
        </Routes>
    );
}


export default App;
