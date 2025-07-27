import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setMenuOpen(false);
    };

    const navClass = (tabName) =>
        `cursor-pointer py-[27px] border-b-[3px] transition-all duration-300 ${
        activeTab === tabName
            ? "border-orange-600 text-orange-500"
            : "border-transparent hover:border-orange-600"
        }`;

    return (
        <>
        <div className="header fixed top-0 w-full h-20 z-50 flex justify-between items-center px-4 md:px-20 py-4 bg-neutral-800 text-amber-50 shadow-md backdrop-blur">
            {/* Logo */}
            <h2 className="uppercase text-2xl font-bold">
            Sixteen <span className="text-orange-600">Clothing</span>
            </h2>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-10 font-semibold">
            <NavLink
                to="/home"
                onClick={() => handleTabClick("Home")}
                className={navClass("Home")}
            >
                Home
            </NavLink>
            <NavLink
                to="/products"
                onClick={() => handleTabClick("Products")}
                className={navClass("Products")}
            >
                Our Products
            </NavLink>
            <NavLink
                to="/about"
                onClick={() => handleTabClick("About")}
                className={navClass("About")}
            >
                About Us
            </NavLink>
            <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={navClass("Contact")}
            >
                Contact Us
            </NavLink>
            </nav>

            {/* Mobile Menu Icon */}
            <div className="flex lg:hidden">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer text-3xl text-orange-600 focus:outline-none"
            >
                ☰
            </button>
            </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className="lg:hidden animate-fade-down text-lg backdrop-blur bg-orange-600/10 fixed top-[80px] left-1/2 -translate-x-1/2 w-[90%] text-center rounded-xl shadow-md py-4 z-40">
            <nav className="flex flex-col gap-3">
                <NavLink
                to="/home"
                onClick={() => handleTabClick("Home")}
                className={navClass("Home")}
                >
                Home
                </NavLink>
                <NavLink
                to="/products"
                onClick={() => handleTabClick("Products")}
                className={navClass("Products")}
                >
                Our Products
                </NavLink>
                <NavLink
                to="/about"
                onClick={() => handleTabClick("About")}
                className={navClass("About")}
                >
                About Us
                </NavLink>
                <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={navClass("Contact")}
                >
                Contact Us
                </NavLink>
            </nav>
            </div>
        )}
        </>
    );
}

export default Header;
