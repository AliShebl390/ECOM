import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function Categories() {
    function getGategories() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    }
    let { data, isLoading } = useQuery("Gategories", getGategories, {
        cacheTime: 300000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: 1800000,
    });

    function getSpecificCategory(id) {}

    console.log(data);
    return (
        <div className="container p-5 products-container mt-5 rounded-3">
            <div className="row g-5">
                {data?.data?.data?.map((category) => {
                    return (
                        <div
                            onClick={(id) => getSpecificCategory(category._id)}
                            className="cursor-pointer col-md-4 col-sm-6 col-lg-3"
                        >
                            <div className="card">
                                <img
                                    style={{ height: "340px" }}
                                    src={category.image}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center text-capitalize m-0 fw-bolder">
                                        {category.name}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
