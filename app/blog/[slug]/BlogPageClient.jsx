"use client";

import Footer from "@/components/footerSection/Footer";
import Header from "@/components/headerSection/Header";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageClient({ blog, slug }) {
  if (!blog) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="shadow p-4 rounded bg-white text-center" style={{ maxWidth: "500px", width: "100%" }}>
          <h1 className="h4 fw-bold text-dark mb-3">Blog Not Found</h1>
          <p className="text-muted mb-4">
            The blog you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="btn btn-primary px-4 py-2"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="h2 fw-bold my-4">{blog.title}</h1>
        <p className="text-muted mb-4">
          {blog.date} | {blog.category}
        </p>

        <div className="position-relative w-100 mb-4" style={{ height: "400px" }}>
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="img-fluid rounded"
            priority
          />
        </div>

        <p className="fs-5 lh-lg">{blog.details}</p>
      </div>
      <Footer />
    </>
  );
}
