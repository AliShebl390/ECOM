import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";

export default function Product({ product }) {
    let { addCart } = useContext(CartContext);

    async function addToCart(id) {
        let response = await addCart(id);
        if (response.data.status === "success") {
            toast.success(response.data.message, {
                style: {
                    boxShadow: "none",
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                    maxWidth: "385px",
                },
                position: "top-left",
            });
        }
    }

    return (
        <>
            <div className="col-md-4 col-lg-3 col-xl-2 cursor-pointer ">
                <div className="product p-2 rounded-3 text-capitalize">
                    <Toaster />
                    <Link to={`/product/` + product._id}>
                        <img
                            src={product.imageCover}
                            className="w-100"
                            alt=""
                        />
                        <h6 className="text-main fw-bold mt-2">
                            {product.category.name}
                        </h6>
                        <h5>
                            {product.title.split(" ").slice(0, 2).join(" ")}
                        </h5>
                        <div className="d-flex justify-content-between">
                            <span>{product.price} EGP</span>
                            <span>
                                <i className="fa-solid fa-star rating-color"></i>
                                {product.ratingsAverage}
                            </span>
                        </div>
                    </Link>
                    <button
                        onClick={() => addToCart(product._id)}
                        className="btn mt-2 bg-main text-white d-block w-100"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </>
    );
}
