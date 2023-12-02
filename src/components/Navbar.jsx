import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppState";

const Navbar = () => {
  const nav = useNavigate();
  const { user, setuser, setselectService } = useAppContext();
  const len = Object.keys(user).length;
  return (
    <div className="top">
      <div
        className="title-name"
        onClick={() => {
          nav("/");
        }}
      >
        <div className="pname">Prasann</div>
        <div className="wname">Wedding</div>
        {/* <img src="logo.PNG" alt="" width={"200px"} height={"100px"}/> */}
      </div>
      <div className="links">
        <div
          className="link"
          onClick={() => {
            nav("/about");
          }}
        >
          About
        </div>
        {len == 0 ? (
          <>
            <div className="link" onClick={() => nav("/login")}>
              Login
            </div>

            <div className="link" onClick={() => nav("/signup")}>
              Signup
            </div>
          </>
        ) : (
          <>
            <div className="link" onClick={() => nav("/bookings")}>
              Bookings
            </div>
            <div className="link" onClick={() => nav("/profile")}>
              Profile
            </div>
            {user.userType == "admin" && (
              <div className="link" onClick={() => nav("/admin")}>
                Admin
              </div>
            )}
            <div
              className="link"
              onClick={() => {
                localStorage.removeItem("PrasannWedding");
                setuser({});
                setselectService([]);
                nav("/");
              }}
            >
              Logout
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
