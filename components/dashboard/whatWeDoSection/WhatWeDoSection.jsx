"use client";


import Image from "next/image";

export default function WhatWeDoSection() {
     const services = [
    {
      id: 1,
      title: "New Construction",
      description: `We design spaces with a timeless vision, balancing innovation and aesthetic appeal while keeping your budget in mind. Whether residential or commercial, our collaborative approach ensures that every project is thoughtfully designed and executed.`,
      image: "/images/whatWeDo/Screenshot.png",
      ctaText: "Read More",
    },
    {
      id: 2,
      title: "Real Estate Consultancy",
      description: `We blend our 30 years of expertise with our dedication to service to give our clients the best solutions to their real
 estate challenges. If it is finding the right location for your dream house, or it is providing expertise on investment opportunities.`,
      image: "/images/whatWeDo/Screenshot (85) (1).png",
      ctaText: "Read More",
    },

    {
      id: 3,
      title: "Interior Design",
      description: `Our interior design solutions are client centric, mixing bold elements with timeless sophistication. From traditional
 to contemporary, our portfolio is a reflection of your style and passions, creating environments that are a harmonious blend of contrast and unity.`,
      image: "/images/whatWeDo/agent-item.jpg",
      ctaText: "Read More",
    },
    {
      id: 4,
      title: "Maintenance Services",
      description: `Our comprehensive maintenance solutions ensure that your space remains efficient, professional and safe. From daily
 inspections to cleaning and security, we handle it all.`,
      image: "/images/whatWeDo/section-pre-approved1.jpg",
      ctaText: "Read More",
    },
  ];
    return(
    //     <section className="py-12">
    //     <h1 className={styles.classCall}>What We Do Section</h1>
    //   <div className="mx-auto">
    //     <div className="heading-section mb-7 text-left">
    //       <h4 className="text-1 split-text effect-right">What we do</h4>
    //     </div>

    //     <div className="">
    //       {services.map((s) => (
    //         <article
    //           key={s.id}
    //           className="bg-dark"
    //         >
    //           <div className="relative h-64 md:h-72 w-full overflow-hidden">
    //             <div className="absolute inset-0 transform transition-transform duration-500 ease-in-out hover:scale-105 w-full">
    //               <Image
    //                 src={s.image}
    //                 alt={s.title}
    //                 fill
    //                 sizes="(min-width: 768px) 50vw, 100vw"
    //                 className="object-cover w-full"
    //               />
    //             </div>
    //           </div>

    //           <div className="text-white p-6 w-full">
    //             {" "}
    //             <h3 className="text-xl md:text-2xl font-serif leading-tight">
    //               <a
    //                 href="/"
    //                 className="cursor-default"
    //               >
    //                 {s.title}
    //               </a>
    //             </h3>
    //             <p className="text-sm text-slate-300 mt-4">{s.description}</p>
    //             <div className="mt-6">
    //               <a
    //                 href="/"
    //                 className="relative inline-flex items-center gap-3 rounded-full px-4 py-2 border border-white/10 text-sm font-medium
    //                            overflow-hidden text-white transition-colors duration-300 group"
    //                 aria-label={s.ctaText}
    //               >
    //                 <span
    //                   className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out
    //                              group-hover:scale-x-100"
    //                   aria-hidden="true"
    //                 ></span>

    //                 <span
    //                   className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/6
    //                              transition-colors duration-300 group-hover:bg-black group-hover:text-white"
    //                   aria-hidden="true"
    //                 >
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="w-4 h-4"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     strokeWidth="1.5"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       d="M13 7l5 5m0 0l-5 5m5-5H6"
    //                     />
    //                   </svg>
    //                 </span>

    //                 <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    //                   {s.ctaText}
    //                 </span>
    //               </a>
    //             </div>
    //           </div>
    //         </article>
    //       ))}
    //     </div>
    //   </div>
    // </section>


    <>
      <section className="whatWeDo">
        <div className="container-fluid">
          <div className="row">
            <h5 className="col mb-4 mb-md-5 ">
              What we do
            </h5>
          </div>

          <div className="row gy-4">
            {services.map((s) => (
            <div className="col-sm-6" key={s.id}>
              <article  className="card border-0 rounded-3 text-white overflow-hidden h-100">
                {/* <picture className="overflow-hidden"> */}
                  <img src={s.image} className="img-fluid border-0" alt={s.title}/>
                  {/* <Image 
                  src={s.image}
                    fill
                  className="img-fluid border-0" alt={s.title}/> */}
                {/* </picture> */}
                <div className="card-body p-4">
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text mb-4">{s.description}</p>
                  <a href="/" className="btn-round bg-color-secondary py-3 px-3 rounded-5">
                    <span className="ic">
                      <i className="icon-arrow-right-3"></i>
                    </span>
                    {s.ctaText}
                  </a>
                </div>
              </article>
            </div>
              ))}

            {/* <div className="col-sm-6">
              <article className="card border-0 rounded-3 text-white overflow-hidden h-100">
                <picture className="overflow-hidden">
                  <img src="/images/gallery/picture1.jpg" className="img-fluid border-0" alt="..."/>
                </picture>
                <div className="card-body p-4">
                  <h3 className="card-title">New Construction</h3>
                  <p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn-round bg-color-secondary py-3 px-3 rounded-5">
                    <span className="ic">
                      <i className="icon-arrow-right-3"></i>
                    </span>
                    Read More
                  </a>
                </div>
              </article>
            </div>

            <div className="col-sm-6">
              <article className="card border-0 rounded-3 text-white overflow-hidden h-100">
                <picture className="overflow-hidden">
                  <img src="/images/gallery/picture1.jpg" className="img-fluid border-0" alt="..."/>
                </picture>
                <div className="card-body p-4">
                  <h3 className="card-title">New Construction</h3>
                  <p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn-round bg-color-secondary py-3 px-3 rounded-5">
                    <span className="ic">
                      <i className="icon-arrow-right-3"></i>
                    </span>
                    Read More
                  </a>
                </div>
              </article>
            </div>

            <div className="col-sm-6">
              <article className="card border-0 rounded-3 text-white overflow-hidden h-100">
                <picture className="overflow-hidden">
                  <img src="/images/gallery/picture1.jpg" className="img-fluid border-0" alt="..."/>
                </picture>
                <div className="card-body p-4">
                  <h3 className="card-title">New Construction</h3>
                  <p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn-round bg-color-secondary py-3 px-3 rounded-5">
                    <span className="ic">
                      <i className="icon-arrow-right-3"></i>
                    </span>
                    Read More
                  </a>
                </div>
              </article>
            </div>
            
             */}
          </div>
        </div>
      </section>
    </>
    )
}