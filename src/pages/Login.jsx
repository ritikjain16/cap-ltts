import React from "react";
import "../css/forms.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Card, TextField, Button } from "@mui/material";
import { useAppContext } from "../context/AppState";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Must be 5 characters or more";
  } else if (values.password.length > 10) {
    errors.password = "Must be 10 characters or less";
  } else if (!/^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d).*$/i.test(values.password)) {
    errors.password = "Must Contain 1 Uppercase, 1 Lowercase, and 1 Number";
  }

  return errors;
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAppContext();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log(values);
      login(values, navigate);
      // navigate("/user");
    },
  });
  return (
    <div className="mycard">
      <br />
      <br />
      <h2 className="form-name">Login to Prasann-Wedding </h2>
      <Card sx={{ width: 475 }}>
        <form onSubmit={formik.handleSubmit} className="form-con">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="err">{formik.errors.email}</div>
          ) : null}

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="err">{formik.errors.password}</div>
          ) : null}

          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#ff0950",
            }}
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
