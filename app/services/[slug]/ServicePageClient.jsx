"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/headerSection/Header";
import Footer from "@/components/footerSection/Footer";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z.\s]+$/, "Only alphabets, dots and spaces are allowed"),
  companyName: yup
    .string()
    .required("Company name is required")
    .matches(/^[A-Za-z.\s]+$/, "Only alphabets, dots and spaces are allowed"),
  subject: yup
    .string()
    .required("Subject is required")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed"),
  designation: yup
    .string()
    .required("Designation is required")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed"),
  location: yup.string().required("Please select a location"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  requirement: yup.string().required("Please select a requirement"),
  message: yup.string().required("Message is required"),
});

export default function ServicePageClient({ service, slug }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_PUBLIC_KEY"
      );

      if (result.status === 200) {
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        reset();
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!service) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div
          className="shadow p-4 rounded bg-white text-center"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h1 className="h4 fw-bold text-dark mb-3">Service Not Found</h1>
          <p className="text-muted mb-4">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/" className="btn btn-primary px-4 py-2">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="">
        <div className="bg-white rounded shadow">
          <section className="pb-0">
            <div
              className="full-bg mb-5 d-flex align-items-center justify-content-center text-center"
              style={{
                backgroundImage: `url(${service?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                position: "relative",
              }}
            >
              <h2
                className="fw-bold text-uppercase"
                style={{
                  color: "#000",
                  fontSize: "3rem",
                  position: "absolute",
                  top: "14%"
                }}
              >
                {service.heading}
              </h2>
            </div>

            <div className="container">
              <div className="row">
                <div className="col pt-2 pb-4">
                  <div className="lh-base">{service.details}</div>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <img
                src="/images/whatWeDo/section-help.png"
                className="img-fluid"
                style={{ filter: "grayscale(1) contrast(0%) brightness(0)" }}
                alt="help"
              />
            </div>
          </section>

          {/* Contact Form Section */}
          <div className="mt-5 p-4 pt-4 py-5 border-top">
            <h2 className="h4 fw-bold text-dark mb-4">
              Contact Us About This Service
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-3">
                {/* Name Field */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label small fw-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="form-control"
                    placeholder="John Kumar Singh"
                  />
                  {errors.name && (
                    <p className="text-danger small mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Company Name Field */}
                <div className="col-md-6">
                  <label
                    htmlFor="companyName"
                    className="form-label small fw-medium"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    {...register("companyName")}
                    className="form-control"
                    placeholder="ABC Corporation"
                  />
                  {errors.companyName && (
                    <p className="text-danger small mt-1">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="col-md-6">
                  <label
                    htmlFor="subject"
                    className="form-label small fw-medium"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject")}
                    className="form-control"
                    placeholder="Service Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-danger small mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Designation Field */}
                <div className="col-md-6">
                  <label
                    htmlFor="designation"
                    className="form-label small fw-medium"
                  >
                    Designation *
                  </label>
                  <input
                    type="text"
                    id="designation"
                    {...register("designation")}
                    className="form-control"
                    placeholder="Project Manager"
                  />
                  {errors.designation && (
                    <p className="text-danger small mt-1">
                      {errors.designation.message}
                    </p>
                  )}
                </div>

                {/* Location Field */}
                <div className="col-md-6">
                  <label
                    htmlFor="location"
                    className="form-label small fw-medium"
                  >
                    Location *
                  </label>
                  <select
                    id="location"
                    {...register("location")}
                    className="form-select"
                  >
                    <option value="">Select Location</option>
                    <option value="Noida">Noida</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Goa">Goa</option>
                  </select>
                  {errors.location && (
                    <p className="text-danger small mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                {/* Mobile Number Field */}
                <div className="col-md-6">
                  <label
                    htmlFor="mobile"
                    className="form-label small fw-medium"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    {...register("mobile")}
                    className="form-control"
                    placeholder="9876543210"
                  />
                  {errors.mobile && (
                    <p className="text-danger small mt-1">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="col-12">
                  <label htmlFor="email" className="form-label small fw-medium">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="form-control"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-danger small mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Requirement Field */}
                <div className="col-12">
                  <label
                    htmlFor="requirement"
                    className="form-label small fw-medium"
                  >
                    Requirement *
                  </label>
                  <select
                    id="requirement"
                    {...register("requirement")}
                    className="form-select"
                  >
                    <option value="">Select Requirement</option>
                    <option value="Sales & Collaboration">
                      Sales & Collaboration
                    </option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Turnkey Execution">Turnkey Execution</option>
                    <option value="Commercial Leasing">
                      Commercial Leasing
                    </option>
                    <option value="Building Management">
                      Building Management
                    </option>
                  </select>
                  {errors.requirement && (
                    <p className="text-danger small mt-1">
                      {errors.requirement.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="col-12">
                  <label
                    htmlFor="message"
                    className="form-label small fw-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="form-control"
                    placeholder="Please describe your requirements in detail..."
                  />
                  {errors.message && (
                    <p className="text-danger small mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-end mt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary px-4 py-2 disabled:bg-primary disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <Link
            href="/"
            className="d-inline-flex align-items-center text-primary mt-4"
          >
            <svg
              className="me-2"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Toastify Container */}
      <ToastContainer />

      <Footer />
    </>
  );
}
