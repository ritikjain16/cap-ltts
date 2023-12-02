import React from "react";
import "./service.css";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BookingService = ({ ser }) => {
  return (
    <Card
      sx={{
        width: 300,
        padding: "10px",
        textAlign: "center",
      }}
    >
      <CardMedia sx={{ height: 250 }} image={ser.imgUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ser.sname.replace("_", " ")}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {ser.event.replace("_", " ")}
        </Typography>
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
    </Card>
  );
};

export default BookingService;
