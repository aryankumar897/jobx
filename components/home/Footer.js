"use client";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="new_footer_area bg_color p-4 m-4" style={{ backgroundColor: '#000', color: '#fff' }}>
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget" style={{ animation: 'fadeInLeft 0.5s ease-in-out' }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>Get in Touch</h3>
                                <p style={{ color: '#ccc' }}>Don’t miss any updates of our news and extensions!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70" style={{ animation: 'fadeInLeft 0.5s ease-in-out 0.2s' }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Company</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Android App</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>iOS App</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Desktop</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Projects</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70" style={{ animation: 'fadeInLeft 0.5s ease-in-out 0.4s' }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>FAQ</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Term & Conditions</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Reporting</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Documentation</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Support Policy</a></li>
                                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70" style={{ animation: 'fadeInLeft 0.5s ease-in-out 0.6s' }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>Team Solutions</h3>
                                <div className="f_social_icon" style={{ display: 'flex', gap: '10px' }}>
                                    <a href="#" className="fab fa-facebook" style={{ color: '#fff', transition: 'color 0.3s' }}><BsFacebook size='40' /></a>
                                    <a href="#" className="fab fa-twitter" style={{ color: '#fff', transition: 'color 0.3s' }}><FaSquareXTwitter size='40' /></a>
                                    <a href="#" className="fab fa-linkedin" style={{ color: '#fff', transition: 'color 0.3s' }}><FaLinkedin size='40' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg" style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                    <div className="footer_bg_one" />
                    <div className="footer_bg_two" />
                </div>
            </div>
            <div className="footer_bottom" style={{ borderTop: '1px solid #444', padding: '20px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400" style={{ color: '#ccc' }}>© jobx Inc. 2024 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p style={{ color: '#ccc' }}>Made with <i className="icon_heart" style={{ color: '#e83e8c' }} /> in <a href="/" target="_blank" style={{ color: '#007bff' }}>CakeCounter</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
