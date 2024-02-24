import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();

export default function CartContextProvider({ children }) {
    function addCart(id) {
        let options = {
            headers: {
                token: localStorage.getItem("userToken"),
            },
        };
        let data = {
            productId: id,
        };
        return axios.post(
            `https://ecommerce.routemisr.com/api/v1/cart`,
            data,
            options
        );
    }

    function getCart() {
        let headers = {
            headers: {
                token: localStorage.getItem("userToken"),
            },
        };
        return axios
            .get(`https://ecommerce.routemisr.com/api/v1/cart`, headers)
            .catch((err) => err);
    }

    return (
        <CartContext.Provider value={{ addCart, getCart }}>
            {children}
        </CartContext.Provider>
    );
}
