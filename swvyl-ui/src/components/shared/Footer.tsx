import React from "react";
import homeIconImageActive from "../../static/img/15-6.png";
import chatIconImge from "../../static/img/17-6.png";
import trendsIconImage from "../../static/img/16-6.png";
import insightsIconImage from "../../static/img/18-6.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="rectangle-24">
        {/*Bottom Navbar Icons*/}
        <img
          className="footer-icon home-icon"
          alt="Element"
          src={homeIconImageActive}
          onClick={() => navigate("/dashboard")}
        />
        <img
          className="footer-icon"
          alt="Element"
          onClick={() => navigate("/chat")}
          src={chatIconImge}
        />
        <img
          className="footer-icon"
          alt="Element"
          onClick={() => navigate("/spending-activity")}
          src={trendsIconImage}
        />
        <img
          className="footer-icon"
          onClick={() => navigate("/insights")}
          alt="Element"
          src={insightsIconImage}
        />
      </div>
    </>
  );
}
