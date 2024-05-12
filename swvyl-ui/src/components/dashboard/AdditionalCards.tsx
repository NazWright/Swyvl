import React from "react";

interface AdditionalCardsProps {
  addNewCardHandler: (event: React.MouseEvent) => void;
}

export default function AdditionalCards({
  addNewCardHandler,
}: AdditionalCardsProps) {
  return (
    <>
      <div className="overlap-27">
        <button className="add-new-card" onClick={addNewCardHandler}></button>
        <div className="group-43">
          <div className="overlap-28">
            <img className="line-2" alt="Line" src="/img/line-7-4.png" />
            <img className="line-3" alt="Line" src="/img/line-8-4.png" />
          </div>
        </div>
      </div>
    </>
  );
}
