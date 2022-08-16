import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Testimonial() {
    const url = ''
    const [testimonialData, setTestimonialData] = useState([])
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'js/index.js'

        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script);
        }
    }, [])

    useEffect(async () => {
        const response = await axios.get(process.env.REACT_APP_BASE_URL + '/get_testimonials')
        setTestimonialData(response.data.data.testimonials)
    }, [])

    console.log(testimonialData);
    return <div className='mt-100-all'>
        <div>
            <div>
                <div className="container mit-zasta text-center">
                    <div className="row header testimonial">
                        <img src="img/stars.png" className="Fill-1543 test-stars" alt="Stars" loading="lazy" />
                        <h2 className=''>Customer Speak</h2>
                        <p className='head-detail'>Our service speaks for itself, some of our customers who volunteered to recommend us.</p>
                    </div>

                    <div className="" id="">
                        <div className="row carousel slide container carousel-container" id="testimonial-slider">
                            {console.log(testimonialData)}
                            {
                                testimonialData && testimonialData.map(data => (
                                    <div className="col-sm-4 col-md-3 col-lg-3">
                                        <div className="box">
                                            <div className="benefit benefit-1">
                                                <img src={data.image} alt="Uhr" loading="lazy" />
                                            </div>
                                            <span className="title card-title">{data.name}</span>
                                            <p className='font-styling'>{data.description}</p>
                                        </div>
                                    </div>
                                ))
                            }

                            {/* <div className="col-sm-4">
                                <div className="box">
                                    <div className="benefit benefit-2">
                                        <img src="img/svg/Zasta_Icons_teaser_3.svg"  alt="Finanzamt" loading="lazy" />
                                    </div>
                                    <span className="title card-title">Stonny John</span>
                                    Choose a free plan that provides for unlimited 
                                    bookings, at zero payments.
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="benefit benefit-3">
                                        <img src="img/svg/Zasta_Icons_teaser_3.svg" alt="Steuerberater" loading="lazy" />
                                    </div>
                                    <span className="title card-title">Mike Specter</span>
                                    Cancel your services with us anytime and
                                    take back all unspent credits.
                                </div>
                            </div> */}
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
    </div>;
}
