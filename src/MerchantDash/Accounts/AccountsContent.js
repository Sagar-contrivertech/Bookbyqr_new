import { AppBar, Box, Button, Divider, Grid, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core'
import { TextField } from '@mui/material';
import React, { useState } from 'react'
import './Profile.css'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
        },
        container: {

            maxHeight: 450,
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: 'black',
            fontFamily: "'Nunito', sans-serif"
        },
        search: {
            position: 'relative',
            borderRadius: '20px',
            // backgroundColor: alpha(theme.palette.common.white, 0.15),
            // '&:hover': {
            //   backgroundColor: alpha(theme.palette.common.white, 0.25),
            // },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
            border: '2px solid black'
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black'
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
            color: 'black'
        },
        static: {
            flexGrow: '1',
            backgroundColor: 'white',
            border: '2px solid #3834b4',
            fontFamily: "'Nunito', sans-serif"
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif"
        },
        table: {
            width: '100%',
            display: 'block',
            overflowX: 'auto'
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '800',
            marginLeft: '20px'
        },
        label: {
            display: 'inline-block',
            textAlign: 'right',
            fontWeight: '600'
        }
    }
});

const AccountsContent = () => {
    const classes = useStyles()
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState('')
    const [business_name, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [link, setlink] = useState('')
    const [website, setWebsite] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone] = useState('')
    const onEdit = (e) => {
        setIsEdit(true)
    }
    const onBack = (e) => {
        setIsEdit(false)
    }
    return (
        <>
            <Paper className={classes.root}>
                <AppBar position="static" className={classes.static}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Account Info
                        </Typography>
                        {
                            !isEdit ? (
                                <>
                                    <Button className={classes.buttonStyle} onClick={(e) => { onEdit(e) }}>
                                        Edit
                                    </Button>
                                    <Button className={classes.buttonStyle}>
                                        Delete
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button className={classes.buttonStyle} >
                                        Save
                                    </Button>
                                    <Button className={classes.buttonStyle} onClick={(e) => { onBack(e) }}>
                                        Back
                                    </Button>
                                </>
                            )
                        }
                    </Toolbar>
                </AppBar>
            </Paper>
            <div className='container profile-box' style={{ marginTop: '20px' }}>
                <div>
                    <h5>Basic Details: </h5>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <label className={classes.label}>Name:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <TextField id="outlined-basic"
                                                        variant="outlined"
                                                        className='input-width'
                                                        name='name'
                                                        value={name}
                                                        onChange={(e) => { setName(e.target.value) }} />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>Sonam Jha</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <label className={classes.label}>Email:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <TextField id="outlined-basic"
                                                        variant="outlined"
                                                        className='input-width'
                                                        name='email'
                                                        value={email}
                                                        onChange={(e) => { setEmail(e.target.value) }} />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>sonam@gmail.com</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <label className={classes.label}>Phone:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <TextField id="outlined-basic"
                                                        variant="outlined"
                                                        className='input-width'
                                                        name='phone_number'
                                                        value={phone_number}
                                                        onChange={(e) => { setPhone(e.target.value) }} />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>8779255306</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <Divider />
                <div style={{ marginTop: '50px' }}>
                    <h5>Business Details: </h5>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sm={12} md={6} lg={4} >
                                <div>
                                    <label className={classes.label}>Business Name:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <TextField id="outlined-basic"
                                                        variant="outlined"
                                                        className='input-width'
                                                        name='business_name'
                                                        value={business_name}
                                                        onChange={(e) => { setBusinessName(e.target.value) }} />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>ContriverTech</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4} >
                                <div>
                                    <label className={classes.label}>Website:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <TextField id="outlined-basic"
                                                        variant="outlined"
                                                        className='input-width'
                                                        name='website'
                                                        value={website}
                                                        onChange={(e) => { setWebsite(e.target.value) }} />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>contrivertech.com</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4} >
                                <div>
                                    <label className={classes.label}>Address:</label>
                                    {
                                        isEdit ?
                                            (
                                                <div className='p-tag'>
                                                    <TextField id="outlined-basic"
                                                        variant="outlined"
                                                        className='input-width'
                                                        name='address'
                                                        value={address}
                                                        onChange={(e) => { setAddress(e.target.value) }} />
                                                </div>
                                            ) : (
                                                <div className='p-tag'>
                                                    <p>Andheri, East, Mhada Colony, Mumbai</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                {/* <div style={{ display: 'flex' }}>
                    <button className='address-btn' >
                        City
                    </button>
                    <button className='address-btn' >
                        State
                    </button>
                    <button className='address-btn' >
                        Zip Code
                    </button>
                </div> */}
                <Divider />
                <div style={{ marginTop: '50px' }}>
                    <h5>Your Preference: </h5>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <div style={{ display: 'flex' }}>
                                    <h4>Receive Newsletter:</h4>
                                    {
                                        isEdit ?
                                            (
                                                <div className='m-17'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            ) : (
                                                <div className='m-17'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <div style={{ display: 'flex' }}>
                                    <h4>Receive Promotional Mails:</h4>
                                    {
                                        isEdit ?
                                            (
                                                <div className='m-17'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            ) : (
                                                <div className='m-17'>
                                                    <input type="checkbox" id="vehicle12" name="vehicle12" value="Bike" />
                                                </div>
                                            )
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <div style={{ display: 'flex' }}>
                                    <h4>Member Since:</h4>
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
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <div style={{ display: 'flex' }}>
                                    <h4>Your Unique QR:</h4>
                                    <div className='p-tag'>
                                        <p>https://bookbyqr.com/in/rRZ183</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <Divider />
                <div style={{ marginTop: '50px' }}>
                    <h5>Subscription Details: </h5>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sm={12} md={6} lg={10} >
                                <h4>Current Plan:</h4>
                                <p>Your free forever plans gives you unlimited email OTP authentications of your customers when they book their appointments with you.</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={10} >
                                <h4>Upgrade Your Plan:</h4>
                                <p>The Paid Pay-as-you-go plans provide a host of additional functionality including SMS OTP authentication of your customers when they book their appointments with you.</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={10} >
                                <h4>Delete Your Account:</h4>
                                <p>
                                    Would you like to delete your account with us forever. This would mean loosing all your information from our systems. Credits still remaining would be settled asap, but It would be sad to let you go.
                                    You can reach us at support@bookbyqr.com in case of queries.
                                </p>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <Divider />
                <Grid container justify="center">
                    <Button size="large" type="submit" variant="contained" className={classes.buttonStyle} style={{ marginTop: '20px' }}>
                        Delete
                    </Button>
                </Grid>
            </div>
        </>
    )
}

export default AccountsContent