import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="jumbotron main">
                <div className="jumbotron-content">
                    <svg id="svg-2">
                        <defs><clipPath id="jumbotron-content-clip"><ellipse cx="50%" cy="15px" rx="230%" ry="80" style="width: 100%;"></ellipse></clipPath></defs>
                    </svg>
                </div>
            </div>

            {/* <div className="navbar-header-nav">
                <div className='header'>
                    <Link className="navbar-brand" to="/">
                        <img src="img/svg/logo.svg" className="logo" alt="ZASTA" />
                    </Link>
                </div>
            </div> */}
        </>
    )
};

export default Header;
