import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserCotext";

export default function ResetPassword() {
    const navg = useNavigate();
    let [errMes, setErr] = useState("");
    let [sucMes, setSuc] = useState("");
    let [lodaing, setLoading] = useState(true);
    let { setUserToken } = useContext(UserContext);

    // Formik calidationSchema
    let validationSchema = Yup.object({
        email: Yup.string()
            .email("Email is Invalid")
            .required("Email is required"),
        newPassword: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                "At least 8 characters long, Contains at least one uppercase letter And, Contains at least one lowercase letter."
            )
            .required("Password is required"),
    });
    // Formik setup
    let formik = useFormik({
        //intial values
        initialValues: {
            email: "",
            newPassword: "",
        },
        //validate
        validationSchema,
        // function
        onSubmit: sendNewPass,
    });

    // Send The data to Database
    async function sendNewPass(values) {
        setLoading(false);
        let req = await axios
            .put(
                "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
                values
            )
            .catch((err) => {
                console.log(err);
                setErr(err.response.data.message);
                setSuc("");
                setLoading(true);
            });
        console.log(req);
        if (req.data.token) {
            setSuc(req.statusText);
            setUserToken();
            setLoading(true);
            navg("/login");
        }
    }
    // ############################################
    // ############################################
    // ############################################
    return (
        <>
            <div className="container py-5">
                {errMes && !sucMes ? (
                    <div className="text-capitalize alert alert-danger">
                        {errMes}
                    </div>
                ) : (
                    ""
                )}

                {sucMes ? (
                    <div className="text-capitalize alert alert-success">
                        {sucMes}
                    </div>
                ) : (
                    ""
                )}

                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                            className={
                                !formik.errors
                                    ? "mt-1 form-control"
                                    : "mt-1 form-control"
                            }
                            name="email"
                            id="email"
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <div className="alert alert-danger mt-1">
                                {formik.errors.email}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="newPassword">New Passwrod:</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            className={
                                !formik.errors
                                    ? "mt-1 form-control"
                                    : "mt-1 form-control"
                            }
                            name="newPassword"
                            id="newPassword"
                        />
                        {formik.errors.newPassword &&
                        formik.touched.newPassword ? (
                            <div className="alert alert-danger mt-1">
                                {formik.errors.newPassword}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    {lodaing ? (
                        <button
                            disabled={!(formik.isValid && formik.dirty)}
                            className="btn bg-main text-white mt-3"
                            type="submit"
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn bg-main text-white mt-3"
                        >
                            <i className="fa-solid fa-spinner fa-spin"></i>
                        </button>
                    )}
                </form>
            </div>
        </>
    );
}
