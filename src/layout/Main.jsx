import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css'

const Main = () => {
    return (
        <div>
            <Navbar>Navbar</Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <footer>  </footer>
        </div>
    );
};

export default Main;