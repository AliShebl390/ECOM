import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
import Product from "../Product/Product";

export default function Products() {
    let [page, setPage] = useState(1);

    function getProducts(queryData) {
        return axios.get(
            `https://ecommerce.routemisr.com/api/v1/products?page=${queryData.queryKey[1]}`
        );
    }

    let { isLoading, data, isError, error, isFetching } = useQuery(
        ["products", page],
        getProducts,
        {
            cacheTime: 300000,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchInterval: 1800000,
        }
    );

    function getPage(pageNum) {
        setPage(pageNum);
    }

    return (
        <>
            {isLoading && <Loader />}
            <div className="container mb-5 p-5 pb-2">
                <div className="row 5">
                    {data?.data.data.map((product) => {
                        return <Product key={product._id} product={product} />;
                    })}
                </div>
                <nav aria-label="Page navigation example" className="mt-4 ">
                    <ul className="pagination align-items-center justify-content-center">
                        <li className="page-item cursor-pointer">
                            <a className="page-link" onClick={() => getPage(1)}>
                                1
                            </a>
                        </li>
                        <li className="page-item cursor-pointer">
                            <a className="page-link" onClick={() => getPage(2)}>
                                2
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
