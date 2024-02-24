import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";

export default function Cart() {
    let { getCart } = useContext(CartContext);

    function getData() {
        return getCart();
    }
    let { data, isLoading } = useQuery("cartData", getData);
    console.log(data?.data.data.products);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="container rounded-3 p-5 my-5 cart">
                    <h2 className="text-black bg-body-secondary fw-bolder rounded-4 p-3 text-center">
                        Cart items : {data?.data?.numOfCartItems}
                    </h2>
                    <div className="my-4">
                        {data?.data?.data?.products?.map((product, index) => {
                            return (
                                <div key={index} className="row g-4 my-5">
                                    <div className="col-md-3">
                                        <img
                                            src={product.product.imageCover}
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="col-md-9 row">
                                        <div className="col-md-8 d-flex justify-content-between flex-column">
                                            <div className="top">
                                                <h2 className="fw-bolder">
                                                    {product.product.title
                                                        .split(" ")
                                                        .slice(0, 3)
                                                        .join(" ")}
                                                </h2>
                                                <h5 className="text-main fw-bolder">
                                                    {
                                                        product.product.category
                                                            .name
                                                    }
                                                </h5>
                                            </div>
                                            <div className="text-main text-capitalize bot">
                                                <h4 className="fw-bolder">
                                                    Price : {product.price} EGP
                                                </h4>
                                                <h4 className="text-black fw-bold">
                                                    rating :{" "}
                                                    {
                                                        product.product
                                                            .ratingsAverage
                                                    }
                                                    <i className="fa-solid fa-star rating-color mx-2"></i>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row g-3 py-3 justify-content-between">
                        <h4 className="text-main fw-bolder bg-body-secondary m-0 rounded-2 fit p-3 d-flex align-items-center text-capitalize">
                            Total Price : {data?.data?.data?.totalCartPrice}
                        </h4>
                        <button className="btn bg-main text-white fit px-5 py-3 fw-bolder">
                            Check Out
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
