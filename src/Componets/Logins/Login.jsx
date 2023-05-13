import { useContext } from "react";
import { contexm } from "../Provider/AuthProvider";

const Login = () => {


    let { handleLogin } = useContext(contexm)


    let Login = () => {

        handleLogin()

            .then(res => {
                let user = res.user
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })


    }

    return (
        <div>

            <button onClick={Login}> Login with google</button>


        </div>
    );
};

export default Login;