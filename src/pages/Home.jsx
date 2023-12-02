import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import main from "../images/pic4.png";
import eng from "../images/eng.webp";
import haldi from "../images/haldi.webp";
import mehendi from "../images/mehendi.webp";
import wedding from "../images/wedding.webp";
import recep from "../images/recep.webp";
import pic4 from "../images/pic4.webp";
const Home = () => {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <img src={main} alt="" className="img" />
      </div>
      <div className="s">Services</div>
      <div className="s1">
        <button className="e" onClick={() => nav("/service/engagement")}>
          <img src={eng} alt="" />
          <div className="sn">Engagement</div>
        </button>
        <button className="e" onClick={() => nav("/service/haldi")}>
          <img src={haldi} alt="" />
          <div className="sn">Haldi</div>
        </button>
        <button className="e" onClick={() => nav("/service/mehendi")}>
          <img src={mehendi} alt="" />
          <div className="sn">Mehendi</div>
        </button>
        <button className="e" onClick={() => nav("/service/wedding")}>
          <img src={wedding} alt="" />
          <div className="sn">Wedding</div>
        </button>
        <button className="e" onClick={() => nav("/service/reception")}>
          <img src={recep} alt="" />
          <div className="sn">Reception</div>
        </button>
      </div>
      <div className="cont">
        <div>
          <img src={pic4} alt="" className="cont4" />
        </div>
        <div>
          <div className="cont1">
            Save time and money in planning your wedding <br /> with
            Prasann-Wedding{" "}
          </div>
          <div className="cont2">
            PrasannWedding - Wedding Planning Assistance Service
          </div>
          <div>
            <br />
            <a href="tel:+918979478808" className="cont3">
              Contact Now!
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
