import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppState";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import BookDetcomp from "../components/BookDetcomp";
import BookingService from "../components/BookingServices";

const BookingDetails = () => {
  const { id } = useParams();
  const { user, services } = useAppContext();
  const { bookings } = user;
  const [bookingServices, setbookingServices] = useState([]);
  //   console.log(bookings);
  const len = Object.keys(user).length;


  const cb = bookings.find((b) => b.id == id);

  const checkout = (ser) => {
    var s = [];
    // console.log(cb.services);
    cb.services.forEach((e) => {
      s.push(services.find((s1) => s1.id == e));
    });
    setbookingServices(s);
  };

  useEffect(() => {
    checkout(cb.services);
    window.scrollTo(0, 0);
  }, []);

  // console.log(bookingServices);
  return (
    <div>
      <div className="b">Booking Details</div>

      <div className="book-con">
        <BookDetcomp name={"Status"} data={cb.status} />
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
        {bookingServices.length != 0 && (
          <div className="services-con">
            {bookingServices.map((s) => (
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

export default BookingDetails;
