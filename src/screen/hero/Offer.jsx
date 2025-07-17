import PropTypes from "prop-types";
import {  offerImgproduct } from "../../assets/data/data";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SampleNextArrows, SamplePrevArrows } from "./Hero";

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="offer-arrow next-arrow" onClick={onClick}>
      <IoIosArrowForward size={18} />
    </button>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="offer-arrow prev-arrow" onClick={onClick}>
      <IoIosArrowBack size={18} />
    </button>
  );
}

export const Offer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrows />,
    prevArrow: <SamplePrevArrows />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="offer">
        <div className="container">
          <FlaseSales />
          <div className="wrapper">
            <Slider {...settings}>
              {offerImgproduct.map((product) => (
                <div className="imageWrapper" key={product}>
                  <img src={product.cover} alt="banner" />
                  <div className="animatedBg"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export const FlaseSales = () => {
  return (
    <></>
  )
}
Offer.propTypes = {
  children: PropTypes.any,
};
SampleNextArrow.propTypes = {
  onClick: PropTypes.any,
};
SamplePrevArrow.propTypes = {
  onClick: PropTypes.any,
};
