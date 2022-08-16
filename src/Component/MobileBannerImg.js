import React from 'react'

const MobileBannerImg = () => {
    return (
        <div id='features' className='mt-50-all'>
            <div className="container funktioniert text-center">
                <div className="row header header-3-step header-features">
                    <img src="img/svg/downarrow.png" className="funktioniert-header-img" alt="Klick" loading="lazy" />
                    <h2 className='mobBanner-title'>Use BookByQR <br/>to manage your scheduled and appointments</h2>
                </div>
                <div className="row funktioniert-carousel-items" id="funktioniert-slider">
                    <div className="col-sm-4">
                        <div className="box">
                            <span className="num">1</span>
                            <span className="img"><img src="https://bookbyqr.com/assets/image/card1%20illustration.png" alt="PIN Code" loading="lazy" style={{width: '100%', height: '150px'}}/></span>
                            <span className="title">SHARE</span>
                            <p className='font-styling-20'> Use BookByQR to share your availability with a few or thousands of people. </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <span className="num">2</span>
                            <span className="img"><img src="https://bookbyqr.com/assets/image/card2%20illustration.png" alt="Persönliche Angaben" loading="lazy" style={{width: '100%', height: '150px'}}/></span>
                            <span className="title">Organise</span>
                            <p className='font-styling-20'> Organise vaccination schedules for society. Let walkin customers schedule themselves to address social distancing. </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <span className="num">3</span>
                            <span className="img"><img src="https://bookbyqr.com/assets/image/card3%20illustration.png" alt="Unterschrift" loading="lazy" style={{width: '60%', height: '150px'}}/></span>
                            <span className="title">RESERVE</span>
                            <p className='font-styling-20'> Reserve tables for your diners Manage your shows or concerts. Create appointments for your patients. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MobileBannerImg
