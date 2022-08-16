import { AppBar, Button, Grid, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
        },
        container: {
            fontFamily: "'Nunito', sans-serif",
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
            fontFamily: "'Nunito', sans-serif"
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
            color: 'black',
            fontFamily: "'Nunito', sans-serif"
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
            overflowX: 'auto',
            fontFamily: "'Nunito', sans-serif"
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '800'
        },
        centerButton:{
            justifyContent: 'center'
        }
    }
});

const length = [
    { title: 'event1', slot: 2, from: '22/07/2022', to: '22/07/2022' },
    { title: 'schedule1', slot: 1, from: '25/07/2022', to: '26/07/2022' },
    { title: 'test', slot: 2, from: '21/07/2022', to: '22/07/2022' },
    { title: 'event2', slot: 4, from: '27/07/2022', to: '27/07/2022' },
    { title: 'abc', slot: 2, from: '29/07/2022', to: '29/07/2022' },
]

const SchedulesTable = () => {
    const classes = useStyles();
    const history = useHistory()
    const AddItem = (e, item) => {
        history.push('/add/schedules')
    }

    return (
        <>
            <Paper className={classes.root}>
                <AppBar position="static" className={classes.static}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            My Schedules
                        </Typography>
                        <Button className={classes.buttonStyle} onClick={(e) => AddItem(e)}>
                            Add Schedules
                        </Button>
                    </Toolbar>
                </AppBar>
            </Paper>
            <Grid container spacing={1} >
                <Grid container item spacing={1}  xs={4} lg={4}>
                    <Card sx={{ maxWidth: 300 }} style={{ marginTop: '50px', borderRadius: '20px', width: '300px', height: '90%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Title : Event 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Slot: 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Seat: 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From: 22/07/2022
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To: 22/07/2022
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.centerButton}>
                            <Button className={classes.buttonStyle}>View</Button>
                            <Button className={classes.buttonStyle}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container item spacing={1} xs={4} lg={4}>
                    <Card sx={{ maxWidth: 300 }} style={{ marginTop: '50px', borderRadius: '20px', width: '300px', height: '90%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Title : Event 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Slot: 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Seat: 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From: 22/07/2022
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To: 22/07/2022
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.centerButton}>
                            <Button className={classes.buttonStyle}>View</Button>
                            <Button className={classes.buttonStyle}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container item spacing={1} xs={4} lg={4}>
                    <Card sx={{ maxWidth: 300 }} style={{ marginTop: '50px', borderRadius: '20px', width: '300px', height: '90%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Title : Event 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Slot: 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Seat: 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From: 22/07/2022
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To: 22/07/2022
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.centerButton}>
                            <Button className={classes.buttonStyle}>View</Button>
                            <Button className={classes.buttonStyle}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={1} >
                <Grid container item spacing={1}  xs={4} lg={4}>
                    <Card sx={{ maxWidth: 300 }} style={{ marginTop: '50px', borderRadius: '20px', width: '300px', height: '90%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Title : Event 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Slot: 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Seat: 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From: 22/07/2022
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To: 22/07/2022
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.centerButton}>
                            <Button className={classes.buttonStyle}>View</Button>
                            <Button className={classes.buttonStyle}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container item spacing={1} xs={4} lg={4}>
                    <Card sx={{ maxWidth: 300 }} style={{ marginTop: '50px', borderRadius: '20px', width: '300px', height: '90%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Title : Event 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Slot: 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Seat: 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From: 22/07/2022
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To: 22/07/2022
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.centerButton}>
                            <Button className={classes.buttonStyle}>View</Button>
                            <Button className={classes.buttonStyle}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container item spacing={1} xs={4} lg={4}>
                    <Card sx={{ maxWidth: 300 }} style={{ marginTop: '50px', borderRadius: '20px', width: '300px', height: '90%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Title : Event 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Slot: 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Seat: 4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From: 22/07/2022
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To: 22/07/2022
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.centerButton}>
                            <Button className={classes.buttonStyle}>View</Button>
                            <Button className={classes.buttonStyle}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default SchedulesTable