import Gallery from "@/components/CommonGallery/CommonGallery";
import Footer from "@/components/footerSection/Footer";
import Header from "@/components/headerSection/Header";
import projectInfo from "@/public/data/projectInfo";
import Link from "next/link";

export function generateStaticParams() {
  return projectInfo.map((projectData) => ({
    slug: projectData.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const projectData = projectInfo.find((item) => item.slug === slug);

  if (!projectData) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="shadow p-4 rounded bg-white text-center" style={{ maxWidth: "500px", width: "100%" }}>
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
      <div className="min-vh-100 bg-light py-5">
        <div className="container bg-white p-4 rounded shadow">
          <h1 className="h2 fw-bold text-dark mb-4">
            {projectData.heading}
          </h1>

          {projectData.data.map((subProject, index) => (
            <div key={subProject.id} className="mb-5">
              <div
                className={`d-flex flex-column flex-md-row align-items-center gap-4 ${
                  index % 2 === 1 ? "flex-md-row-reverse" : ""
                }`}
              >
                <div className="col-md-6">
                  <h2 className="h4 fw-semibold text-secondary mb-3">
                    {subProject.title}
                  </h2>
                  <p className="text-muted mb-4 mb-md-0">
                    {subProject.details}
                  </p>
                </div>

                {/* Images gallery */}
                <div className="col-md-6">
                  <div className="position-relative rounded overflow-hidden" style={{ height: "12rem" }}>
                    <Gallery images={subProject.images} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/"
            className="d-inline-flex align-items-center text-primary text-decoration-none"
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
      <Footer />
    </>
  );
}
