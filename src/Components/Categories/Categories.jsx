import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function Categories() {
    function getGategories() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    }
    useQuery(getGategories, {
      
    });
    return (
        <div className="container py-5 products-container mt-5 rounded-3">
            <h1>Categories</h1>
        </div>
    );
}
