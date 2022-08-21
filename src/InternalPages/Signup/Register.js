import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OTPInput, { ResendOTP } from "otp-input-react";

import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import './Signup.css'

const Register = () => {

  const [name, setName] = useState('')
  const [business_name, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [address, setAddress] = useState('')
  const [phone_number, setPhone] = useState('')
  const [freePlan, setFreePlan] = useState(true)
  const [termsOfService, setTermService] = useState(false)
  const [otp, setOtp] = useState('')

  // const onFormSubmit = async (e) => {
  //   console.log('working');
  //   e.preventDefault();
  //   try {
  //     let body = {
  //       name: name,
  //       business_name: business_name,
  //       email: email,
  //       password: password,
  //       website: website,
  //       address: address,
  //       phone_number: phone_number,
  //       freePlan: freePlan,
  //       termsOfService: termsOfService
  //     }
  //     let response = await axios.post(process.env.REACT_APP_BASE_URL + '/sendRegisterOtpURL', body, { mode: 'cors' })
  //       .then((res) => res.json())
  //       .then((resp) => {
  //         console.log(resp);
  //       })
  //     console.log(response);
  //     setName('')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h3 className='head-mr'>
          SIGNUP IN A MINUTE
        </h3>
        <p>You sign up with us , so that your
          customers never have to .</p>
      </div>
      <div className="box-form">
        <div className="right">
          <h5 style={{ textAlign: 'center' }}>Your Details</h5>
          <form>
            <div className="input">
              <input type="text" placeholder="Name"
                name="name" value={name}
                onChange={(e) => { setName(e.target.value) }} />
              <br />
              <input type="text" placeholder="Business Name"
                name="business_name" value={business_name}
                onChange={(e) => { setBusinessName(e.target.value) }} />
              <br />
              <input type="email" placeholder="Email"
                name="email" value={email}
                onChange={(e) => { setEmail(e.target.value) }} />
              <br />
              <input type="website" placeholder="Website"
                name="website" value={website}
                onChange={(e) => { setWebsite(e.target.value) }} />
              <br />
              <input type="address" placeholder="Address"
                name="address" value={address}
                onChange={(e) => { setAddress(e.target.value) }} />
              <br />
              <input type="tel" placeholder="Phone"
                name="phone_number" value={phone_number}
                onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <br />
            <div className="otp-wrap">
              <button className="secondary otp_btn">Send OTP</button>
              <OTPInput className="otp-signup" autoFocus OTPLength={4} otpType="number" disabled={false} secure />
            </div>
            <br />
            <div className="remember-me--forget-password">
              {/* <label>
                <input type="checkbox" className='check'
                  checked={freePlan}
                  onChange={(e) => { setFreePlan(e.target.checked) }}
                />
                <span className="text-checkbox">Free Plan</span>
              </label> */}
              <label>
                <input type="checkbox" className='check'
                  checked={termsOfService}
                  onChange={(e) => { setTermService(e.target.checked) }}
                />
                <span className="text-checkbox terms">Accept Terms of Service</span>
              </label>
            </div>

            <br />
            {
              freePlan === true && termsOfService === true ? (
                <>
                  {/* <button className='signup-button' onClick={(e) => {onFormSubmit(e)}}>Sign Up</button> */}
                </>
              ) : (
                <>
                  <button disabled className='disabled'>Sign Up</button>
                </>
              )
            }

            <div className="new-user">
              <Link to="/login">Already Registered? Login to BookByQr</Link>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="row Path-5 mt-50-all" /> */}

      {/* partial */}
      <Footer />
    </>
  )
};

export default Register;
