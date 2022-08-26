import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import Footer from '../../Component/Footer';
import './Schedule.css'
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TextField } from '@mui/material';
const Schedules = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [title, setTitle] = useState('')
    const [start_time, setStartTime] = useState('')
    const [end_time, setEndTime] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [slot, setSlot] = useState('')
    const [seats, setSeats] = useState('')
    const [days, setDays] = useState('')

    // myschedule-data
    const [scheduleData, setScheduleData] = useState([])

    useEffect(async () => {
        const response = await axios.get(process.env.REACT_APP_BASE_URL + '/UserAppointmentSchedule')
        console.log(response)
        setScheduleData(response.data.data.schedule)
    }, [])
    // myschedule-data-ends

    const onFormSubmit = async (e) => {
        console.log('working');
        e.preventDefault();
        try {
            let body = {
                title: title,
                start_time: start_time,
                end_time: end_time,
            }
            let response = await axios.post(process.env.REACT_APP_BASE_URL + '/UserAppointmentSchedule', body, { mode: 'cors' })
                .then((res) => res.json())
                .then((resp) => {
                    console.log(resp);
                })
            console.log(response);
            setTitle('')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <ConditionalHeader />
            <div className='width-container'>
                <div className='container heading' >
                    <h2>Your Schedules</h2>
                    <hr className='hr' />
                    <div className='container schedule-container' style={{width: '95%'}}>
                        <div className='row no-gutter'>
                            {/* <div className='col-lg-2 col-xs-6 padding-0 margin-top-10'>
                            <button className='border-10'>
                                 <EventNoteOutlinedIcon className='event-icon'/> 
                                First Schedule</button>
                        </div> */}
                            <div className='col-lg-4 col-xs-6' >
                                <button className='border-10 padding-0 margin-top-10'>
                                    {/* <EventNoteOutlinedIcon /> */}
                                    First Schedule</button>
                            </div>
                            {/* <div className='col-lg-3 col-xs-6'>
                                <button className='border-10 padding-0 margin-top-10'>
                                    Second Schedule</button>
                            </div> */}
                            <div className='col-lg-4 col-xs-6 '>
                                <button className='border-10'>2 More  <KeyboardArrowDownOutlinedIcon fontSize='large' style={{paddingLeft: '5px'}} /></button>
                            </div>
                            <div className='col-lg-4 col-xs-6 margin-top-10'>
                                <button className="button">+ New Schedules</button>
                            </div>
                        </div>
                    </div>
                    <div className='container text-left'>
                        <h3 className='shadow'>First Schedule</h3>
                        <div className="wrapper">
                            <form style={{ marginTop: '30px'}}>
                                <div className="wrap1">
                                    <label>Available Dates</label>
                                    <div className="row" >
                                        <div className="col-md-5 col-lg-5 col-xs-5" style={{width: '48%'}}>
                                            {/* <label for="inputEmail5">Slot Duration</label> */}
                                            <input type="email" class="form-control" id="inputEmail5" />
                                        </div>
                                        <div className="col-md-5 col-lg-5 col-xs-5" style={{width: '48%'}}>
                                            {/* <label for="inputEmail5">Slot Duration</label> */}
                                            <input type="email" class="form-control" id="inputEmail5" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: '30px' }}>
                                        <div className="col-md-5 col-lg-5 col-xs-5" style={{width: '48%'}}>
                                            <label for="inputEmail5">Slot</label>
                                            <input type="email" class="form-control" id="inputEmail5" placeholder='One' />
                                        </div>
                                        <div className="col-md-5 col-lg-5 col-xs-5" style={{width: '48%'}}>
                                            <label for="inputEmail5">Slot Duration</label>
                                            <input type="email" class="form-control" id="inputEmail5" placeholder='15 minutes' />
                                        </div>
                                    </div>
                                </div>
                                <hr className='mid-hr' />
                                <div className="div1">
                                    <div style={{ marginTop: '30px', marginLeft: '50px', paddingBottom: '30px' }}>
                                        <label className='margin-left'>Set Weekly Hours</label>
                                        <div className='row' style={{marginTop: '15px', marginLeft: '-47px'}}>
                                            <div className='col-lg-12 week-align'>
                                                <div className='col-lg-4 col-sm-5 col-xs-5 week-align'>
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginBottom: '15px'}} />
                                                    {/* </div>
                                                <div className='col-lg-2 week-align'> */}
                                                    <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '-50px' }}>SUN</label>
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" className='time-input' placeholder='9:00' />
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" className='time-input' placeholder='5:00' />
                                                </div>
                                                <DeleteOutlineIcon style={{color: 'black'}} fontSize='large' />
                                            </div>
                                        </div>
                                        <hr className='mid-hr' />
                                        <div className='row' style={{marginBottom: '15px', marginLeft: '-47px'}}>
                                            <div className='col-lg-12 week-align'>
                                                <div className='col-lg-4 col-sm-5 col-xs-5 week-align'>
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginBottom: '15px'}} />
                                                    {/* </div>
                                                <div className='col-lg-2 week-align'> */}
                                                    <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '-50px' }}>MON</label>
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" className='time-input' placeholder='9:00' />
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" className='time-input'  placeholder='5:00' />
                                                </div>
                                                <DeleteOutlineIcon style={{color: 'black'}} fontSize='large' />
                                            </div>
                                        </div>
                                        <hr className='mid-hr' />
                                        <div className='row' style={{marginBottom: '15px', marginLeft: '-48px'}}>
                                            <div className='col-lg-12 week-align'>
                                                <div className='col-lg-4 col-sm-5 col-xs-5 week-align'>
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginBottom: '15px'}} />
                                                    {/* </div>
                                                <div className='col-lg-2 week-align'> */}
                                                    <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '-50px' }}>TUE</label>
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" className='time-input'  placeholder='9:00' />
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='5:00' className='time-input' />
                                                </div>
                                                <DeleteOutlineIcon style={{color: 'black'}} fontSize='large' />
                                            </div>
                                        </div>
                                        <hr className='mid-hr' />
                                        <div className='row' style={{marginBottom: '15px', marginLeft: '-47px'}}>
                                            <div className='col-lg-12 week-align'>
                                                <div className='col-lg-4 col-sm-5 col-xs-5 week-align'>
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginBottom: '15px'}} />
                                                    {/* </div>
                                                <div className='col-lg-2 week-align'> */}
                                                    <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '-50px' }}>WED</label>
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='9:00' className='time-input' />
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='5:00' className='time-input' />
                                                </div>
                                                <DeleteOutlineIcon style={{color: 'black'}} fontSize='large' />
                                            </div>
                                        </div>
                                        <hr className='mid-hr' />
                                        <div className='row' style={{ marginBottom: '15px', marginLeft: '-48px' }}>
                                            <div className='col-lg-12 week-align'>
                                                <div className='col-lg-4 col-sm-5 col-xs-5 week-align'>
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{ marginBottom: '15px' }} />
                                                    {/* </div>
                                                <div className='col-lg-2 week-align'> */}
                                                    <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '-50px' }}>THU</label>
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='9:00' className='time-input' />
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='5:00' className='time-input' />
                                                </div>
                                                <DeleteOutlineIcon style={{ color: 'black' }} fontSize='large' />
                                            </div>
                                        </div>
                                        <hr className='mid-hr' />
                                        <div className='row' style={{marginBottom: '15px', marginLeft: '-48px'}}>
                                            <div className='col-lg-12 week-align'>
                                                <div className='col-lg-4 col-sm-5 col-xs-5 week-align'>
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginBottom: '15px'}} />
                                                    {/* </div>
                                                <div className='col-lg-2 week-align'> */}
                                                    <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '-50px' }}>FRI</label>
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='9:00' className='time-input' />
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='5:00' className='time-input' />
                                                </div>
                                                <DeleteOutlineIcon style={{color: 'black'}} fontSize='large' />
                                            </div>
                                        </div>
                                        <hr className='mid-hr' />
                                        {/* <div className='row' style={{ marginLeft: '-66px'}}>
                                    <div className='col-lg-8 week-align'>
                                        <div>
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">SAT</label>
                                        </div>
                                        <p>Unavailable</p>
                                    </div>
                                </div> */}
                                        <div className='row' style={{marginBottom: '15px', marginLeft: '-47px'}}>
                                            <div className='col-lg-12 week-align'>
                                                <div className='col-lg-4 col-sm-5 col-xs-5 week-align'>
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginBottom: '15px'}} />
                                                    {/* </div>
                                                <div className='col-lg-2 week-align'> */}
                                                    <label className="form-check-label" for="exampleCheck1" style={{ marginLeft: '-50px' }}>SAT</label>
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='9:00' className='time-input' />
                                                </div>
                                                <div className='col-lg-4 col-sm-3 col-xs-3 week-align'>
                                                    <input type="time" placeholder='5:00' className='time-input' />
                                                </div>
                                                <DeleteOutlineIcon style={{color: 'black'}} fontSize='large' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row Path-5 mt-50-all" />
            <Footer />
        </>
    )
};

export default Schedules;




