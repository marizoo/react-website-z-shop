import React from "react";
import { ScNavbar } from "./navbar.styled";
import { FiSearch } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";

const Navbar = ({ toggleMenu, clickToClose }) => {
    return (
        <ScNavbar id="home">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h3 className="navbar__logo-text">Z-shop</h3>
                </div>
            </div>
            <div
                className={
                    toggleMenu
                        ? "navbar__links navbar__active"
                        : "navbar__links"
                }
            >
                <ul className="navbar__links-ul">
                    <li className="navbar__links-li">
                        <a href="#home" onClick={clickToClose}>
                            Home
                        </a>
                    </li>
                    <li className="navbar__links-li">
                        <a href="#gallery" onClick={clickToClose}>
                            Gallery
                        </a>
                    </li>
                    <li className="navbar__links-li">
                        <a href="#announcement" onClick={clickToClose}>
                            Promo
                        </a>
                    </li>
                    <li className="navbar__links-li">
                        <a href="#footer" onClick={clickToClose}>
                            FAQ
                        </a>
                    </li>
                    <li className="navbar__links-li-icon-1">
                        <a href="#" onClick={clickToClose}>
                            <FiSearch />
                        </a>
                    </li>
                    <li className="navbar__links-li-icon">
                        <a href="#" onClick={clickToClose}>
                            <AiFillHeart />
                        </a>
                    </li>
                    <li className="navbar__links-li-icon">
                        <a href="#" onClick={clickToClose}>
                            <GrCart />
                        </a>
                    </li>
                </ul>
            </div>
        </ScNavbar>
    );
};

export default Navbar;
