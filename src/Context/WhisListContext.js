import axios from "axios";
import React, { createContext } from "react";

export let wishContext = createContext();
export default function WhisListContextProvider({ children }) {
    function addWish(e, productId) {
        console.log(e.currentTarget.children[0]);
        let body = {
            productId,
        };
        let options = {
            headers: {
                token: localStorage.getItem("userToken"),
            },
        };
        return axios
            .post(
                `https://ecommerce.routemisr.com/api/v1/wishlist`,
                body,
                options
            )
            .catch((err) => err);
    }
    function getWish() {
        let options = {
            headers: {
                token: localStorage.getItem("userToken"),
            },
        };
        return axios(
            "https://ecommerce.routemisr.com/api/v1/wishlist",
            options
        );
    }
    return (
        <wishContext.Provider value={{ addWish, getWish }}>
            {children}
        </wishContext.Provider>
    );
}
