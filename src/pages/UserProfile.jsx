import React, { useEffect } from "react";
import { useAppContext } from "../context/AppState";
import { useNavigate } from "react-router-dom";
import BookDetcomp from "../components/BookDetcomp";
import "../css/bookings.css";
import ChangePassword from "../components/ChangePassword";
const UserProfile = () => {
  const nav = useNavigate();
  const { user } = useAppContext();

  const len = Object.keys(user).length;
  // console.log(user);

  useEffect(() => {
    if (len == 0) {
      nav("/");
    }
  }, []);

  return (
    <div>
      <div className="b">Profile Details</div>
      <div className="book-con">
        <BookDetcomp name={"Name"} data={user.name} />
        <BookDetcomp name={"Email"} data={user.email} />
        <BookDetcomp name={"Age"} data={user.age} />
        <BookDetcomp name={"Mobile no."} data={user.mobile} />
        <BookDetcomp
          name={"Gender"}
          data={user.gender[0].toUpperCase() + user.gender.substring(1)}
        />
      </div>
      <ChangePassword />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default UserProfile;
