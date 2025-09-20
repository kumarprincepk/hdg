"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "From the moment I contacted them, I knew I was in good hands. The property exceeded all my expectations, and the team's expertise made the entire buying experience seamless.",
      name: "Ronald Richards",
      role: "CEO Trussreal",
    },
    {
      id: 2,
      text: "Phasellus efficitur dictum urna, non elementum mauris mollis a. Duis lacinia arcu ac lorem ultricies porta.",
      name: "Ronald Richards",
      role: "CEO Themesflat",
    },
    {
      id: 3,
      text: "The experience was seamless and exceeded our expectations in every way possible.",
      name: "Ronald Richards",
      role: "CEO Thornerlik",
    },
  ];

  return (
    <section className="position-relative testmonial">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col mb-3 mb-md-5">
            Clients Testimonials
          </h5>
        </div>

        <div className="row">
          <div className="position-relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="col-md-10 offset-md-1 text-center position-relative">
                    <p className="ct-text fst-italic my-xl-5 pb-3 pb-md-5">
                      From the moment I contacted them, I knew I was in good hands. The property exceeded all my expectations, and the team's expertise made the entire buying experience seamless.
                    </p>
                    <p className="ct-name">Ronald Richards</p>
                    <p className="ct">CEO Trussreal</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="d-flex align-items-center w-100 justify-content-center mt-2">
              <button
                className="prev btn"
                aria-label="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="btn next"
                aria-label="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}