import React, { useEffect } from "react";
import "../css/forms.css";
import "../css/password.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppState";
import { useFormik } from "formik";
import { Button, Card, TextField } from "@mui/material";

const validate = (values) => {
  const errors = {};

  if (!values.oldPassword) {
    errors.oldPassword = "Required";
  } else if (values.oldPassword.length < 5) {
    errors.oldPassword = "Must be 5 characters or more";
  } else if (values.oldPassword.length > 10) {
    errors.oldPassword = "Must be 10 characters or less";
  } else if (
    !/^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d).*$/i.test(values.oldPassword)
  ) {
    errors.oldPassword = "Must Contain 1 Uppercase, 1 Lowercase, and 1 Number";
  }

  if (!values.newPassword) {
    errors.newPassword = "Required";
  } else if (values.newPassword.length < 5) {
    errors.newPassword = "Must be 5 characters or more";
  } else if (values.newPassword.length > 10) {
    errors.newPassword = "Must be 10 characters or less";
  } else if (
    !/^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d).*$/i.test(values.newPassword)
  ) {
    errors.newPassword = "Must Contain 1 Uppercase, 1 Lowercase, and 1 Number";
  } else if (values.newPassword === values.oldPassword) {
    errors.newPassword = "New Password can not be equal to Old Password";
  }

  if (!values.renewPassword) {
    errors.renewPassword = "Required";
  } else if (values.newPassword !== values.renewPassword) {
    errors.renewPassword = "Confirm Password must be equal to New Password";
  }

  return errors;
};

const ChangePassword = () => {
  const nav = useNavigate();
  const { user, changePassword } = useAppContext();

  const len = Object.keys(user).length;
  //   console.log(user);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      renewPassword: "",
    },
    validate,
    onSubmit: (values) => {
      delete values.renewPassword;
      values.email = user.email;
      changePassword(values);
    },
  });

  useEffect(() => {
    if (len == 0) {
      nav("/");
    }
  }, []);
  return (
    <div className="mycard">
      <br />
      <h2 className="form-name">Change Password</h2>
      <Card sx={{ width: 475 }}>
        <form onSubmit={formik.handleSubmit} className="form-con">
          <TextField
            id="oldPassword"
            label="Old Password"
            variant="outlined"
            name="oldPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.oldPassword}
          />
          {formik.touched.oldPassword && formik.errors.oldPassword ? (
            <div className="err">{formik.errors.oldPassword}</div>
          ) : null}

          <TextField
            id="newPassword"
            label="New Password"
            variant="outlined"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
          />
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <div className="err">{formik.errors.newPassword}</div>
          ) : null}

          <TextField
            id="renewPassword"
            label="Re-enter New Password"
            variant="outlined"
            name="renewPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.renewPassword}
          />
          {formik.touched.renewPassword && formik.errors.renewPassword ? (
            <div className="err">{formik.errors.renewPassword}</div>
          ) : null}

          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#ff0950",
            }}
          >
            Change
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ChangePassword;
