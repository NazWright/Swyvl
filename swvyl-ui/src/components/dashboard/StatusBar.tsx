import React from "react";
import wifiImage5 from "../../static/img/wifi-10.png";
import capImage5 from "../../static/img/cap-10.png";
import cellularConnectionImage from "../../static/img/cellular-connection-10.png";

export default function StatusBar() {
  return (
    <>
      <div className="status-bar-5">
        <img
          className="cellular-connection-4"
          alt="Cellular connection"
          src={cellularConnectionImage}
        />
        <img className="wifi-5" alt="Wifi" src={wifiImage5} />
        <div className="time-5">9:30</div>
        <div className="battary-5">
          <img className="cap-5" alt="Cap" src={capImage5} />
          <div className="overlap-group-9">
            <div className="rectangle-26" />
          </div>
        </div>
      </div>
    </>
  );
}
