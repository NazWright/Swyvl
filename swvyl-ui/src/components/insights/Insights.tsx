import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { constants } from "../../constants/applicationConstants";
import "./Insights.css";
import Footer from "../shared/Footer";
import wificonnection from "../../static/img/wifi-3.png";
import cellularconnection from "../../static/img/cellular-connection-10.png";
import rectangle1412 from "../../static/img/rectangle-1412-1-1x-png.png";
import vector from "../../static/img/vector-1-2.png";
import img1 from "../../static/img/1.png";
import img2 from "../../static/img/2.png";
import img4 from "../../static/img/4-1x.png";

export default function Insights() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  return (
    <>
      {!isLoading && (
        <div className="game">
          <div className="div-2">
            <div className="overlap-5">
              <div className="overlap-6">
                <div className="text-wrapper-4">LET’S PLAY</div>
                <div className="rectangle-11" />
                <div className="rectangle-12" />
                <div className="rectangle-13" />
                <div className="icon-done">
                  <div className="vector-wrapper">
                    <img className="vector" alt="Vector" src={vector} />
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="vector-wrapper">
                    <img className="vector" alt="Vector" src={vector} />
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="vector-wrapper">
                    <img className="vector" alt="Vector" src={vector} />
                  </div>
                </div>
                <div className="text-wrapper-5">level 1</div>
                <div className="travel-newbie">S.M.A.R.T Goals</div>
                <div className="level">level 2</div>
                <div className="level-2">level 3</div>
                <div className="travel-newbie-2">Budgeting</div>
                <div className="travel-newbie-3">Savings &amp; Investing</div>
                <div className="user">
                  <div className="overlap-7">
                    <div className="group-3">
                      <div className="ellipse" />
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-8">
                    <div className="img-wrapper">
                      <img
                        className="rectangle-14"
                        alt="Rectangle"
                        src={rectangle1412}
                      />
                    </div>
                    <div className="ellipse-3" />
                    <div className="element-12">0</div>
                  </div>
                </div>
                <img className="element-13" alt="Element" src={img2} />
                <img className="element-14" alt="Element" src={img1} />
                <img className="element-15" alt="Element" src={img4} />
              </div>
              <div className="text-wrapper-6">Be the first!</div>
            </div>
            <div className="status-bar-3">
              <img
                className="cellular-connection-3"
                alt="Cellular connection"
                src={cellularconnection}
              />
              <img className="wifi-3" alt="Wifi" src={wificonnection} />
              <div className="time-3">9:30</div>
              <div className="battary-3">
                <img className="cap-3" alt="Cap" src="/img/cap-2.png" />
                <div className="overlap-group-2">
                  <div className="rectangle-15" />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
      {isLoading && (
        <div className={constants.flexFullWidthHeightCenteredClassName}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
