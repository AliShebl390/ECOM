import React, { useState } from "react";
import styles from "./ForgetPassword.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
    let navg = useNavigate();
    let [errMes, setErr] = useState("");
    let [sucMes, setSuc] = useState("");
    let [errMesReset, setErrReset] = useState("");
    let [sucMesReset, setSucReset] = useState("");
    let [lodaing, setLoading] = useState(true);
    let [formState, setFormState] = useState(true);

    let validationSchema = Yup.object({
        email: Yup.string()
            .email("Email is Invalid")
            .required("Email is required"),
    });
    let validationSchemaReset = Yup.object({
        resetCode: Yup.string()
            .required("Code is required")
            .matches(/^[0-9]{3,6}$/, "Enter A Valid Code"),
    });

    let form = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: forgetPassworrd,
    });
    let formReset = useFormik({
        initialValues: {
            resetCode: "",
        },
        validationSchema: validationSchemaReset,
        onSubmit: resetPassword,
    });
    async function resetPassword(val) {
        let req = await axios
            .post(
                "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
                val
            )
            .catch((err) => {
                setErrReset(err.response.data.message);
            });
        if (req.data.status == "Success") {
            setSucReset(req.data.status);
            navg("/restpass");
        }
    }
    async function forgetPassworrd(val) {
        let req = await axios
            .post(
                "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
                val
            )
            .catch((err) => {
                setErr(err.response.data.message);
                setSuc("");
            });
        if (req.data.statusMsg == "success") {
            setSuc(req.data.message);
            setFormState(false);
        }
    }
    return (
        <div className="container py-5">
            {formState ? (
                <div className="formOne">
                    <h2>Verify Email </h2>
                    {sucMes ? (
                        <div className="alert alert-success  text-capitalize">
                            {sucMes}
                        </div>
                    ) : (
                        ""
                    )}
                    {errMes && !sucMes ? (
                        <div className="alert alert-danger text-capitalize">
                            {errMes}
                        </div>
                    ) : (
                        ""
                    )}

                    <form onSubmit={form.handleSubmit}>
                        <label htmlFor="email">Enter Your Email :</label>
                        <input
                            className="form-control  mt-1"
                            type="email"
                            id="email"
                            name="email"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        {form.errors.email && form.touched.email ? (
                            <p className="text-danger m-0 pt-2">
                                {form.errors.email}
                            </p>
                        ) : (
                            ""
                        )}
                        {lodaing ? (
                            <button
                                disabled={!(form.isValid && form.dirty)}
                                className="btn bg-main text-white mt-3"
                                type="submit"
                            >
                                Send
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
            ) : (
                <div className="formTwo">
                    <h2>Resert Code </h2>
                    {sucMesReset ? (
                        <div className="alert alert-success  text-capitalize">
                            {sucMesReset}
                        </div>
                    ) : (
                        ""
                    )}
                    {errMesReset && !sucMesReset ? (
                        <div className="alert alert-danger text-capitalize">
                            {errMesReset}
                        </div>
                    ) : (
                        ""
                    )}
                    <form onSubmit={formReset.handleSubmit}>
                        <label htmlFor="resetCode">Enter Reset Code :</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            name="resetCode"
                            id="resetCode"
                            onChange={formReset.handleChange}
                            onBlur={formReset.handleBlur}
                        />
                        {formReset.errors.resetCode &&
                        formReset.touched.resetCode ? (
                            <p className="text-danger m-0 pt-2">
                                {formReset.errors.resetCode}
                            </p>
                        ) : (
                            ""
                        )}
                        <button
                            type="submit"
                            className="btn bg-main text-white mt-3"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
