import React from 'react'

const ZastaAdvantage = () => {
    return (
        <div>
            <div className='mt-50-all'>
                <div className="container mit-zasta text-center">
                    <div className="row header">
                        <img src="img/svg/Zasta_Icons_Star.svg" className="Fill-1543" alt="Rakete" loading="lazy" />
                    </div>
                    <h2 className='how-title'>How is it possible.</h2>
                    <div className="row carousel slide container carousel-container" id='feature-slider'>
                        <div className="col-sm-4">
                            <div className="box">
                                <div className="benefit benefit-1">
                                    <img src="img/svg/Zasta_Icons_teaser_1.svg" alt="Uhr" loading="lazy" />
                                </div>
                                <span className="title">Ready In a Minute</span>
                                <p className='font-styling'>With a simple registration and a quick schedule
                                    creation, you can share your availability to your
                                    clients in just under a minute.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <div className="benefit benefit-2">
                                    <img src="img/svg/Zasta_Icons_teaser_2.svg" alt="Finanzamt" loading="lazy" />
                                </div>
                                <span className="title">Start with Zero Payments</span>
                                <p className='font-styling'>Choose a free plan that provides for unlimited
                                    bookings, at zero payments.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <div className="benefit benefit-3">
                                    <img src="img/svg/Zasta_Icons_teaser_3.svg" alt="Steuerberater" loading="lazy" />
                                </div>
                                <span className="title">Cancel Anytime</span>
                                <p className='font-styling'>Cancel your services with us anytime and
                                    take back all unspent credits.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container text-center unser-zasta">
                    <div className="row">
                        <img src="img/svg/Zasta_Icons_Zasta_Seal.svg" className="Group-7" alt="Abzeichen" />
                        <span className="sub-title">Unser Zasta Versprechen</span>
                        <h2>Keine Gebühr, <br />wenn dir das Angebot nicht gefällt!</h2>
                        <p>Der Zasta Steuerberater ermittelt deine Rückerstattung und schickt dir ein Angebot. Nur wenn du es annimmst wird der Steuerberater für dich tätig und nur dann entstehen die Kosten aus dem Angebot.</p>
                        <a className="btn btn-primary" href="https://app.zasta.de/register" onclick="captureOutboundLink('https://app.zasta.de/register'); return false;" role="button">jetzt kostenlos
                            registrieren</a>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default ZastaAdvantage
