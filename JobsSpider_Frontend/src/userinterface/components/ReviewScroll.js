import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewComponent from "./ReviewComponent";
import { useRef } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ReviewScroll({data}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: matches?1:2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  var sref = useRef();
  const showReview = () => {
    return data.map((item) => {
      return (
        <div>
          <ReviewComponent item={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <Slider ref={sref} {...settings}>
        {showReview()}
      </Slider>
    </div>
  );
}
