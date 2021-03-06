import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <section className="relative mt-3 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="1" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="2" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="3" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="4" />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
