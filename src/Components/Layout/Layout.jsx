import React, { useContext, useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { UserContext } from "../../Context/UserCotext";
import { CartContext } from "../../Context/CartContext";
import { data } from "jquery";
export default function Layout() {
    let { setUserToken } = useContext(UserContext);
    let { getCart, setCartCounter } = useContext(CartContext);

    async function getData() {
        let response = await getCart().catch((err) => err);
        if (response?.data?.status === "success") {
            setCartCounter(response.data.numOfCartItems);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("userToken") !== null) {
            setUserToken(localStorage.getItem("userToken"));
            getData();
        }
    }, []);
    return (
        <>
            <Navbar />
            <div className=" pt-5 layout">
                <Outlet></Outlet>
            </div>
        </>
    );
}
