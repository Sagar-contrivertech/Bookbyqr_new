import React, { useEffect, useState } from 'react';
import './AllAppointments.css'
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import { Box, Chip, OutlinedInput, Stack, Switch, useTheme } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader';
import axios from 'axios';
import moment from 'moment';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            top: 500
        },
    },
};
const format = 'HH:mm';
const names = [
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat',
    'Sun'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const weeks = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
]

const AllAppointments = () => {
    const [title, setTitle] = useState('')
    const [start_time, setStartTime] = useState("0:00")
    const [end_time, setEndTime] = useState("0:00")
    const [start_date, setStartDate] = useState(new Date())
    const [end_date, setEndDate] = useState(new Date())
    const [slot, setSlot] = useState('')
    const [seats, setSeats] = useState('')
    const [days, setDays] = useState('')
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    // myschedule-data
    const [scheduleData, setScheduleData] = useState([])

    // useEffect(async () => {
    //     const response = await axios.get(process.env.REACT_APP_BASE_URL + '/UserAppointmentSchedule')
    //     console.log(response)
    //     setScheduleData(response.data.data.schedule)
    // }, [])
    // // myschedule-data-ends

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

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChangeTime = (newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ConditionalHeader />
            <div class="content">
                <h3 className='schedule-heading'>Create your first schedule</h3>
                <p>Let your customers know when they can book
                    their appointments with you.</p>
                <hr className="hr-tag" />
                <form action="" onSubmit={onFormSubmit}>
                    <div className="row">
                        <div className="col-sm-12">
                            <TextField id="outlined-basic"
                                onChange={(e) => { setTitle(e.target.value) }} name="title"
                                value={title} className='schedule-field' label="Title" variant="outlined" />
                        </div>
                        <div className="col-sm-6">
                            <TextField id="start_time"
                                onChange={(e) => { setStartTime(e.target.value) }}
                                value={start_time} type="time" label="Start Time" variant="outlined" />
                        </div>
                        <div className="col-sm-6">
                            <TextField id="end_time"
                                onChange={(e) => { setEndTime(e.target.value) }} name="end_time"
                                value={end_time} type="time" className='schedule-field' label="End Time" variant="outlined" />
                        </div>
                        <div className="col-sm-6">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={slot}
                                    name="slot"
                                    label="Slot"
                                    onChange={(e) => { setSlot(e.target.value) }}
                                >
                                    <MenuItem value={10} style={{ fontSize: '15px' }}>10 min</MenuItem>
                                    <MenuItem value={20} style={{ fontSize: '15px' }}>20 min</MenuItem>
                                    <MenuItem value={30} style={{ fontSize: '15px' }}>30 min</MenuItem>
                                    <MenuItem value={30} style={{ fontSize: '15px' }}>1 hour</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-sm-6">
                            <TextField id="outlined-basic"
                                onChange={(e) => { setSeats(e.target.value) }} name="seats"
                                value={seats} className='schedule-field' type="number" label="Total Seats" variant="outlined" />
                        </div>
                        <div className="col-sm-6">
                            <TextField id="outlined-basic"
                                onChange={(e) => { setStartDate(e.target.value) }} name="start_date"
                                type="date" value={start_date} className='schedule-field' label="From" variant="outlined" />
                        </div>
                        <div className="col-sm-6">
                            <TextField id="outlined-basic" type="date"
                                onChange={(e) => { setEndDate(e.target.value) }}
                                name="end_time"
                                value={end_date} className='schedule-field' label="To" variant="outlined" />
                        </div>
                        <div className="col-sm-12" style={{ marginTop: '10px' }}>
                            <label>Available Days:</label>
                            {/* <FormControl sx={{ m: 1, width: 300 }}> */}
                            <ul>
                                {
                                    weeks.map(week => (
                                        <>
                                            <li className="popular-category">
                                                <label className="selectit">
                                                    <input
                                                        defaultValue="blog"
                                                        type="checkbox"
                                                        className="js-wpv-filter-trigger"
                                                        name="wpv-category[]"
                                                        id="in-category-3"
                                                    />{" "}
                                                    {week}
                                                </label>
                                            </li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="col-sm-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                            <div className="sch-popup-btn">
                                <button className="button1 btn-cancel">Cancel</button>
                            </div>
                            <div className="sch-popup-btn">
                                <button className="button btn-add">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};

export default AllAppointments;
