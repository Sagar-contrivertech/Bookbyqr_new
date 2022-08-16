import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div>
            <div className="jumbotron main">
                <div className="jumbotron-content">
                    <svg id="svg-2">
                        <defs>
                            <clipPath id="jumbotron-content-clip">
                                <ellipse cx="50%" cy="115px" rx="130%" ry="72%" style={{ width: '100%' }} />
                            </clipPath>
                        </defs>
                    </svg>
                    <div id="image-wrapper">
                        <svg id="svg-1" className="clip-svg">
                            <defs>
                                <linearGradient id="grad1" x1={0} x2={0} y1={0} y2={1} gradientTransform="rotate(258)">
                                    <stop offset="0%" stopColor="#382fb0" />
                                    <stop offset="100%" stopColor="#308bfc" />
                                </linearGradient>
                            </defs>
                            <rect className="svg-background" width="100%" height="770px" fill="url(#grad1)" />
                            <image className="svg-image" width="493px" height="619px" y="85px" x="50%" xlinkHref="img/woman-bg-small.png" />
                        </svg>
                    </div>
                </div>

                {/* Mobile menu starts*/}
                <nav id="myNavmenu" className="navmenu navmenu-default navmenu-fixed-left offcanvas" role="navigation" style={{}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#myNavmenu" data-canvas="body">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src="img/svg/logo.svg" className="logo" alt="ZASTA" />
                        </Link>
                    </div>
                    <span className="telephone hidden">
                        <img src="img/combined-shape.png" srcSet="img/combined-shape@2x.png 2x, img/combined-shape@3x.png 3x" className="Combined-Shape" alt="phone" />
                        <a onclick="captureOutboundLink('tel:+498006020500'); return false;" href="tel:+498006020500"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>0800 6020 500</font></font></a>
                    </span>
                    <div className="links first">
                        {/* <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>resources</font></font></span> */}
                        <ul>
                            {/* <li><a href="#pricing"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Pricing</font></font></a></li>
                            <li><a href="#features"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Features</font></font></a></li>
                            <li><a href="#aboutus"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>About Us</font></font></a></li>
                            <li><a href="#contactus"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Contact Us</font></font></a></li> */}
                        </ul>
                    </div>
                    {/* <div className="links">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>For tax consultants</font></font></span>
                        <ul>
                            <li><a href="/partner.html"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>become a partner</font></font></a></li>
                        </ul>
                    </div> */}
                    <div className="links media-social">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Social media</font></font></span>
                        <a href="https://www.instagram.com/abysagar1/" onclick="captureOutboundLink('https://www.instagram.com/abysagar1/'); return false;" target="_blank"><i className="fa fa-instagram media-image social-media" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/bookbyqr/" onclick="captureOutboundLink('https://www.facebook.com/bookbyqr/'); return false;" target="_blank"><i className="fa fa-facebook-official media-image social-media-3" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/aby-sagar-699659125/" onclick="captureOutboundLink('https://www.linkedin.com/in/aby-sagar-699659125/'); return false;" target="_blank"><i className="fa fa-linkedin media-image social-media-1" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/abysagar1" onclick="captureOutboundLink('https://twitter.com/abysagar1'); return false;" target="_blank"><i className="fa fa-twitter media-image social-media-1" aria-hidden="true"></i></a>
                    </div>
                    <span className="copyright-info"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Note: We do not offer tax advice. </font><font style={{ verticalAlign: 'inherit' }}>zasta.de is a platform on which your tax return is created by independent tax consultants.</font></font></span>
                </nav>
                {/* mobile menu ends */}

                {/* desktop menu starts */}
                <nav className="navbar without-svg-fix">
                    <div className="container ios-fix-container">
                        <div className="navbar-header">
                            <div className="ios-fix">
                                <button type="button" className="navbar-toggle collapsed navbar-toggle-fix" data-toggle="offcanvas" data-target="#myNavmenu">
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <Link className="navbar-brand" to="/">
                                    <img src="img/svg/logo.svg" className="logo" alt="BookByQr" />
                                </Link>
                            </div>
                            <div className="top-links ios-fix-top-links head">
                                
                                {/* <a href="#pricing" className="head-links">Pricing</a>
                                <a href="#features" className="head-links">Features</a>
                                <a href="#aboutus" className="head-links">About Us</a>
                                <a href="#contactus" className="head-links">Contact Us</a> */}
                                <Link to="/login" onclick="captureOutboundLink('https://app.zasta.de/register'); return false;" className="btn btn-default" role="button">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* desktop menu ends */}

                <div className="container jumbotron-container-fix">
                    {/* <h1 className="visible-xs">Hol dir dein Steuergeld zurück.</h1> */}
                    {/* <h3>Automatische Steuererklärung in 3 Min. mit deinem Steuerberater.</h3> */}

                    <h2 className="banner-text" >Scheduling your appointments<br /> should be superfast and supersimple,<br /> Let’s do this in three quick steps.</h2>
                    <Link className="btn btn-primary regst" to="/register" onclick="captureOutboundLink('https://app.zasta.de/register'); return false;" role="button">
                        Register Now</Link>
                    <img src="img/razorpay.webp" className="tuev-top-mobile hidden-xs" alt="TÜV Saarland" />
                    <div className="jumbotron-logos hidden-xs">
                    </div>
                </div>
                <img src="img/startzero.png" className="jumbotron-980 start-zero mobile" />
            </div>

        </div>
    )
}

export default Banner
