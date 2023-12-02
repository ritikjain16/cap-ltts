import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const OneBooking = ({ det, isAdmin = false, userId }) => {
  const nav = useNavigate();
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          width: 300,
          padding: "10px",
          // textAlign: "center"
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 17, fontWeight: "bold" }}
            color="text"
            variant="h6"
            gutterBottom
          >
            {det.brideName} - {det.groomName}
            <br />
            {det.location}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="body2">{det.booking_date}</Typography>
          <br />
          <Typography
            variant="h6"
            style={{
              color: det.status === "Pending" ? "#ff5501" : "#13b513",
            }}
          >
            {det.status}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            style={{ color: "#ff325e", borderColor: "#ff325e" }}
            onClick={() => {
              if (!isAdmin) {
                nav(`/bookings/${det.id}`);
              } else {
                nav(`/admin/user/${userId}/bookings/${det.id}`);
              }
            }}
          >
            More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default OneBooking;
