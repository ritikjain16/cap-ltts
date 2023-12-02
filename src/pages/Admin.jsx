import React, { useEffect } from "react";
import "../css/admin.css";
import { useAppContext } from "../context/AppState";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Admin = () => {
  const nav = useNavigate();
  const { user, getUsers, allUsers } = useAppContext();

  const len = Object.keys(user).length;
  //   console.log(user);

  useEffect(() => {
    if (len == 0) {
      nav("/");
    }
    if (user.userType != "admin") {
      nav("/");
    } else {
      getUsers();
    }
  }, []);

  return (
    <div>
      <div className="users-det">
        <Typography gutterBottom variant="h5">
          Users
        </Typography>

        <div>
          {allUsers.length != 0 ? (
            <div className="users-con">
              {allUsers.map((u) => (
                <div
                  key={u.id}
                  className="single-user"
                  onClick={() => {
                    nav(`/admin/user/${u.id}/bookings`);
                  }}
                >
                  {u.email}
                </div>
              ))}
            </div>
          ) : (
            <Typography gutterBottom variant="h5">
              No Users
            </Typography>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Admin;
