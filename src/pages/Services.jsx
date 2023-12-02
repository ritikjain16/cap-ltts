import React, { useEffect } from "react";
import Service from "../components/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppState";
import "../css/services.css";
import { Button } from "@mui/material";
const Services = () => {
  const { type } = useParams();
  const nav = useNavigate();
  // console.log(type);
  const { services, selectService } = useAppContext();

  // console.log(services);

  const platinumServices = services.filter(
    (s) => s.sname.toLowerCase() === `${type}_Platinum`.toLowerCase()
  );

  const goldServices = services.filter(
    (s) => s.sname.toLowerCase() === `${type}_Gold`.toLowerCase()
  );

  const silverServices = services.filter(
    (s) => s.sname.toLowerCase() === `${type}_Silver`.toLowerCase()
  );

  // console.log(platinumServices);
  // console.log(goldServices);
  // console.log(silverServices);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <h1 className="type">{type}</h1>
        <div className="service-type">
          <h1 className="service-type-text">Platinum</h1>
          <div className="services-con">
            {platinumServices.map((s) => (
              <Service key={s.id} ser={s} />
            ))}
          </div>
        </div>
        <div className="service-type">
          <h1 className="service-type-text">Gold</h1>
          <div className="services-con">
            {goldServices.map((s) => (
              <Service key={s.id} ser={s} />
            ))}
          </div>
        </div>
        <div className="service-type">
          <h1 className="service-type-text">Silver</h1>
          <div className="services-con">
            {silverServices.map((s) => (
              <Service key={s.id} ser={s} />
            ))}
          </div>
        </div>
      </div>
      {selectService.length != 0 && (
        <div className="checkout-service">
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
              nav("/checkout");
            }}
          >
            Checkout {`(${selectService.length} services)`}
          </Button>
        </div>
      )}
      <br />
      <br />
      <br />
    </>
  );
};

export default Services;
