import React, { useContext } from "react";
import { wishContext } from "../../Context/WhisListContext";
import { useQuery } from "react-query";

export default function WishList() {
    let { getWish } = useContext(wishContext);

    function getWishList() {
        return getWish().catch((err) => err);
    }

    let { data } = useQuery("WishList", getWishList, {
        cacheTime: 300000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchInterval: 1800000,
    });
    function removeSpecificItem(id) {}
    console.log(data?.data?.data[0]);

    return (
        <div className="container my-5 p-5 cart rounded-3">
            <h2 className="text-black bg-body-secondary fw-bolder rounded-2 p-3 text-center">
                {data?.data?.data
                    ? `Whish List Items : ${data?.data?.data.length}`
                    : "Your Whish List Is Empty"}
            </h2>
            <div className="row g-3">
                {data?.data?.data
                    ? data.data.data.map((product) => {
                          return (
                              <div
                                  className="row col-md-6  py-3 my-4 flex-row"
                                  key={product._id}
                              >
                                  <div className="col-md-3">
                                      <img
                                          className="w-100"
                                          src={product.imageCover}
                                          alt=""
                                      />
                                  </div>
                                  <div className="col-md-9 row">
                                      <div className="col-md-10 d-flex flex-column justify-content-between left">
                                          <div className="top">
                                              <h3 className=" fw-bold">
                                                  {product.title
                                                      .split(" ")
                                                      .slice(0, 3)
                                                      .join(" ")}
                                              </h3>
                                              <h6 className="text-main fw-bold">
                                                  {product.category.name}
                                              </h6>
                                              <p className="muted">
                                                  {product.description}
                                              </p>
                                          </div>
                                          <div className="bottom">
                                              <div
                                                  className="del mb-2 cursor-pointer"
                                                  onClick={() =>
                                                      removeSpecificItem(
                                                          product.product.id
                                                      )
                                                  }
                                              >
                                                  <i className="fa-solid text-danger h5 fa-trash"></i>
                                                  <span className="mx-1 fw-bolder h5 text-danger ">
                                                      Remove Item
                                                  </span>
                                              </div>
                                              <h4 className="text-main fw-bolder">
                                                  Price : {product.price} EGP
                                              </h4>
                                              <h4 className="text-capitalize h5 fw-bold">
                                                  rating :{" "}
                                                  {product.ratingsAverage}
                                                  <i className="fa-solid fa-star rating-color mx-2"></i>
                                              </h4>
                                          </div>
                                      </div>
                                      <div className="col-md-2 right d-flex justify-content-end align-items-end">
                                          <button className="bg-main text-white btn px-4 py-2">
                                              <i class="fa-solid fa-cart-plus h4 m-0 mt-1"></i>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
}
