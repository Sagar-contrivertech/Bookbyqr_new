import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OTPInput from "otp-input-react";
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import '../Signup/Signup.css'
const Login = () => {

  const [phone_number, setPhone] = useState('')
  // const [OTP, setOTP] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h3 className='head-mr'>
          LOGIN TO BOOKBYQR
        </h3>
      </div>
      <div className="box-form">
        <div className="right">
          <div className="inputs">
            <input type="tel" placeholder="Phone"
              name="phone_number" value={phone_number}
              onChange={(e) => { setPhone(e.target.value) }} />
            <br />
            <br/>
            <div style={{display: 'flex'}}>
            <button className="secondary">Send OTP</button>
            <OTPInput className="otp-signup" autoFocus OTPLength={4} otpType="number" disabled={false} secure />
            {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
            </div>
            
          </div>
          <br />
          <div className="remember-me--forget-password">
            <p>Forgot Password?</p>
          </div>
          <Link to="/merchant/schedules"><button className='signup-button'>Login</button></Link>
          <div className="new-user">
            New to BookByQr?<Link to="/register"> Signup Now For Free</Link>
          </div>
        </div>
      </div>
      <div className="row Path-5 mt-50-all" />
      {/* partial */}
      <Footer />
    </>
  );
};

export default Login;



