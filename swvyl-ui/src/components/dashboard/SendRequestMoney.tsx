import React from "react";
import sendMoneyIcon from "../../static/img/untitled-design-26-45.png";
import requestMoneyIcon from "../../static/img/untitled-design-26-46.png";
import path15 from "../../static/img/path-27-1.png";
import untitledDes5 from "../../static/img/untitled-design-26-44.png";

export default function SendRequestMoney() {
  return (
    <>
      <div className="group-21">
        <div className="overlap-16">
          <div className="rectangle-12" />
          <div className="text-wrapper-41">Send Money</div>
          <img
            className="untitled-design-3"
            alt="Untitled design"
            src={sendMoneyIcon}
          />
        </div>
        <div className="overlap-17">
          <img className="path-15" alt="Path" src={path15} />
          <div className="text-wrapper-42">Request Money</div>
          <img
            className="untitled-design-4"
            alt="Untitled design"
            src={requestMoneyIcon}
          />
        </div>
      </div>
      <img
        className="untitled-design-5"
        alt="Untitled design"
        src={untitledDes5}
      />
    </>
  );
}
