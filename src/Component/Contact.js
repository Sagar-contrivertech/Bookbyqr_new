import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, FormControlLabel } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import swal from 'sweetalert';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Contact() {

  const url = 'https://bookbyqr.com/api/book-by-qr/api/contact_us'
  const [disable, setDisabled] = useState(false)
  const [data, setData] = useState({
    name: '',
    phone_number: '',
    email: '',
    subject: '',
    message: '',
    privacyPolicy: false
  })
  const Registration = (e) => {
    e.preventDefault();
    const contactData = { email: data.email, subject: data.subject, message: data.message, name: data.name, phone_number: data.phone_number, privacyPolicy: data.privacyPolicy }
    axios.post(url, contactData).then((res) => {
      if (res.status == 200) {
        // console.log(res)S
        swal('Information Submitted Sucessfully')
        setData({ email: '', name: '', subject: '', message: '', phone_number: '', privacyPolicy: false })
        setDisabled(false)
      } else {
        console.log('err')
      }
    })
  }

  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    setDisabled(!disable)
    // console.log("captch value", e)
  }


  return <div id='contactus' className='mt-50-all'>
    <div className=" container contact-form">
      <div className="row">
        <div className="col-md-6 contact-img">
          <img src="/img/contact1.png" alt="contact-us" className='con-img' />
        </div>
        <div className="col-md-6">
          <Grid>
            {/* <Card >
              <CardContent> */}
                <Typography gutterBottom variant="h3" style={{fontFamily: 'Nunito'}}>
                  Send us a message
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom className='submit-button'>
                  Fill up the form and our team will get back to you within 24 hours.
                </Typography>
                <form onSubmit={Registration}>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={5} item>
                      <TextField id="first-name"
                        label="Name" variant="outlined"
                        fullWidth required
                        onChange={onChange} name='name'
                        size="small"
                        inputProps={{ style: { fontSize: 15 } }}
                        value={data.name} 
                        InputLabelProps={{ style: { fontSize: 15 } }}/>
                    </Grid>
                    <Grid item sm={1} className='hidden-xs'></Grid>
                    <Grid xs={12} sm={5} item>
                      <TextField id="last-name"
                        type="email" label="Email"
                        variant="outlined" fullWidth required
                        onChange={onChange} name='email'
                        value={data.email}
                        size="small"
                        inputProps={{ style: { fontSize: 15 } }} 
                        InputLabelProps={{ style: { fontSize: 15 } }}/>
                    </Grid>
                    <Grid item xs={12} sm={5} >
                      <TextField id="email"
                        type="text" label="Subject"
                        variant="outlined"
                        fullWidth required
                        onChange={onChange} name='subject'
                        value={data.subject}
                        size="small"
                        inputProps={{ style: { fontSize: 15 } }} 
                        InputLabelProps={{ style: { fontSize: 15 } }}/>
                    </Grid>
                    <Grid item sm={1} className='hidden-xs'></Grid>
                    <Grid item xs={12} sm={5} >
                      <TextField id="number"
                        type="tel" label="Number"
                        variant="outlined"
                        fullWidth required
                        onChange={onChange}
                        name='phone_number'
                        size="small"
                        value={data.phone_number}
                        inputProps={{ style: { fontSize: 15 } }} 
                        InputLabelProps={{ style: { fontSize: 15 } }}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Type your message here"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        size="small"
                        onChange={onChange}
                        name='message' value={data.message}
                        inputProps={{ style: { fontSize: 15 } }} 
                        InputLabelProps={{ style: { fontSize: 15 } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel control={<Checkbox name='privacyPolicy'
                       value={data.privacyPolicy} onChange={onChange} 
                       style={{fontSize: '15px', margin:'10px'}}/>} 
                       label="By Sending this message, you confirm that you have read, understood and agree to our Privacy Policy" />
                    </Grid>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                    />
                    {
                      !disable ? <Grid item xs={12}>
                        <Button type="submit" variant="contained" 
                        disabled color="primary" 
                        size='large'
                        fullWidth
                        style={{ fontWeight: '800', fontSize: '15px'}}
                        >Submit</Button>
                      </Grid>
                        :
                        <Grid item xs={12}>
                          <Button type="submit" variant="contained" size='large' fullWidth
                          style={{color: '#3834b4',
                           backgroundColor: '#E7ca15', fontWeight: '800', fontSize: '15px'}}>
                            Submit</Button>
                        </Grid>
                    }
                  </Grid>
                </form>
              {/* </CardContent>
            </Card> */}
          </Grid>

        </div>

      </div>
    </div>
  </div>;
}
