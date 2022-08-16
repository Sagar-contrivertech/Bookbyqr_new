import React from 'react'
import { Link } from 'react-router-dom'

const ZastaDashboard = () => {
    return (
        <div className='mt-100-all'>
            <div className="container dashboard text-center">
                <div className="row">
                    <img src="img/svg/Zasta_Icons_Dashboard.svg" className="Group-4" alt="Dashboard" loading="lazy" />
                    <h2 className='apn-title'>The BookbyQR appointments view</h2>
                    <p className='apn-desc'>
                        The BookbyQR appointments view provide the <br/> comprehensive
                        view of your schedule ahead <br/> just as your would view your
                        phone dial <br/> history.
                    </p>
                </div>
                <div className="row Path-51 " />
                <div className="row dashboard-features hidden-xs dashboard-features-items mt-100-all">
                    <img src="img/group-34.png"  className="Group-34" alt="Status" />
                    <span className="feature feature-1">
                        <img src="img/svg/Zasta_Icons_Clock.svg" className="Group-14 icon" alt="Uhr" />
                        Get a complete view of the schedule<br />of the appointments
                        <img src="img/curve.png" className="curve" alt="" />
                    </span>
                    <span className="feature feature-2">
                        <img src="img/svg/Zasta_Icons_Magnifying_glass.svg" className="Group-9 icon" alt="Suche" />
                        Edit/Create/Delete new appointments<br />on the fly.
                        <img src="img/curve.png" className="curve" alt="" />
                    </span>
                    <span className="feature feature-3">
                        <img src="img/svg/Zasta_Icons_Document.svg" className="Group-11 icon" alt="Dokument" />
                        Dropdown to view all other schedules
                        <img src="img/curve.png" className="curve" alt="" />
                    </span>
                    <span className="feature feature-4">
                        <img src="img/svg/Zasta_Icons_Shield.svg" className="Group-27 icon" alt="Schild" />
                        View if the appointments are still available<br />
                        or are SMS/Email OTP authenticated, <br/>created by Merchants etc..
                        <img src="img/curve.png" className="curve" alt="" />
                    </span>
                </div>
                <div className="container carousel-container visible-xs" id="dashboardSlider">
                    <div className="dashboard-features carousel slide" id="dashboard-features-carousel" />
                </div>
                <div className="row link-register">
                    <Link className="btn btn-primary" to="/register" onclick="captureOutboundLink('https://app.zasta.de/register'); return false;" role="button">
                        Register Now</Link>
                </div>
                <div className="row Path-51 bottom" />
            </div>

        </div>
    )
}

export default ZastaDashboard
