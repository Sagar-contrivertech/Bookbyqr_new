import React from 'react'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div className="container container-full footer">
                <footer className="container container-full">
                    <div className="row visible-xs">
                        <ul className="mobile-links">
                            <li><a href="/">FAQ & Help</a></li>
                            <li><a href="/">Terms</a></li>
                            <li><a href="/">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="row hidden-xs">
                        <div className="col-sm-4">
                            {/* <span className="title"><b>BookByQR</b></span> */}
                            <div style={{ marginTop: '50px' }}>
                                <p>BookByQR aims to radically simplify the appointment booking process of the service providers. Please connect with our social media for the latest news, status and updates on our services.</p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <span className="title"><b>Links</b></span>
                            <ul>
                                <li><a href="/">FAQ & Help</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <span className="title">Policies</span>
                            <ul>
                                <li><Link to="/terms">Terms of Use</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/refund">Refund Policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <span className="title">Contact Us</span>
                            <ul>
                            <li><a href="tel:+498006020500" onclick="captureOutboundLink('tel:+498006020500'); return false;">
                                    <AddLocationAltOutlinedIcon fontSize="large" color="white"/> 322, Sai PoornaParadise, <br/>HSR Sector 2, Bengaluru , <br/>India
                                </a></li>
                                <li><a href="tel:+498006020500" onclick="captureOutboundLink('tel:+498006020500'); return false;">
                                    <LocalPhoneOutlinedIcon fontSize="large"/> +91 9341489990
                                </a></li>
                                <li><a href="mailto:kundenservice@zasta.de" 
                                onclick="captureOutboundLink('mailto:kundenservice@zasta.de'); return false;">
                                <EmailOutlinedIcon fontSize="large"/>kundenservice@zasta.de</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 hidden-xs" style={{textAlign: 'center'}}>
                            <span className="title">Social Media</span>
                            <a href="https://www.linkedin.com/in/aby-sagar-699659125/" onclick="captureOutboundLink('https://www.linkedin.com/in/aby-sagar-699659125/'); return false;" target="_blank"><img src="img/social-media-instagram%403x.png" className="media-image social-media" alt="instagram" loading="lazy" /></a>
                            <a href="https://www.instagram.com/abysagar1/" onclick="captureOutboundLink('https://www.instagram.com/abysagar1/'); return false;" target="_blank"><img src="img/social-media-3.png" className="media-image social-media-3" alt="facebook" loading="lazy" /></a>
                            <a href="https://twitter.com/abysagar1" onclick="captureOutboundLink('https://twitter.com/abysagar1'); return false;" target="_blank"><img src="img/social-media-1.png" className="media-image social-media-1" alt="linkedin" loading="lazy" /></a>
                            <a href="https://www.facebook.com/bookbyqr/" onclick="captureOutboundLink('https://www.facebook.com/bookbyqr/'); return false;" target="_blank"><img src="img/icon-twitter.png" className="media-image social-media" alt="twitter" loading="lazy" /></a>
                        </div>
                        {/* <div className="col-sm-4 hidden-xs" />
                        <div className="col-sm-4 col-xs-12 rated-on">
                            <span className="sub-title">Geprüft durch:</span>
                            <a target="_blank" onclick="captureOutboundLink('https://www.service-tested.de/bewertungen/zasta-gmbh/kundenurteil-gesamtbewertung-ekomi/'); return false;" href="https://www.service-tested.de/bewertungen/zasta-gmbh/kundenurteil-gesamtbewertung-ekomi/">
                                <div id="widget-container" className="ekomi-widget-container ekomi-widget-sf1364265ebd0217c6864" />
                            </a>
                        </div> */}
                    </div>
                    <div className="row">
                        <hr className="hidden-xs" />
                    </div>
                    {/* <div className="row text-center">
                        <img src="img/logo.png" className="Group-2" alt="ZASTA Logo" loading="lazy" />
                        <span className="copyright">© 2021, Zasta GmbH </span>
                        <span className="copyright-info hidden-xs">Hinweis: Wir bieten keine Steuerberatung an. Bei zasta.de handelt es sich
                            um eine Plattform, auf der deine Steuererklärung von unabhängigen Steuerberatern erstellt wird.</span>
                    </div> */}
                </footer>
            </div>

        </div>
    )
}

export default Footer
