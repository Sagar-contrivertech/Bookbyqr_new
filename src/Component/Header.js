import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <div className="navbar-header-nav">
                <div className='header'>
                    <Link className="navbar-brand" to="/">
                        <img src="img/svg/logo.svg" className="logo" alt="ZASTA" />
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Header;
