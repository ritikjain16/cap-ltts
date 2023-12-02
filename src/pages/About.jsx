import React, { useEffect } from "react";
import "../css/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="abt">
      <div className="abt-con">
        <div className="heading">
          <img
            className="party"
            src="https://th.bing.com/th/id/OIP.Tk-lkbRrqvqEIOQ9ylBBeQHaFy?w=253&h=198&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <h2 className="gh">About Prasann Wedding</h2>
          <img
            className="flo"
            src="https://www.bing.com/th/id/OIP.ZzFhyqbFA5xFombxh8bYgQHaE8?w=283&h=188&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
        </div>
      </div>

      {/* <br /> */}
      {/* <br /> */}
      <div className="hp">
        {/* <h4>Happy Wedding!!Happy Night!!No Fight!!Only Bite!!In Night!!</h4> */}
        <h4>Happy Wedding!!Happy Life!!</h4>
        <h4>We are Here For You!!!</h4>
      </div>
      <br />
      <br />

      <img
        className="abtimg"
        src="https://th.bing.com/th/id/OIP.ZW1m1L04hQpw0hiDaqJq_wHaE7?w=293&h=195&c=7&r=0&o=5&pid=1.7"
        alt="wed"
      />
      <br />
      <br />
      <p className="txt">
        Helps plan your wedding like a loved one. PrasannWedding is India’s most
        loved Wedding Planning website! Check prices, verified reviews and book
        best wedding photographers, bridal makeup artists, wedding venues,
        decorators, and all other wedding vendors at guaranteed best prices. Get
        loads of latest wedding ideas & inspiration - bridal fashion, makeup and
        skincare tips, wedding planning tips, bachelorette & honeymoon ideas
        from India's largest wedding community & real weddings. PrasannWedding
        is proud to have been the official wedding planner of celebrities like
        Prasanna Mishra, Ritik Jain, Prasanna Venkatesh and Poornima. We love
        what we do, and that's how we help plan your wedding like a loved one!
      </p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
