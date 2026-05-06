"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
function Hero() {
  const settings = {
    dots: true,
  };
  return (
    <div className="mx-auto w-full">
      <Slider {...settings}>
        <div>
          <Image
            src="/images/banner-1.jpg"
            alt="banner"
            className="object-cover w-full h-72"
            height={1000}
            width={1000}
          />
        </div>
        <div>
          <Image
            src="/images/banner-2.jpg"
            alt="banner"
            className="object-cover w-full h-72"
            height={1000}
            width={1000}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
