import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/freshcart-logo.svg";
import { CounterContext } from "../../Context/Context";
import { UserContext } from "../../Context/UserCotext";

export default function Navbar() {
    let { userToken, setUserToken } = useContext(UserContext);
    let navg = useNavigate();
    function LogOut() {
        localStorage.removeItem("userToken");
        setUserToken(null);
        navg("/login");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="fresh cart logo" />
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {userToken !== null ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/products"
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/categories"
                                    >
                                        Categories
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/brands">
                                        Brands
                                    </NavLink>
                                </li>
                            </ul>
                        ) : (
                            ""
                        )}

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {userToken !== null ? (
                                <li className="nav-item d-flex align-items-center">
                                    <i className="fab mx-2 fa-facebook"></i>
                                    <i className="fab mx-2 fa-twitter"></i>
                                    <i className="fab mx-2 fa-instagram"></i>
                                    <i className="fab mx-2 fa-youtube"></i>
                                    <i className="fab mx-2 fa-tiktok"></i>
                                </li>
                            ) : (
                                ""
                            )}

                            {userToken !== null ? (
                                <li className="nav-item">
                                    <span
                                        className="nav-link cursor-pointer"
                                        onClick={() => LogOut()}
                                    >
                                        Logout
                                    </span>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/login"
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
