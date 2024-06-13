import React from 'react';
import MainPage from "./MainPage.jsx";
import LookingBack from "./LookingBack.jsx";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-neutral-800 p-4 flex justify-between items-center">
            <div className="flex flex-col text-white ml-4 font-semibold">
                <span>Jayden Blom</span>
                <span>1051761</span>
            </div>
            <div className="space-x-4">
                <Link to='/' className="bg-black text-white py-2 px-4 hover:bg-gray-700 active:bg-red-700">Waarom</Link>
                <Link to='/terug-kijken' className="bg-black text-white py-2 px-4 hover:bg-gray-700 active:bg-red-700">Terug Kijken</Link>
                <Link to="/book" className="bg-black text-white py-2 px-4 hover:bg-gray-700 active:bg-red-700">Boek</Link>
            </div>
        </nav>
    );
};

export default Navbar;