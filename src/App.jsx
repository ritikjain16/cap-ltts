import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Services from "./pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import AddDetails from "./pages/AddDetails";
import Bookings from "./pages/Bookings";
import BookingDetails from "./pages/BookingDetails";
import About from "./pages/About";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import AdminUserBookings from "./pages/AdminUserBookings";
import AdminUserSingleBooking from "./pages/AdminUserSingleBooking";
import UserProfile from "./pages/UserProfile";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:type" element={<Services />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details" element={<AddDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/:id" element={<BookingDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/user/:id/bookings"
            element={<AdminUserBookings />}
          />
          <Route
            path="/admin/user/:id/bookings/:bid"
            element={<AdminUserSingleBooking />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
