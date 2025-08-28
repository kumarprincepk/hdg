"use client";

import AboutSection from "./aboutSection/AboutSection";
import GalleryImages from "./gallerySection/GalleryImages";
import VideoSection from "./heroSection/VideoSection";
import ReadMoreSection from "./readMoreSection/ReadMoreSection";
import TestimonialSection from "./testimonial/TestimonialSection";
import WhatWeDoSection from "./whatWeDoSection/WhatWeDoSection";
import WhyTrustUsSection from "./whyTrustUsSection/WhyTrustUsSection";

export default function Dashboard (){
    return(
        <main>
            <VideoSection/>
            <AboutSection/>
            <GalleryImages/>
            <WhatWeDoSection/>
            <WhyTrustUsSection/>
            <TestimonialSection/>
            <ReadMoreSection/>
        </main>
    )
}