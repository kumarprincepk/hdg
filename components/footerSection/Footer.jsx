"use client";

import styles from './FooterSection.module.css';

export default function Footer() {
    return (
        <footer>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-lg-5 text-center text-lg-start'>
                                <img src='' alt='logo' />
                            </div>

                            <div className='col-lg-6 offset-lg-1'>
                                <ul className='footer-links d-flex flex-wrap my-4 my-lg-0 justify-content-center justify-content-lg-end'>
                                    <li><a>Home</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Project</a></li>
                                    <li><a>Services</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className='row mt-lg-5'>
                    <div className='col-lg-7 text-center text-lg-start'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-6'>
                                <h2 className='text-white mb-3'>Home Developers Group Headquaters</h2>
                            </div>
                            <div className='col-lg-6 col-xl-6 offset-xl-2'>
                                 <ul className='social-icon justify-content-center justify-content-lg-start'>
                                    <li><a><i className='icon-fb'></i></a></li>
                                    <li><a><i className='icon-X'></i></a></li>
                                    <li><a><i className='icon-linked'></i></a></li>
                                    <li><a><i className='icon-ins'></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <address className='text-white mb-4'>
                                    19, Sector 38<br/>Gurugram, Haryana
                                </address>
                            </div>
                            <div className='col-md-6'>
                                <p className='text-white mb-1'>+91-91932-56985</p>
                                <p className='text-white'>info@homedevelopersgroup.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-5'>
                        
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h3 className='text-white fs-6 text-center text-lg-start'>All Rights Reserved 2025</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}