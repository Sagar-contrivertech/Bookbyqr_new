import { AppBar, Box, Button, Grid, makeStyles, Paper, Tab, Tabs, Toolbar, Typography, useTheme } from '@material-ui/core';
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import FolderIcon from '@mui/icons-material/Folder';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
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
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4'
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

const ariaLabel = { 'aria-label': 'description' };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    display: 'flex',
    alignItems: 'center',
    justifContent: 'center',
    flexDirection: 'column',
    p: 4,
};


function generate(element) {
    return [1, 4, 2, 5, 6, 7, 8, 12].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}
const AllAppointmentsPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    const classes = useStyles()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <>
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
                            All Appoinments
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Paper>
            <Grid container justify='center'>
                <Box sx={{ bgcolor: 'background.paper', width: 900, marginTop: 50 }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="All Appointments" {...a11yProps(0)} />
                            <Tab label="Past Appointments" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className="sortlist" style={{border: '2px solid black', borderRadius: '10px'}}>
                                <FormControl sx={{ m: 1, minWidth: 80 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Evening Schedule Appointments</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={age}
                                        onChange={handleChangeAge}
                                        autoWidth
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Twenty</MenuItem>
                                        <MenuItem value={21}>Twenty one</MenuItem>
                                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                                    </Select>
                                </FormControl>
                                <List dense={dense}>
                                    {generate(
                                        <ListItem onClick={handleOpen} className='listItem'
                                            secondaryAction={
                                                <Typography variant="body1" gutterBottom className='center'>
                                                    <p className='time'>3:30pm</p>
                                                    <span className='date'>22/08/20</span>
                                                </Typography>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="John Doe"
                                                secondary='+91 9920092900'
                                            />

                                        </ListItem>,
                                        <Divider />
                                    )}
                                </List>
                                {/* modal on click  */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h3" component="h2">
                                            Book an Appoinment
                                        </Typography>
                                        <Input placeholder="Enter Customer Name" className="mod_inp" inputProps={ariaLabel} fullWidth />
                                        <Input placeholder="Enter Customer Email" className="mod_inp" inputProps={ariaLabel} fullWidth />
                                        <Input placeholder="Enter Customer Number" className="mod_inp" inputProps={ariaLabel} fullWidth />

                                        <button class="button-header mod_btn">Submit</button>
                                    </Box>
                                </Modal>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className="sortlist" style={{border: '2px solid black', borderRadius: '10px'}}>
                                <FormControl sx={{ m: 1, minWidth: 80 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Evening Schedule Appointments</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={age}
                                        onChange={handleChangeAge}
                                        autoWidth
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Twenty</MenuItem>
                                        <MenuItem value={21}>Twenty one</MenuItem>
                                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                                    </Select>
                                </FormControl>

                                <List dense={dense}>
                                    {generate(
                                        <ListItem onClick={handleOpen} className='listItem'
                                            secondaryAction={
                                                <Typography variant="body1" gutterBottom className='center'>
                                                    <p className='time'>3:30pm</p>
                                                    <span className='date'>22/08/20</span>
                                                </Typography>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Sonam jha"
                                                secondary='+91 9920092900'
                                            />

                                        </ListItem>,
                                        <Divider />
                                    )}
                                </List>
                                {/* modal on click  */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h3" component="h2">
                                            Book an Appoinment
                                        </Typography>
                                        <Input placeholder="Enter Customer Name" className="mod_inp" inputProps={ariaLabel} fullWidth />
                                        <Input placeholder="Enter Customer Email" className="mod_inp" inputProps={ariaLabel} fullWidth />
                                        <Input placeholder="Enter Customer Number" className="mod_inp" inputProps={ariaLabel} fullWidth />

                                        <button class="button-header mod_btn">Submit</button>
                                    </Box>
                                </Modal>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </Grid>

        </>
    )
}

export default AllAppointmentsPage