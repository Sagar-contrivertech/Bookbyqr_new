import { AppBar, Box, Button, Grid, makeStyles, Paper, Tab, Tabs, Toolbar, Typography, useTheme } from '@material-ui/core';
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

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
            border: '2px solid #3834b4',
            fontFamily: "'Nunito', sans-serif"
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '800'
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
const BillingContent = () => {
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
                        <Typography className={classes.title} variant="h6" noWrap>
                            Billing Info
                        </Typography>
                        <Button className={classes.buttonStyle}>
                            Recharge
                        </Button>
                    </Toolbar>
                </AppBar>
            </Paper>
            <Grid container justify='center'>
                <Box sx={{ bgcolor: 'background.paper', width: 500, marginTop: 50 }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Credit Used" {...a11yProps(0)} />
                            <Tab label="Credit Balance" {...a11yProps(1)} />
                            <Tab label="Credit Total" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            100
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            200
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            500
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </Grid>
        </>
    )
}

export default BillingContent