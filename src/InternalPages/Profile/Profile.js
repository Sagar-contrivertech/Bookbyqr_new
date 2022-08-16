import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';

const Profile = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState('')
    const [business_name, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [link, setlink] = useState('')
    const [website, setWebsite] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onEdit = (e) => {
        setIsEdit(true)
    }

    const onBack = (e) => {
        setIsEdit(false)
    }

    return (
        <>
            <ConditionalHeader />
            <h2 className='h2-tag'>Account Info</h2>
            <div className='container profile-box'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6  col-xs-12 col-sm-12'>
                        <div >
                            <h5>Basic Details:</h5>
                            <div className="profile-border">
                                <div style={{ display: 'flex' }}>
                                <label>Name:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <input type="text"
                                                        className='input-width'
                                                        name='name'
                                                        value={name}
                                                        onChange={(e) => { setName(e.target.value) }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>Sonam Jha</p>
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{ display: 'flex' }}>
                                <label>Email:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <input type="text"
                                                        className='input-width'
                                                        name='email'
                                                        value={email}
                                                        onChange={(e) => { setEmail(e.target.value) }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>sonam@gmail.com</p>
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{ display: 'flex' }}>
                                <label>Phone:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <input type="text"
                                                        className='input-width'
                                                        name='phone_number'
                                                        value={phone_number}
                                                        onChange={(e) => { setPhone(e.target.value) }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>8779255306</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6  col-xs-12 col-sm-12'>
                        <div>
                            <h5>Business Details:</h5>
                            <div className="profile-border">
                                <div style={{ display: 'flex' }}>
                                    <label>Business Name:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <input type="text"
                                                        className='input-width'
                                                        name='business_name'
                                                        value={business_name}
                                                        onChange={(e) => { setBusinessName(e.target.value) }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>ContriverTech</p>
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <label>Website:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <input type="text"
                                                        className='input-width'
                                                        name='website'
                                                        value={website}
                                                        onChange={(e) => { setWebsite(e.target.value) }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>contrivertech.com</p>
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <label>Address:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <textarea
                                                        className='input-width'
                                                        name='address'
                                                        value={address}
                                                        onChange={(e) => { setAddress(e.target.value) }}
                                                    ></textarea>
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>Andheri, East, Mhada Colony, Mumbai</p>
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{display: 'flex'}}>
                                    <button className='address-btn' >
                                        City
                                    </button>
                                    <button className='address-btn' >
                                        State
                                    </button>
                                    <button className='address-btn' >
                                        Zip Code
                                    </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-6  col-xs-12 col-sm-12'>
                        <div >
                            <h5>Your Preference:</h5>
                            <div className="profile-border">
                                <div style={{ display: 'flex' }}>
                                    <h5>Receive Newsletter:</h5>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h5>Receive Promotional Mails:</h5>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h5>Member Since:</h5>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <p>5 Feb 2022</p>
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>5 Feb 2022</p>
                                                </div>
                                            )
                                    }
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h5>Your Unique QR:</h5>
                                    <div className='p-tag'>
                                        <p>https://bookbyqr.com/in/rRZ183</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6  col-xs-12 col-sm-12'>
                        <div>
                            <h5>Subscription Details:</h5>
                            <div className="profile-border">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h5>Current Plan:</h5>
                                    <button className='plan-btn' >
                                        Free
                                    </button>
                                </div>
                                <p>Your free forever plans gives you unlimited email OTP authentications
                                    of your customers when they book their appointments with you.
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between'  }}>
                                    <h5>Upgrade Your Plan:</h5>
                                    <button className='plan-btn' >
                                        Upgrade
                                    </button>
                                </div>
                                <p>The Paid Pay-as-you-go plans provide a host
                                    of additional functionality including SMS
                                    OTP authentication of your customers when
                                    they book their appointments with you.
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between'  }}>
                                    <h5>Delete Your Account:</h5>
                                    <button className='plan-btn' >
                                        Delete
                                    </button>
                                </div>
                                <p>Would you like to delete your account with
                                    us forever. This would mean loosing all your
                                    information from our systems. Credits still
                                    remaining would be settled asap, but It
                                    would be sad to let you go. You can reach us
                                    at support@bookbyqr.com in case of
                                    queries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Name:</h5>
                            </div>
                            {
                                isEdit ?
                                    (
                                        <div className='p-tag'>
                                            <input type="text"
                                                className='input-width'
                                                name='name'
                                                value={name}
                                                onChange={(e) => { setName(e.target.value) }}
                                            />
                                        </div>
                                    ) : (
                                        <div className='p-tag'>
                                            <p>Sonam Jha</p>
                                        </div>
                                    )
                            }
                        </div> */}
                {/* </div> */}
                {/* <div className='col-md-4 col-lg-5  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Business Name:</h5>
                            </div>
                            {
                                isEdit ? (
                                    <div className='p-tag'>
                                        <input type="text"
                                            className='input-width'
                                            name='business_name'
                                            value={business_name}
                                            onChange={(e) => { setBusinessName(e.target.value) }}
                                        />
                                    </div>
                                ) : (
                                    <div className='p-tag'>
                                        <p>ContriverTech </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Email:</h5>
                            </div>
                            {
                                isEdit ? (
                                    <div className='p-tag'>
                                        <input type="email"
                                            className='input-width'
                                            name='email'
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                    </div>
                                ) : (
                                    <div className='p-tag'>
                                        <p>sonam.jha@gmail.com </p>
                                    </div>
                                )
                            }
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className='row'>
                    <div className='col-md-4 col-lg-3  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Phone:</h5>
                            </div>
                            {
                                isEdit ? (
                                    <div className='p-tag'>
                                        <input type="tel"
                                            className='input-width'
                                            name='phone_number'
                                            value={phone_number}
                                            onChange={(e) => { setPhone(e.target.value) }}
                                        />
                                    </div>
                                ) : (
                                    <div className='p-tag'>
                                        <p>88552222336 </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-5  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Address:</h5>
                            </div>
                            {
                                isEdit ? (
                                    <div className='p-tag'>
                                        <input type="text"
                                            className='input-width'
                                            name='address'
                                            value={address}
                                            onChange={(e) => { setAddress(e.target.value) }}
                                        />
                                    </div>
                                ) : (
                                    <div className='p-tag'>
                                        <p>
                                            605,RBI EMPLOYEES SHANTI,S.C ROAD,DAHANUKAR WADI,KANDIVALI(W),MUMBAI-67,MAHARAHSTRA
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Website:</h5>
                            </div>
                            {
                                isEdit ? (
                                    <div className='p-tag'>
                                        <input type="website"
                                            className='input-width'
                                            name='website'
                                            value={website}
                                            onChange={(e) => { setWebsite(e.target.value) }}
                                        />
                                    </div>
                                ) : (
                                    <div className='p-tag'>
                                        <p>contrivertech.com </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-lg-3  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Plan:</h5>
                            </div>
                            <div className='p-tag'>
                                <p>Free</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-5  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Receive Promotion Mails:</h5>
                            </div>
                            <div className='p-tag'>
                                <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-lg-4  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Receive Newsletter:</h5>
                            </div>
                            <div className='p-tag'>
                                <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-lg-3  col-xs-12'>
                        
                    </div>
                    <div className='col-md-4 col-lg-5  col-xs-12'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <h5>Your Personal Link:</h5>
                            </div>
                            {
                                isEdit ? (
                                    <div className='p-tag'>
                                        <input type="link"
                                            className='input-width'
                                            name='link'
                                            value={link}
                                            onChange={(e) => { setlink(e.target.value) }}
                                        />
                                    </div>
                                ) : (
                                    <div className='p-tag'>
                                        <p>https://bookbyqr.com/in/rRZ183 </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div> */}
            </div>
            {
                !isEdit ? (
                    <div className='vertical-center'>
                        <button className='edit-btn' onClick={(e) => { onEdit(e) }}>
                            Edit
                        </button>
                        <button className='delete-btn'>
                            Delete
                        </button>
                    </div>
                ) : (
                    <div className='vertical-center'>
                        <button className='edit-btn' >
                            Save
                        </button>
                        <button className='delete-btn' onClick={(e) => { onBack(e) }}>
                            Back
                        </button>
                    </div>
                )
            }

            <Footer />
        </>
    )
};

export default Profile;
