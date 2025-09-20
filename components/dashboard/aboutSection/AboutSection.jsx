"use client";

const AboutSection = () =>{
    return(
        <section className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-4">
                        <h5 className="mb-3">About Us</h5>
                    </div>
                    <div className="col-md-8">
                        <p className="mb-4">We invest globally, seeking attractive, value-oriented opportunities across real asset classes. We prioritize sustainable growth, focusing on innovative strategies to maximize long-term returns for our stakeholders.</p>
                        <a href="#"
                            className="btn-round bg-color-primary py-3 py-md-4 px-4 rounded-5 text-white">
                            About the firm
                            <i className="icon-arrow-up-right">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;