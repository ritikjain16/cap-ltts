import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppState";
import { useNavigate } from "react-router-dom";
import "../css/services.css";
import CheckoutService from "../components/CheckoutService";
import { Button, Typography } from "@mui/material";
const Checkout = () => {
  const nav = useNavigate();
  const {
    user,
    services,
    selectService,
    addService,
    removeService,
    total,
    settotal,
  } = useAppContext();
  const len = Object.keys(user).length;

  const [checkoutServices, setcheckoutServices] = useState([]);

  const checkout = () => {
    var s = [];
    selectService.forEach((e) => {
      s.push(services.find((s1) => s1.id == e));
    });
    setcheckoutServices(s);
  };

  //   console.log(checkoutServices);

  const totalBill = () => {
    let amt = 0;
    checkoutServices.forEach((s) => {
      amt += s.cost;
    });
    settotal(amt);
  };

  useEffect(() => {
    if (len == 0) {
      nav("/login");
    }
    checkout();
    totalBill();
  }, [checkoutServices]);

  return (
    <div>
      {checkoutServices.length != 0 ? (
        <>
          <div className="service-type">
            {/* <h1 className="service-type-text">Platinum</h1> */}
            {checkoutServices.length != 0 && (
              <div className="services-con">
                {checkoutServices.map((s) => (
                  <CheckoutService key={s.id} ser={s} />
                ))}
              </div>
            )}
          </div>

          <div className="bill-con">
            <Typography gutterBottom variant="h4" component="div">
              Bill Details
            </Typography>

            <div className="continue">
              <Typography gutterBottom variant="h6" component="div">
                <b> Amount to be paid :</b> {total}/- only
              </Typography>

              <Button
                variant="contained"
                style={{
                  width: "250px",
                  backgroundColor: "#ff325e",
                  textTransform: "capitalize",
                  color: "snow",
                  fontSize: "20px",
                }}
                onClick={() => {
                  nav("/details");
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <br />
          <br />
          <div className="no-book">
            <Typography variant="h4">
              No Services to checkout
            </Typography>
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Checkout;
