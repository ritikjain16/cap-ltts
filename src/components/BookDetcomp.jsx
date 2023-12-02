import React from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAppContext } from "../context/AppState";
const BookDetcomp = ({ name, data, update = false, id = "" }) => {
  const { updateStatus } = useAppContext();
  const [status, setstatus] = useState(data);
  return (
    <div className="onecon">
      <Typography
        gutterBottom
        variant="h6"
        style={{
          width: "300px",
        }}
      >
        {name}
      </Typography>
      {!update ? (
        <Typography
          gutterBottom
          variant="h6"
          style={{
            width: "300px",
          }}
        >
          {data}
        </Typography>
      ) : (
        <>
          <div className="">
            <InputLabel id="demo-simple-select-label1"></InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="status"
              name="status"
              label="Status"
              style={{ width: "150px" }}
              value={status}
              onChange={(e) => {
                setstatus(e.target.value);
              }}
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Approved"}>Approved</MenuItem>
            </Select>
          </div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#ff325e",
              color: "white",
              width: "150px",
              marginLeft: "20px",
            }}
            onClick={() => {
              if (id != "") {
                updateStatus(id, status);
              }
            }}
          >
            Update
          </Button>
        </>
      )}
    </div>
  );
};

export default BookDetcomp;
