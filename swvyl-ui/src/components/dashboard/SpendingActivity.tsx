import React from "react";
import bottomLine12 from "../../static/img/bottom-line-12.png";
import bottomLine14 from "../../static/img/bottom-line-14.png";
import path14 from "../../static/img/path-10-5.png";
import line4 from "../../static/img/line-4.png";
import { Link } from "react-router-dom";

export default function SpendingActivity() {
  return (
    <>
      <Link className="group-18" to="/log-in-136">
        <div className="group-19">
          <div className="exchange-rates">Spending Activity</div>
          <div className="overlap-group-5">
            <div className="chart">
              <img
                className="bottom-line"
                alt="Bottom line"
                src={bottomLine12}
              />
              <img
                className="bottom-line-2"
                alt="Bottom line"
                src={bottomLine14}
              />
              <img
                className="bottom-line-3"
                alt="Bottom line"
                src={bottomLine14}
              />
              <img className="path-14" alt="Path" src={path14} />
              <img
                className="rectangle-11"
                alt="Rectangle"
                src="/img/rectangle-19-4.png"
              />
              <div className="month">
                <div className="text-wrapper-34">Mar</div>
                <div className="text-wrapper-35">Apr</div>
                <div className="text-wrapper-36">May</div>
                <div className="text-wrapper-37">Jun</div>
                <div className="text-wrapper-38">Jul</div>
              </div>
              <div className="text-wrapper-39">13.4</div>
              <div className="text-wrapper-40">15.6</div>
            </div>
            <img className="line" alt="Line" src={line4} />
            <div className="group-20" />
          </div>
        </div>
      </Link>
    </>
  );
}
