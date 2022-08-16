import * as React from 'react';

import Footer from '../../Component/Footer';
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader';
import "./reports.css"
import { Button, TextField } from '@mui/material';



export default function Reports() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <ConditionalHeader />
            <div className='box-wrap'>
                <div class="head-wrap">
                    <h2 class="center-txt-reports">Reports</h2>
                </div>
                <div className="box-iner-wrap">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <div className="head-box">Recharge Summary</div>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Button className="mail-button">Mail</Button>
                        </div>

                        <div className="col-sm-6 col-xs-12">
                            <div className="head-box">Booking Summary</div>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Button className="mail-button">Mail</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}







