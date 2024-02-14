import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="shadow-md w-full fixed top-0 left-0 z-50">
            <div className="md:flex bg-white items-center justify-between py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <img src={logo} alt="logo" />
                </div>
                <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setMenu(!menu)}>
                    {menu ? <FiMenu /> : <IoCloseOutline />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${menu ? 'hidden' : 'block'}`}>
                    <li className="md:ml-8 text-lg font-bold md:my-0 my-7">
                        <Link to="/" className="text-gray-800 hover:text-gray-400 duration-500">Characters</Link>
                    </li>
                    <li className="md:ml-8 text-lg font-bold md:my-0 my-7">
                        <Link to="/locations" className="text-gray-800 hover:text-gray-400 duration-500">Locations</Link>
                    </li>
                    <li className="md:ml-8 text-lg font-bold md:my-0 my-7">
                        <Link to="/episodes" className="text-gray-800 hover:text-gray-400 duration-500">Episodes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;