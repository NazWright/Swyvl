import React, { useState, useEffect } from "react";
import "./SpendingActivity.css";
import Footer from "../shared/Footer";
import avatar from "../../static/img/untitled-design-34.png";
import line24 from "../../static/img/line-24.png";
import line12 from "../../static/img/line-12.png";
import line13 from "../../static/img/line-13.png";
import line14 from "../../static/img/line-14.png";
import line15 from "../../static/img/line-15.png";
import { CircularProgress } from "@mui/material";
import { constants } from "../../constants/applicationConstants";
import wificonnection from "../../static/img/wifi-3.png";
import cellularconnection from "../../static/img/cellular-connection-10.png";

export default function SpendingActivityFull() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      {!isLoading && (
        <div className="spending-activity">
          <div className="div-5">
            <div className="status-bar-5">
              <img
                className="cellular-connection-5"
                alt="Cellular connection"
                src={cellularconnection}
              />
              <img className="wifi-5" alt="Wifi" src={wificonnection} />
              <div className="time-5">9:30</div>
              <div className="battary-5">
                <img className="cap-5" alt="Cap" src="/img/cap-3.png" />
                <div className="overlap-group-7">
                  <div className="rectangle-33" />
                </div>
              </div>
            </div>
            <div className="overlap-23">
              <div className="overlap-24">
                <div className="text-wrapper-24">Year</div>
              </div>
              <div className="text-wrapper-25">Month</div>
              <div className="text-wrapper-26">Week</div>
            </div>
            <div className="text-wrapper-27">2023</div>
            <div className="overlap-25">
              <div className="rectangle-34" />
              <div className="rectangle-35" />
              <div className="text-wrapper-28">Total Spending</div>
              <div className="text-wrapper-29">1242.36</div>
              <img className="line-4" alt="Line" src={line13} />
              <img className="line-5" alt="Line" src={line12} />
              <img className="line-6" alt="Line" src={line12} />
              <img className="line-7" alt="Line" src={line13} />
              <img className="line-8" alt="Line" src={line14} />
              <img className="line-9" alt="Line" src={line15} />
              <div className="text-wrapper-30">Jan</div>
              <div className="text-wrapper-31">Mar</div>
              <div className="text-wrapper-32">May</div>
              <div className="text-wrapper-33">Jul</div>
              <div className="text-wrapper-34">Sep</div>
              <div className="text-wrapper-35">Nov</div>
              <div className="text-wrapper-29">1242.36</div>
              <div className="text-wrapper-36">0</div>
              <div className="text-wrapper-37">250</div>
              <div className="text-wrapper-38">500</div>
              <div className="text-wrapper-39">750</div>
              <div className="text-wrapper-40">1000</div>
              <div className="text-wrapper-41">1250</div>
              <div className="text-wrapper-42">1500</div>
              <div className="rectangle-36" />
              <img className="line-10" alt="Line" src="/img/line-9.png" />
              <div className="rectangle-37" />
              <img
                className="untitled-design-9"
                alt="Untitled design"
                src={avatar}
              />
              <p className="you-spent-at">
                “You spent $200 at Starbucks this month!
                <br />
                Reduce your monthly spending by half and
                <br />
                save up to $1,000 over the next 10 months.”
              </p>
              <div className="rectangle-38" />
            </div>
            <div className="text-wrapper-43">CATEGORIES</div>
            <div className="overlap-26">
              <div className="scroll-group-2">
                <div className="group-30">
                  <div className="overlap-27">
                    <div className="group-31">
                      <div className="overlap-group-8">
                        <div className="rectangle-39" />
                        <img className="line-11" alt="Line" src={line24} />
                        <img className="line-12" alt="Line" src={line24} />
                        <img className="line-13" alt="Line" src={line24} />
                        <img className="line-14" alt="Line" src={line24} />
                        <img className="line-15" alt="Line" src={line24} />
                        <img className="line-16" alt="Line" src={line24} />
                        <img className="line-17" alt="Line" src={line24} />
                        <img className="line-18" alt="Line" src={line24} />
                        <img className="line-19" alt="Line" src={line24} />
                      </div>
                    </div>
                    <div className="food-drinks">Food &amp; Drinks</div>
                    <div className="text-wrapper-44">Shopping</div>
                    <div className="text-wrapper-45">Services</div>
                    <div className="text-wrapper-46">Transportation</div>
                    <div className="text-wrapper-47">Entertainment</div>
                    <div className="text-wrapper-48">Travel</div>
                    <div className="text-wrapper-49">Health</div>
                    <div className="text-wrapper-50">School</div>
                    <div className="text-wrapper-51">$225.50</div>
                    <div className="text-wrapper-52">$175.86</div>
                    <div className="text-wrapper-53">$280.00</div>
                    <div className="text-wrapper-54">$161.50</div>
                    <div className="text-wrapper-55">$99.50</div>
                    <div className="text-wrapper-56">$125.00</div>
                    <div className="text-wrapper-57">$50.00</div>
                    <div className="text-wrapper-58">$125.00</div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
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
