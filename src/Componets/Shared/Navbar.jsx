import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexm } from "../Provider/AuthProvider";

const Navbar = () => {

    let { user, HandleLogout } = useContext(contexm)


    let logout = () => {
        HandleLogout()
            .then(res => { })

    }

    return (
        <div>
            <nav className="flex mt-10 justify-center">

                <ul className="flex gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/Services">Service</Link>

                    {
                        user ? <button onClick={logout}>Logout</button>
                            : <Link to="/Login">Login</Link>



                    }
                    {
                        user&& <span>{user.email}</span>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;