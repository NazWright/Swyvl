import React from "react";
import imageShape40 from "../../static/img/shape-40.png";
import imageShape41 from "../../static/img/shape-41.png";
import imageShape42 from "../../static/img/shape-42.png";
import imageShape43 from "../../static/img/shape-43.png";
import imageShape44 from "../../static/img/shape-44.png";
import path128 from "../../static/img/path-128.png";

interface CreditCardProps {
  index: number;
  cardNumber: string;
  cardHolderName: string;
  cardColor?: string;
  validThru: string;
  onClickHandler: (event: React.MouseEvent) => void;
}

export default function CreditCard({
  index,
  cardNumber,
  cardHolderName,
  validThru,
  cardColor,
  onClickHandler,
}: CreditCardProps) {
  return (
    <>
      <div onClick={onClickHandler} className={`card-${index}`}>
        <div className="overlap-25">
          <div className="group-40">
            <div className="group-41">
              <div className="waves-3" />
            </div>
          </div>
          <div className="visa-pay-logo-3">
            <div className="overlap-group-8">
              <img className="shape-6" alt="Shape" src={imageShape40} />
              <img className="shape-11" alt="Shape" src={imageShape41} />
              <img className="shape-8" alt="Shape" src={imageShape42} />
            </div>
            <div className="overlap-26">
              <img className="shape-12" alt="Shape" src={imageShape43} />
              <img className="shape-13" alt="Shape" src={imageShape44} />
            </div>
          </div>
          <div className="text-wrapper-46">CARD HOLDER</div>
          <div className="stephen-austin-4">{cardHolderName}</div>
          <div className="text-wrapper-47">VALID THRU</div>
          <div className="element-19">{validThru}</div>
          <div className="div-5">
            <img className="path-29" alt="Path" src={path128} />
            <img className="path-30" alt="Path" src={path128} />
            <img className="path-31" alt="Path" src={path128} />
            <img className="path-32" alt="Path" src={path128} />
            <img className="path-33" alt="Path" src={path128} />
            <img className="path-34" alt="Path" src={path128} />
            <img className="path-35" alt="Path" src={path128} />
            <img className="path-36" alt="Path" src={path128} />
            <img className="path-37" alt="Path" src={path128} />
            <img className="path-38" alt="Path" src={path128} />
            <img className="path-39" alt="Path" src={path128} />
            <img className="path-40" alt="Path" src={path128} />
            <div className="text-wrapper-48">{cardNumber}</div>
          </div>
        </div>
      </div>
    </>
  );
}
