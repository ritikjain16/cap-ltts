import React,{ createContext, useContext, useEffect, useState } from "react";
import myaxios from "../myaxios";

const AppContext = createContext();

const AppState = ({ children }) => {
  const [services, setservices] = useState([]);

  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("PrasannWedding")) != null
      ? JSON.parse(localStorage.getItem("PrasannWedding"))
      : {}
  );

  const [selectService, setselectService] = useState([]);

  const [total, settotal] = useState(0);

  const [allUsers, setallUsers] = useState([]);

  const getServices = async () => {
    try {
      const res = await myaxios.get("/services/get");
      // console.log(res.data);
      setservices(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const signUp = async (user, nav) => {
    try {
      delete user.confirmPassword;
      user.userType = "user";
      // console.log(user);
      const res = await myaxios.post("/user/add", user);
      // console.log(res.data);
      if (res.data === "User created") {
        nav("/login");
      } else {
        alert(res.data);
        window.location = "/signup";
      }
    } catch (e) {
      console.log(e);
    }
  };

  const login = async (user, nav) => {
    try {
      // console.log(user);
      const res = await myaxios.post("/user/login", user);
      // console.log(res.data);
      //  if (res.data === "User created") {
      //  nav("/login");
      //  } else {
      //    alert(res.data);
      //  }
      // console.log(res.data);
      localStorage.setItem("PrasannWedding", JSON.stringify(res.data));
      setuser(JSON.parse(localStorage.getItem("PrasannWedding")));
      nav("/");
    } catch (e) {
      console.log(e.response.data.errorMessage);
      alert(e.response.data.errorMessage);
    }
  };

  const addService = (s) => {
    let currentServices = [...selectService];
    if (!currentServices.includes(s)) {
      currentServices.push(s);
      setselectService(currentServices);
    }
  };

  const removeService = (s) => {
    let currentServices = [...selectService];
    if (currentServices.includes(s)) {
      let index = currentServices.indexOf(s);
      currentServices.splice(index, 1);
      setselectService(currentServices);
    }
  };

  const getUser = async () => {
    try {
      const res = await myaxios.get(`/user/get/${user.id}`);
      // console.log(res.data);
      localStorage.setItem("PrasannWedding", JSON.stringify(res.data));
      setuser(JSON.parse(localStorage.getItem("PrasannWedding")));
    } catch (e) {
      console.log(e);
    }
  };

  const addBooking = async (booking, nav) => {
    try {
      booking.status = "Pending";
      booking.totalPrice = total;
      booking.services = selectService;
      // console.log(booking);
      const res = await myaxios.post(`/booking/add/${user.id}`, booking);
      alert(res.data);
      getUser();
      setselectService([]);
      nav("/bookings");
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const getUsers = async () => {
    try {
      const res = await myaxios.get("/user/get");
      // console.log(res.data);
      setallUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await myaxios.patch("/booking/update", { id, status });
      // console.log(res.data);
      alert(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const changePassword = async (obj) => {
    try {
      const res = await myaxios.patch("/user/update/password", obj);
      console.log(res.data);
      alert(res.data);
      window.location = "/profile";
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(user);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <AppContext.Provider
      value={{
        services,
        signUp,
        login,
        user,
        setuser,
        selectService,
        setselectService,
        addService,
        removeService,
        total,
        settotal,
        addBooking,
        getUsers,
        allUsers,
        updateStatus,
        changePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppState;
