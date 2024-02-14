import React from "react";
import { Link } from "react-router-dom";
import errImg from "../../Assets/images/error.svg";

export default function NoutFound() {
    return (
        <div className="container py-5 d-flex flex-column">
            <h2>Not Found!!!</h2>
            <p className="fa-2x">
                Redirect{" "}
                <Link className="link-dark " to={"/"}>
                    !Here
                </Link>
                <img
                    src={errImg}
                    className="d-block mt-5"
                    alt=""
                />
            </p>
        </div>
    );
}
