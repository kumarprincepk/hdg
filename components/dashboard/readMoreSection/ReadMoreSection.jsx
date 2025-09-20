"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CiStopwatch } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import "swiper/css";

export default function ReadMoreSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Building gains into housing stocks and how to trade the...",
      date: "26 August, 2024",
      category: "Real estate",
      image: "/images/blog-grid-1.jpg",
    },
    {
      id: 2,
      title: "Building gains into housing stocks and how to trade the...",
      date: "26 August, 2024",
      category: "News",
      image: "/images/blog-grid-2.jpg",
    },
    {
      id: 3,
      title: "Building gains into housing stocks and how to trade the...",
      date: "26 August, 2024",
      category: "Real estate",
      image: "/images/blog-grid-3.jpg",
    },
  ];

  return (
    <section className="blogs">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col mb-3 mb-md-5">
            Insight & Opinion
          </h5>
        </div>

        <div className="row">
          <div className="col mb-4">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 15 },
                  480: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  1100: { slidesPerView: 3, spaceBetween: 30 },
                }}
                style={{
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {blogPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <div class="blog-article-item">
                      <div class="image-wrap mb-4">
                          <a href="#">
                              <img class="lazyload"
                                  src="/assets/images/blog/blog-grid-1.jpg" alt="" />
                          </a>
                          <div class="box-tag">
                              <div class="tag-item">Real estate</div>
                          </div>
                      </div>
                      <div class="article-content pt-2">
                          <div class="time">
                              <div class="icons">
                                  <i class="icon-clock"></i>
                              </div>
                              <p>26 August, 2024</p>
                          </div>
                          <h4 class="title">
                              <a href="#" class="line-clamp-2">Building gains into
                                  housing
                                  stocks and how to
                                  trade the...</a>
                          </h4>
                          <a href="#" class="btn-link">
                              <span>
                                  Read More
                              </span> <i class="icon-circle-arrow"></i>
                          </a>
                      </div>
                  </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}