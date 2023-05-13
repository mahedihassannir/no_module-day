import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../MainPage/Main";
import Home from "../pages/Home.jsx/Home";
import Login from "../Logins/Login";
import Register from "../Logins/Register";
import Services from "../pages/Services";

let router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "Services",
                    element: <Services></Services>,
                    loader: () => fetch(`http://localhost:5000/posts`)
                },

                {
                    path: "Login",
                    element: <Login></Login>
                },
                {
                    path: "Register",
                    element: <Register></Register>
                },

            ]
        }
    ]
)


export default router