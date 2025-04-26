import {RouterProvider} from "react-router-dom";
import router from "./routing/routing";
import './styles/styles.scss'

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;