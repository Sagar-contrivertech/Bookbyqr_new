import { AppBar, Box, Button, Chip, FormControl, Grid, InputLabel, makeStyles, MenuItem, OutlinedInput, Paper, Select, styled, TextField, Toolbar, Typography, useTheme } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
        },
        static: {
            flexGrow: '1',
            backgroundColor: 'white',
            border: '2px solid #3834b4'
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: 'black'
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            textAlign: 'center',
            alignItems: 'center',
            marginTop: '20px'
        }
    }
})

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
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const AddScheduleContent = () => {
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
    const classes = useStyles();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <Paper className={classes.root}>
                <AppBar position="static" className={classes.static}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Add Schedules
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Paper>
            <form action="">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8} md={10} lg={12}>
                        <TextField id="outlined-basic"
                            onChange={(e) => { setTitle(e.target.value) }} name="title"
                            value={title} className='schedule-field' label="Title" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField id="start_time"
                            onChange={(e) => { setStartTime(e.target.value) }}
                            value={start_time} type="time" label="Start Time" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField id="end_time"
                            onChange={(e) => { setEndTime(e.target.value) }} name="end_time"
                            value={end_time} type="time" className='schedule-field' label="End Time" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={slot}
                                name="slot"
                                input={<OutlinedInput label="Slot" />}
                                onChange={(e) => { setSlot(e.target.value) }}
                            >
                                <MenuItem value={10} style={{ fontSize: '15px' }}>10 min</MenuItem>
                                <MenuItem value={20} style={{ fontSize: '15px' }}>20 min</MenuItem>
                                <MenuItem value={30} style={{ fontSize: '15px' }}>30 min</MenuItem>
                                <MenuItem value={30} style={{ fontSize: '15px' }}>1 hour</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField id="outlined-basic"
                            onChange={(e) => { setSeats(e.target.value) }} name="seats"
                            value={seats} className='schedule-field' type="number" label="Total Seats" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField id="outlined-basic"
                            onChange={(e) => { setStartDate(e.target.value) }} name="start_date"
                            type="date" value={start_date} className='schedule-field' label="From" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField id="outlined-basic" type="date"
                            onChange={(e) => { setEndDate(e.target.value) }}
                            name="end_date"
                            value={end_date} className='schedule-field' label="To" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={8} md={10} lg={12}>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value}
                                                style={{ fontSize: '15px', top: '500px' }} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={{ fontSize: '15px' }}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Button size="large" type="submit" variant="contained" className={classes.buttonStyle}>
                        Submit
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default AddScheduleContent