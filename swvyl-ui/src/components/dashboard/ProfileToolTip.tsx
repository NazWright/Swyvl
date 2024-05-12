import React from "react";
import profileImage from "../../static/img/clip-4.png";

interface ProfileToolTipProps {
  firstName: string;
}

export default function ProfileToolTip({ firstName }: ProfileToolTipProps) {
  return (
    <>
      <div className="group-44">
        <div className="overlap-29">
          <div className="image">
            <div className="ellipse-6">
              <div className="clip-wrapper">
                <img className="clip" alt="Clip" src={profileImage} />
              </div>
            </div>
          </div>
          <div className="exchange-rates-2">{`Hi, ${firstName}`} </div>
        </div>
      </div>
    </>
  );
}
