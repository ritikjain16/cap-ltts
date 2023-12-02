import React from "react";
import "./service.css";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../context/AppState";
import { useNavigate } from "react-router-dom";

const Service = ({ ser }) => {
  const nav = useNavigate();
  const { user, selectService, addService, removeService } = useAppContext();
  const len = Object.keys(user).length;
  // console.log(selectService);
  return (
    <Card
      sx={{
        width: 300,
        padding: "10px",
        textAlign: "center",
      }}
    >
      {/* <div className="ser-con">
        <h3>{ser.event.replace("_", " ")}</h3>
        <img src={ser.imgUrl} alt="" className="serimg"></img>
      </div> */}

      <CardMedia sx={{ height: 250 }} image={ser.imgUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ser.event.replace("_", " ")}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        <Typography
          variant="p"
          gutterBottom
          component="div"
          style={{
            fontSize: "20px",
            color: "green",
          }}
        >
          Rs.{ser.cost}.00
        </Typography>
        <Typography
          variant="p"
          gutterBottom
          component="div"
          style={{
            fontSize: "18px",
          }}
        >
          No. of {ser.cap_type} : {ser.capacity}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        style={{
          width: "250px",
          backgroundColor: !selectService.includes(ser.id)?"#ff325e":"gray",
          textTransform: "capitalize",
          color: "snow",
          fontSize: "20px",
        }}
        onClick={() => {
          if (len != 0) {
            if (!selectService.includes(ser.id)) {
              addService(ser.id);
            } else {
              removeService(ser.id);
            }
          } else {
            alert("Please Login");
            nav("/login");
          }
        }}
      >
        {!selectService.includes(ser.id) ? "Select" : "Selected"}
      </Button>
    </Card>
  );
};

export default Service;
