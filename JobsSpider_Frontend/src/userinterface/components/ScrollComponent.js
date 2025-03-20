import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import JobComponent from "./JobComponent";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { createRef } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Margin } from "@mui/icons-material";

export default function ScrollComponent({ data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: matches ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: Margin?"55px":"35px",
    autoplay:matches? true:false,
  };

  const showJobs = () => {
    return data.map((item) => {
      return <JobComponent item={item} />;
    });
  };

  var sref = createRef();

  const handleLeftArrow = () => {
    sref.current.slickPrev();
  };

  const handleRightArrow = () => {
    sref.current.slickNext();
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        {matches ? (
          <></>
        ) : (
          <div
            onClick={handleLeftArrow}
            style={{
              opacity: 0.7,
              position: "absolute",
              top: 155,
              left: -20,
              zIndex: 2,
              width: 38,
              height: 38,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#b03a84",
            }}
          >
            <KeyboardArrowLeftIcon style={{ fontSize: 28, color: "white" }} />
          </div>
        )}

        <Slider ref={sref} {...settings}>
          {showJobs()}
        </Slider>

        {matches ? (
          <></>
        ) : (
          <div
            onClick={handleRightArrow}
            style={{
              opacity: 0.7,
              position: "absolute",
              top: 155,
              right: -20,
              zIndex: 2,
              width: 38,
              height: 38,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#b03a84",
            }}
          >
            <KeyboardArrowRightIcon style={{ fontSize: 28, color: "white" }} />
          </div>
        )}
      </div>
    </div>
  );
}
