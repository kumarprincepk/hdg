"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });
import "odometer/themes/odometer-theme-default.css";

function Counter({ target, label }) {
  const [count, setCount] = useState(() => {
    const randomOffset = Math.floor(Math.random() * target * 0.6);
    return Math.max(0, target - randomOffset);
  });

  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
            setTimeout(() => setCount(target), 200);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [target]);

  return (
      <div className='countWra' aria-live="polite" aria-atomic="true">
        <div className="counter-number">
          <Odometer value={count} format="d" duration={2500} />
          <span className='plus' aria-hidden="true">+</span>
        </div>
        <p className="counter-text">{label}</p>
      </div>
  );
}

export default function WhyTrustUsSection() {
  return (

    <>
    <section className="trust-us">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col mb-3 mb-md-5">
            Why Trust Us
          </h5>
        </div>

        <div className="row">
          <ul className="counter">
            <li>
              <Counter target={500000} label="Sq. Ft. Delivered" />
            </li>
            <li>
              <Counter target={30} label="Years of Experience" />
            </li>
            <li>
              <Counter target={300} label="Satisfied Client" />
            </li>
            <li>
              <Counter target={200} label="Team Member" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}