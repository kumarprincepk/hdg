"use client";

export default function Contact() {
  return (
    <>
     <section className="contact">
            <div className="contact-banner">
                <div className="col d-flex flex-column justify-content-center align-items-center position-relative z-2 py-5 h-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col text-center">
                                <img src="/assets/images/logo/logo-icon.png" className='mb-4' alt="logo icon" />
                                <h2 className="text-white mt-4 mb-3 text-uppercase">CONTACT US</h2>
                                <h3 className="text-white"><em>We cherish all interactions</em></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            <div className="contact-link-banner py-5">
                <div className="container-fluid">
                    <div className="row position-relative z-2">
                        <div className="col-md-4">
                            <div className="contact-map">
                                <h2>OUR CONTACTS</h2>
                                <div className="d-flex align-items-center h-100">
                                    <a className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.97988087824!2d76.92842277123368!3d28.644285309990163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1758103371569!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" reerrorpolicy="no-referrer-when-downgrade"></iframe>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col p-0  mb-3 mb-xl-4">
                                        <h4>OUR ADDRESS</h4>
                                        <address className="mb-0">
                                            Office<br /> D - 22,<br /> Defence Colony, New Delhi
                                        </address>
                                    </div>

                                    <div className="col p-0  mb-3 mb-xl-4">
                                        <h4>EMAIL US</h4>
                                        <h5>Design & Build services</h5>
                                        <ul className="m-0 p-0">
                                            <li><i className='icon-mail'></i> info@homedevelopersgroup.com</li>
                                            <li><i className='icon-mail'></i> info@homedevelopersgroup.com</li>
                                            <li><i className='icon-phone-1'></i> +91 9354940979</li>
                                            <li><i className='icon-phone-1'></i> +91 11-49051697</li>
                                        </ul>
                                    </div>
                                    <div className="col p-0  mb-3 mb-xl-4">
                                        <h5>General Enquiries</h5>
                                        <ul className="m-0 p-0">
                                            <li><i className='icon-mail'></i> info@homedevelopersgroup.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col p-0  mb-3 mb-xl-4">
                                        <h5>Career</h5>
                                        <ul className="m-0 p-0">
                                            <li><i className='icon-mail'></i> info@homedevelopersgroup.com</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col p-0  mb-3 mb-xl-4">
                                        <h5>Media & Press</h5>
                                        <ul className="m-0 p-0">
                                            <li><i className='icon-mail'></i> info@homedevelopersgroup.com</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col p-0  mb-3 mb-xl-4">
                                        <h5>Vendors</h5>
                                        <ul className="m-0 p-0">
                                            <li><i className='icon-mail'></i> info@homedevelopersgroup.com</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    </>
  );
}