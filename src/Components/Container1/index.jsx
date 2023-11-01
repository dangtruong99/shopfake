import React from "react";
import "./style.css";
import phone from "../Picture/picturephone.jpg";
import tv from "../Picture/picturetv.jpg";
import pc from "../Picture/picturepc.jpg";
import laptop from "../Picture/picturelaptop.jpg";
import macbook from "../Picture/picturemacbook.jpg";
import keyboardandmouse from "../Picture/picturekeyboardandmouse.jpg";
import ipad from "../Picture/pictureipad.jpg";
import Slider from "react-slick";

function Container1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const img = [
    { image: phone, name: "Phone" },
    { image: laptop, name: "Laptop" },
    { image: pc, name: "PC" },
    { image: tv, name: "TV" },
    { image: macbook, name: "Macbook" },
    { image: keyboardandmouse, name: "Keyboard and Mouse" },
    { image: ipad, name: "Ipad" },
  ];

  return (
    <div>
      <Slider {...settings}>
        {img.map((slide) => (
          <div className="container1">
            {slide.name}
            <img src={slide.image} alt="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Container1;
