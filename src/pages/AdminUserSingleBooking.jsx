import React, { useEffect, useState } from "react";

import BookDetcomp from "../components/BookDetcomp";
import { Typography } from "@mui/material";
import BookingService from "../components/BookingServices";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppState";

const AdminUserSingleBooking = () => {
  const { id, bid } = useParams();
  //   console.log(id, bid);
  const { allUsers, services } = useAppContext();
  const [adminuserServices, setadminuserServices] = useState([]);

  const cu = allUsers.find((u) => u.id == id);

  //   console.log(cu);

  const cb = cu.bookings.find((b) => b.id == bid);

  //   console.log(cb);

  const checkout = () => {
    var s = [];
    cb.services.forEach((e) => {
      s.push(services.find((s1) => s1.id == e));
    });
    setadminuserServices(s);
  };

  // console.log(adminuserServices);

  useEffect(() => {
    checkout();
  }, []);
  return (
    <div>
      <div className="b">Booking Details</div>

      <div className="book-con">
        <BookDetcomp name={"Status"} data={cb.status} update={true} id={cb.id} />
        <BookDetcomp name={"Address"} data={cb.address} />
        <BookDetcomp name={"Booking Date"} data={cb.booking_date} />
        <BookDetcomp name={"Bride Age"} data={cb.brideAge} />
        <BookDetcomp name={"Bride Name"} data={cb.brideName} />
        <BookDetcomp name={"Groom Age"} data={cb.groomAge} />
        <BookDetcomp name={"Groom Name"} data={cb.groomName} />
        <BookDetcomp name={"Mobile"} data={cb.mobile} />
        <BookDetcomp name={"Location"} data={cb.location} />
        <BookDetcomp name={"Total Price"} data={`Rs.${cb.totalPrice}/-`} />
      </div>

      <Typography
        gutterBottom
        variant="h4"
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Services
      </Typography>

      <div className="service-type">
        {/* <h1 className="service-type-text">Platinum</h1> */}
        {adminuserServices.length != 0 && (
          <div className="services-con">
            {adminuserServices.map((s) => (
              <BookingService key={s.id} ser={s} />
            ))}
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AdminUserSingleBooking;
