import { Button, Grid, TextField, Paper, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
        },
        static: {
            flexGrow: '1',
            backgroundColor: 'white',
            border: '2px solid #3834b4',
            fontFamily: "'Nunito', sans-serif"
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '800',
            margin: '20px'
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
    }
})

const ReportsContentPage = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <AppBar position="static" className={classes.static}>
                    <Toolbar>
                        {/* <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => getWorkerList("ALL")}
                        >
                            <AttachMoneySharp />
                        </IconButton> */}
                        <Typography className={classes.title} variant="h6" noWrap>
                            Reports
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Paper>
            <div class="head-wrap">
                    <h2 class="center-txt-reports">Reports</h2>
                </div>
            <Grid container spacing={5} >
                <Grid container item spacing={1} xs={12} lg={6}>
                    <div className="head-box">Recharge Summary</div>
                    <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue="2017-05-24"
                        // sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue="2017-05-24"
                        // sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Grid container justify='center'>
                        <Button className={classes.buttonStyle} variant='contained' >Mail</Button>
                    </Grid>
                </Grid>
                <Grid container item spacing={1} xs={12} lg={6}>
                    <div className="head-box">Booking Summary</div>
                    <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue="2017-05-24"
                        // sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue="2017-05-24"
                        // sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Grid container justify='center'>
                        <Button className={classes.buttonStyle} variant='contained' >Mail</Button>
                    </Grid>
                </Grid>
            </Grid>
            {/* <div className='box-wrap' style={{ marginTop: '20px' }}>
                
                <div className="box-iner-wrap">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12 col-md-6 col-lg-6" >
                            <div className="head-box">Recharge Summary</div>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Grid container justify='center'>
                                <Button className={classes.buttonStyle} variant='contained' >Mail</Button>
                            </Grid>
                        </div>
                        <div className="col-sm-6 col-xs-12 col-md-6 col-lg-6 ">
                            <div className="head-box">Booking Summary</div>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                defaultValue="2017-05-24"
                                // sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Grid container justify='center'>
                                <Button className={classes.buttonStyle} variant='contained' >Mail</Button>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ReportsContentPage