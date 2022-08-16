import React from 'react';
import { Link } from 'react-router-dom';

export default function Promise() {
    return <div>

        <div className="container mt-50-all">
            <div className="row promise-align">
                <img src="img/svg/Zasta_Icons_Zasta_Seal.svg" className="Group-7" alt="badge" />
                {/* <span className="sub-title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Our BookByQr promise</font></font></span> */}
                <h2 className="sub-title">Our BookByQr promise</h2>
                {/* <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>No charge </font></font><br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>if you don't like the offer!</font></font></h2> */}
                <h2 className='prom-desc'>We promise to offer simplest appoinments<br /> booking service</h2>
                {/* <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The Zasta tax advisor will calculate your refund and send you an offer. </font><font style={{verticalAlign: 'inherit'}}>Only if you accept it will the tax consultant work for you and only then will the costs arise from the offer.</font></font></p> */}
                <p className='prom-desc-2'>With no registration requirements by your customers and the fastest OTP checks, we aim to let your customers book their appointment with you in a simplest and fastest way.</p>
                <Link className="btn btn-primary btn-width" to="/register" onclick="captureOutboundLink('https://app.zasta.de/register'); return false;" role="button"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>sign up now for free</font></font></Link>
            </div>
        </div>
    </div>;
}
