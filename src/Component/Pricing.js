import React from 'react';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#fff',
    border: 'none',
    boxShadow: 24,
    outline: 'none',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: 4,
};

export default function Pricing() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    return <div className='mt-50-all'>
        <div className="simple-pricing position-relative section-block d-flex align-items-center justify-content-center" id="pricing">
            {/* <img src="../../../assets/image/triangle-shape.png" className="d-none d-md-block triangle-shape" /> */}
            <div className="container">
                <div className="heading price-head">
                    <h2 className="text-blue">Simple Pricing</h2>
                    <p className='price-desc'>We offer easy pricing for our customers,
                        A free plan to start with , a simple paid
                        plan and a customisation as you need
                        for the enterprise customers.</p>
                </div>
                <div className="row">
                    <div className="col-md-6 divider">
                        <div className="text-center simple-block">
                            <h2>Free forever</h2>
                            <img src="./img/zero.png" className="d-block mx-auto rupee-img" id="zero-img" />
                            <p className="rupee-title text-blue">Rupee</p>
                            <p className='font-styling-20'>
                                Free forever, booking if you choose only Email based OTP verification of your customers <a className="m-detail" onClick={handleOpen}>More details</a>
                            </p>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h4" component="h2" className='ffp'>
                                        Free-Forever Plan
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <ul className='list-price'>
                                            <li>Authenticate your customers by their email-id’s.</li>
                                            <li>Customers get the OTP’s emails and not as SMS.</li>
                                            <li>No payments required on this plan.</li>
                                            <li>Continue on this plan as much as you like .</li>
                                            <li>More questions, or a feedback, please mail <a href='mailto:support@bookbyqr.com'>support@bookbyqr.com</a></li>
                                        </ul>
                                    </Typography>
                                    <Button className='wd-50' onClick={handleClose} variant="contained">Close</Button>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center simple-block">
                            <h2>Pay as you go</h2>
                            <img src="./img/one.png" className="d-block mx-auto rupee-img" id="one-img" />
                            <p className="rupee-title text-blue">Rupee</p>
                            <p className='font-styling-20'>
                                <b className="text-blue">1 rupee</b>, flat, inclusive all taxes, per booking if you choose phone
                                based OTP verification of your customers <a className="m-detail" onClick={handleOpen2}>More details</a>
                            </p>
                            <Modal
                                open={open2}
                                onClose={handleClose2}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h4" component="h2" className='ffp'>
                                        Pay-as-you-go Plan
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                        <ul className='list-price'>
                                            <li>Better authenticate your Customers.</li>
                                            <li>Customer get the OTP's on Phone numbers and not emails.</li>
                                            <li>Rs 100 of recharge gets you 100 Credits.</li>
                                            <li>Zero Credit used for Cancellations.</li>
                                            <li>Zero Credits used for bookings done by Providers.</li>
                                            <li>Automatic fallback Free-Forever plan when credits are exhaused.</li>
                                            <li>Recharge again to load up the credits.</li>
                                            <li>Easy Refund Policy</li>
                                            <li>More questions, please mail <a href='mailto:support@bookbyqr.com'>support@bookbyqr.com</a></li>
                                        </ul>

                                    </Typography>
                                    <Button className='wd-50' onClick={handleClose2} variant="contained">Close</Button>

                                </Box>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="price-last">
                    <p className='price-1'>We also offer
                        "Enterprise Plans"
                        which offer much more
                        customisation. For support feedback and enquiries about the plans
                        please contact us at <a href="mailto:support@bookbyqr.com" className='ml-cl'>support@bookbyqr.com</a></p>
                    <p className='price-end-desc'>Give your clients the power to book appointments<br />
                        with online scheduling</p>

                    <div className="search-wrapper cf">
                        <input type="text" placeholder="Enter your email" required />
                        <button type="submit">Get Started</button>
                    </div>
                </div>
            </div >
            {/* <img src="../../../assets/image/left-pattern.png" class="d-none d-lg-block ht-dots"> */}
        </div >


    </div >;
}
