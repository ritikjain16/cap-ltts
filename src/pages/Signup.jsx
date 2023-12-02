import React, { useEffect } from "react";
import "../css/forms.css";
import { useFormik } from "formik";
import {
  Card,
  TextField,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppState";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  const genders = ["Male", "Female", "Others"];

  if (!values.gender) {
    errors.gender = "Required";
  } else if (genders.includes(values.gender)) {
    errors.gender = "Select Gender";
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

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Confirm Password must be equal to Password";
  }

  if (!values.mobile) {
    errors.mobile = "Required";
  } else if (values.mobile.length != 10) {
    errors.mobile = "Must be equal to 10 digits";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (values.age < 18) {
    errors.age = "Must be greater than or equal to 18";
  }

  return errors;
};

const Signup = () => {
  const nav = useNavigate();
  const { signUp } = useAppContext();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      password: "",
      confirmPassword: "",
      mobile: "",
      age: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log(values);
      signUp(values, nav);
    },
    // navigate("/login");
  });

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mycard">
      <h2 className="form-name">Signup to Prasann-Wedding</h2>
      <Card sx={{ width: 475 }}>
        <form onSubmit={formik.handleSubmit} className="form-con">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="err">{formik.errors.name}</div>
          ) : null}

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

          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </RadioGroup>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="err">{formik.errors.gender}</div>
          ) : null}

          <TextField
            id="mobile"
            label="Mobile"
            variant="outlined"
            name="mobile"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="err">{formik.errors.mobile}</div>
          ) : null}

          <TextField
            id="age"
            label="Age"
            variant="outlined"
            name="age"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="err">{formik.errors.age}</div>
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

          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="err">{formik.errors.confirmPassword}</div>
          ) : null}

          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#ff0950",
            }}
          >
            Sign up
          </Button>
        </form>
      </Card>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Signup;
