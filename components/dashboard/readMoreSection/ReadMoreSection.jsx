"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CiStopwatch } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import "swiper/css";

// Import the blogPosts data (make sure the path is correct)
import blogPosts from "../../../public/data/blogPosts";

export default function ReadMoreSection() {
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
                  <div className="blog-article-item">
                    <div className="image-wrap mb-4">
                      <Link href={`/blog/${post.slug}`}>
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          width={400}
                          height={250}
                          className="lazyload"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Link>
                      <div className="box-tag">
                        <div className="tag-item">{post.category}</div>
                      </div>
                    </div>
                    <div className="article-content pt-2">
                      <div className="time">
                        <div className="icons">
                          <CiStopwatch />
                        </div>
                        <p>{post.date}</p>
                      </div>
                      <h4 className="title">
                        <Link href={`/blog/${post.slug}`} className="line-clamp-2">
                          {post.title}
                        </Link>
                      </h4>
                      <Link href={`/blog/${post.slug}`} className="btn-link">
                        <span>Read More</span>
                        <GrFormNextLink className="icon-circle-arrow" />
                      </Link>
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