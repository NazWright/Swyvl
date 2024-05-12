import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageOneGraphic from "./graphics/PageOneGraphic";
import PageTwoGraphic from "./graphics/PageTwoGraphic";
import PageThreeGraphic from "./graphics/PageThreeGraphic";
import uWalletMiniImage from "../../static/img/untitled-design-36-2.png";
import { pages } from "../../constants/onboardingOverviewPages";
import "./Onboarding.css";

export default function OnboardingOrchestrator() {
  const [pageIndex, setPageIndex] = useState(0);

  const navigate = useNavigate();

  const hasActiveEllipseClassName = (ellipseIndex: number) =>
    pageIndex >= ellipseIndex ? "ellipse-active" : "";

  function nextPage() {
    const pageLimit = pages.length - 1;

    if (pageIndex > pageLimit) return;

    if (pageIndex === pageLimit) navigate("/user/onboarding");

    setPageIndex(pageIndex + 1);
  }

  function getPageGraphic(pageIndex: number) {
    const pageGraphics = [
      <PageOneGraphic width="30rem" height="30rem" />,
      <PageTwoGraphic width="30rem" height="30rem" />,
      <PageThreeGraphic />,
    ];
    return pageGraphics[pageIndex];
  }

  function getContentFromPageIndex(pages: any, pageIndex: number) {
    if (typeof pageIndex !== "number" || pageIndex >= Object.keys(pages).length)
      return <div>No Content for Page Index</div>;
    return pages[pageIndex];
  }

  return (
    <div className="onboarding-graphic-one">
      <div className="content-section d-flex w-100 align-items-center flex-column p-5">
        {getContentFromPageIndex(pages, pageIndex)}
        <div className="justify-content-center w-100 d-flex">
          {getPageGraphic(pageIndex)}
        </div>
        <div className="elipsis-group">
          <div className="group-114">
            <div className={`ellipse-19 ${hasActiveEllipseClassName(0)}`} />
            <div className={`ellipse-11 ${hasActiveEllipseClassName(1)}`} />
            <div className={`ellipse-20 ${hasActiveEllipseClassName(2)}`} />
          </div>
        </div>
        <div className="next-button">
          <div className="rectangle-83 mt-3" onClick={() => nextPage()}>
            <div className="text-wrapper-161">Next</div>
          </div>
        </div>
        <img
          className="mini-uwallet-logo"
          alt="Untitled design"
          src={uWalletMiniImage}
        />
      </div>
    </div>
  );
}
