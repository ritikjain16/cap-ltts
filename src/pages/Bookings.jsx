import React, { useEffect } from "react";
import { useAppContext } from "../context/AppState";
import { Typography } from "@mui/material";
import OneBooking from "../components/OneBooking";
import "../css/bookings.css";
import { useNavigate } from "react-router-dom";
const Bookings = () => {
  const nav = useNavigate();
  const { user } = useAppContext();
  const { bookings } = user;
  //   console.log(bookings);
  const len = Object.keys(user).length;

  let currentBookings = [];
  if (len != 0) {
    currentBookings = bookings.sort(function (a, b) {
      return new Date(b.booking_date) - new Date(a.booking_date);
    });
  } else {
    nav("/");
  }

  // console.log(currentBookings[0]);

  useEffect(() => {
    if (len == 0) {
      nav("/");
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        style={{
          margin: "50px",
        }}
      >
        My Bookings
      </Typography>

      {currentBookings.length != 0 ? (
        <div className="bookings-con">
          {currentBookings.map((c) => (
            <OneBooking key={c.id} det={c} />
          ))}
        </div>
      ) : (
        <div className="no-book">
          <Typography variant="h4">You have made no Bookings yet!!</Typography>
        </div>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Bookings;
