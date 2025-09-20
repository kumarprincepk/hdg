"use client";
import React, { useState } from "react";
import Footer from "@/component/footerSection/Footer";
import Header from "@/component/headerSection/Header";
import Image from "next/image";
import { FaAnglesDown } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("founder");
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleNext = (length) => {
    setDirection("next");
    setSlide((prev) => (prev + 1) % length);
  };

  const handlePrev = (length) => {
    setDirection("prev");
    setSlide((prev) => (prev - 1 + length) % length);
  };

  const tabData = {
    founder: [
      {
        heading: "Founder",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic, eos consequuntur consectetur voluptatibus explicabo laborum. 
                Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic, eos consequuntur consectetur voluptatibus explicabo laborum. 
                Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Chaudhary Raghvendra Singh",
        subcaption: "Founder ",
      },
      {
        heading: "Achievements",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        
        
        - Vero cupiditate rem deleniti hic, eos consequuntur consectetur 
        - Voluptatibus explicabo laborum. Doloribus ea id, assumenda atque cumque, 
        - Fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat 
        - Quaerat! Laboriosam placeat vero voluptatem 
        `,
        image: "/images/section-pre-approved1.jpg",
        caption: "Chaudhary Raghvendra Singh",
        subcaption: "Founder",
      },
    ],

    emeritus: [
      {
        heading: "Chairman Emeritus, HDG",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic, eos consequuntur consectetur voluptatibus explicabo laborum. 
                
          Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.`,
        image: "/images/residential.jpg",
        caption: "K.P. Singh",
        subcaption: "Chairman Emeritus",
      },
      {
        heading: "Achievements",
        content: `Doloribus ea id, assumenda atque cumque, fugiat,

- Doloribus ea id, assumenda atque cumque, fugiat,  
- eum consequatur itaque quis perspiciatis ratione.
- eum consequatur itaque quis perspiciatis ratione commodi repellat. 
- eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat.`,
        image: "/images/residential.jpg",
        caption: "K.P. Singh",
        subcaption: "Chairman Emeritus",
      },
    ],

    chairman: [
      {
        heading: "Chairman",
        content: `eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.

Doloribus ea id, assumenda atque cumque, fugiat, eum consequatur itaque quis perspiciatis ratione commodi repellat quaerat! Laboriosam placeat vero voluptatem 
                dolorem culpa itaque qua.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Rajiv Singh",
        subcaption: "Chairman, HDG",
      },
      {
        heading: "Achievements",
        content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate rem deleniti hic.  

- Led expansion into sustainable, eco-friendly projects.  
- Spearheaded luxury housing & green building initiatives.  
- Positioned HDG as a leader in modern urban infrastructure.  
- Driving innovation through smart cities and next-gen technology hubs.`,
        image: "/images/section-pre-approved1.jpg",
        caption: "Rajiv Singh",
        subcaption: "Chairman, HDG",
      },
    ],
  };

  const tabs = [
    { id: "founder", label: "MEET OUR FOUNDER" },
    { id: "emeritus", label: "MEET OUR CHAIRMAN EMERITUS" },
    { id: "chairman", label: "MEET OUR CHAIRMAN" },
  ];

  const leaders = [
    {
      name: "Mr. Devinder Singh",
      role: "Managing Director",
      image: "/images/section-pre-approved1.jpg",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Chairman",
      image: "/images/residential.jpg",
    },
    {
      name: "Mr. Amit Verma",
      role: "CEO",
      image: "/images/section-pre-approved1.jpg",
    },
    {
      name: "Ms. Anjali Sharma",
      role: "CFO",
      image: "/images/residential.jpg",
    },
  ];

  return (
    <>
      <Header />

      {/* About Section */}
      <section className="bg-light text-dark mb-5">
        <div className="container py-5">
          <span className="d-block text-muted fst-italic mb-3 fs-5">
            — About Us
          </span>
          <h1 className="fs-3 fw-bold lh-base">
            Home Developers Group is a wholistic group specializing in turnkey
            design and build services, as well as collaborations with plot owners for
            redeveloping and monetizing their assets.
            <br />
            With over 25 years of expertise, we have curated premium projects,
            luxury apartments, commercial complexes, and IT parks in New Delhi &
            beyond.
          </h1>

          <hr className="my-4" />

          <div className="fs-5 text-secondary">
            <p>
              From the foundation to the furnishings, every project reflects
              our love for creating spaces that enhance the way people live and work.
            </p>
            <p>
              Our team of experts combines innovative real estate development
              with sophisticated interior design to deliver spaces that inspire.
              By identifying opportunities and partnering with leading
              professionals, we add value to every asset while unlocking new
              possibilities for our clients and partners.
            </p>
          </div>

          <div className="text-center mt-4">
            <span
              className="fs-2 cursor-pointer"
              onClick={() =>
                window.scrollBy({ top: 100, behavior: "smooth" })
              }
            >
              <FaAnglesDown />
            </span>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <div className="container">
        <div className="d-flex justify-content-center border border-secondary">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`btn flex-fill py-2 ${activeTab === tab.id ? "btn-dark" : "btn-light text-secondary"}`}
              onClick={() => {
                setActiveTab(tab.id);
                setSlide(0);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row g-3 mt-4 bg-light">
          <div className="col-md-6 position-relative">
            <div className="position-relative" style={{ height: "400px" }}>
              <Image
                src={tabData[activeTab][slide].image}
                alt={tabData[activeTab][slide].caption}
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
              <div className="position-absolute bottom-0 start-0 text-white p-3">
                <p className="fw-bold">{tabData[activeTab][slide].caption}</p>
                <p className="small">{tabData[activeTab][slide].subcaption}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-4 d-flex flex-column justify-content-between">
            <div>
              <h2 className="fs-3 fw-bold mb-3">
                {tabData[activeTab][slide].heading}
              </h2>
              <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
                {tabData[activeTab][slide].content}
              </p>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-3">
              <button
                onClick={() => handlePrev(tabData[activeTab].length)}
                className="btn btn-dark"
              >
                ←
              </button>
              <button
                onClick={() => handleNext(tabData[activeTab].length)}
                className="btn btn-dark"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="position-relative">
        <div className="container py-5">
          <div className="d-none d-md-flex position-absolute top-0 start-0 bg-dark text-white p-4 flex-column justify-content-between rounded-end">
            <h2 className="fs-2 fw-bold">Our <br /> Leadership</h2>
            <div className="d-flex gap-2">
              <button className="leader-prev btn btn-light">←</button>
              <button className="leader-next btn btn-light">→</button>
            </div>
          </div>

          <div className="d-md-none mb-3">
            <div className="bg-dark text-white p-3 rounded">
              <h2 className="fs-4 fw-bold">Our Leadership</h2>
            </div>
            <div className="d-flex gap-2 mt-2">
              <button className="leader-prev btn btn-outline-light btn-sm">
                ←
              </button>
              <button className="leader-next btn btn-outline-light btn-sm">
                →
              </button>
            </div>
          </div>

          <div className="position-relative ps-md-5">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".leader-next",
                prevEl: ".leader-prev",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="h-100"
            >
              {leaders.map((leader, index) => (
                <SwiperSlide key={index}>
                  <div className="position-relative overflow-hidden rounded">
                    <div className="position-relative" style={{ height: "400px" }}>
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-3 translate-middle-y">
                        <h3 className="fs-5 fw-bold">{leader.name}</h3>
                        <p className="small">{leader.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
