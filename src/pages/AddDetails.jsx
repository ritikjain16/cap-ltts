import React, { useEffect } from "react";
import "../css/forms.css";
import { useFormik } from "formik";
import {
  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppState";

const locations = [
  "Mysore",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
];

const validate = (values) => {
  const errors = {};
  if (!values.brideName) {
    errors.brideName = "Required";
  } else if (values.brideName.length > 15) {
    errors.brideName = "Must be 15 characters or less";
  }
  if (!values.groomName) {
    errors.groomName = "Required";
  } else if (values.groomName.length > 15) {
    errors.groomName = "Must be 15 characters or less";
  }

  if (!values.location) {
    errors.location = "Required";
  } else if (!locations.includes(values.location)) {
    errors.location = "Select location";
  }

  if (!values.booking_date) {
    errors.booking_date = "Required";
  } else if (new Date(values.booking_date) < new Date()) {
    errors.booking_date = "Booking Date cannot be older than today date";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.mobile) {
    errors.mobile = "Required";
  } else if (values.mobile.length != 10) {
    errors.mobile = "Must be equal to 10 digits";
  }

  if (!values.brideAge) {
    errors.brideAge = "Required";
  } else if (values.brideAge < 18) {
    errors.brideAge = "Must be greater than or equal to 18";
  }

  if (!values.groomAge) {
    errors.groomAge = "Required";
  } else if (values.groomAge < 18) {
    errors.groomAge = "Must be greater than or equal to 18";
  }

  return errors;
};

const AddDetails = () => {
  const nav = useNavigate();
  //   const { signUp } = useAppContext();
  const { user, addBooking } = useAppContext();
  const len = Object.keys(user).length;
  const formik = useFormik({
    initialValues: {
      booking_date: "",
      location: "",
      brideName: "",
      groomName: "",
      brideAge: "",
      groomAge: "",
      mobile: "",
      address: "",
    },
    validate,
    onSubmit: (values) => {
      //   console.log(values);
      addBooking(values, nav);
    },
    // navigate("/login");
  });

  useEffect(() => {
    if (len == 0) {
      nav("/login");
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mycard">
      <h2 className="form-name">Booking Details</h2>
      <Card sx={{ width: 475 }}>
        <form onSubmit={formik.handleSubmit} className="form-con">
          <TextField
            id="booking_date"
            // label="Booking Date (must be in YYYY-MM-DD)"
            variant="outlined"
            name="booking_date"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.booking_date}
            // placeholder="YYYY-MM-DD"
          />
          {formik.touched.booking_date && formik.errors.booking_date ? (
            <div className="err">{formik.errors.booking_date}</div>
          ) : null}

          {/* <TextField
            id="location"
            label="Location"
            variant="outlined"
            name="location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location ? (
            <div className="err">{formik.errors.location}</div>
          ) : null} */}
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="location"
            name="location"
            label="Location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          >
            {locations.map((l) => (
              <MenuItem key={l} value={l}>
                {l}
              </MenuItem>
            ))}
            {/* <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          {formik.touched.location && formik.errors.location ? (
            <div className="err">{formik.errors.location}</div>
          ) : null}

          <TextField
            id="brideName"
            label="Bride Name"
            variant="outlined"
            name="brideName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brideName}
          />
          {formik.touched.brideName && formik.errors.brideName ? (
            <div className="err">{formik.errors.brideName}</div>
          ) : null}

          <TextField
            id="brideAge"
            label="Bride Age"
            variant="outlined"
            name="brideAge"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brideAge}
          />
          {formik.touched.brideAge && formik.errors.brideAge ? (
            <div className="err">{formik.errors.brideAge}</div>
          ) : null}

          <TextField
            id="groomName"
            label="Groom Name"
            variant="outlined"
            name="groomName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.groomName}
          />
          {formik.touched.groomName && formik.errors.groomName ? (
            <div className="err">{formik.errors.groomName}</div>
          ) : null}

          <TextField
            id="groomAge"
            label="Groom Age"
            variant="outlined"
            name="groomAge"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.groomAge}
          />
          {formik.touched.groomAge && formik.errors.groomAge ? (
            <div className="err">{formik.errors.groomAge}</div>
          ) : null}

          <TextField
            id="mobile"
            label="Contact Number"
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
            id="address"
            label="Address"
            variant="outlined"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            style={{
              zIndex: 1,
            }}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="err">{formik.errors.address}</div>
          ) : null}

          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#ff0950",
            }}
          >
            Add Booking
          </Button>
        </form>
      </Card>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddDetails;
