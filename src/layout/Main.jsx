import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar>Navbar</Navbar>
            <Outlet></Outlet>
            <footer>Footer</footer>
        </div>
    );
};

export default Main;