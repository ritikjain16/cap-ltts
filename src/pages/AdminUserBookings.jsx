import React from "react";
import { useAppContext } from "../context/AppState";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import OneBooking from "../components/OneBooking";
import "../css/bookings.css";
const AdminUserBookings = () => {
  const { id } = useParams();
  const { allUsers } = useAppContext();

  const cu = allUsers.find((u) => u.id == id);

  let currentBookings = [];
  if (cu.bookings.length != 0) {
    currentBookings = cu.bookings.sort(function (a, b) {
      return new Date(b.booking_date) - new Date(a.booking_date);
    });
  }

  // console.log(cu);

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
        {cu.email} Bookings
      </Typography>
      {currentBookings.length != 0 ? (
        <div className="bookings-con">
          {currentBookings.map((c) => (
            <OneBooking key={c.id} det={c} isAdmin={true} userId={cu.id} />
          ))}
        </div>
      ) : (
        <div className="no-book">
          <Typography variant="h4">
            {cu.email} have made no Bookings yet!!
          </Typography>
        </div>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default AdminUserBookings;
