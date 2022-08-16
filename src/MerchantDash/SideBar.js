import { AppBar, Button, ClickAwayListener, CssBaseline, Drawer, Grow, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, MenuItem, MenuList, Paper, Popper, Toolbar, Typography, useTheme } from '@material-ui/core'
import { AccountCircleOutlined, EuroSymbolOutlined } from '@mui/icons-material'
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Footer from '../Component/Footer';
import logo from '../logo.svg'
import './SideBar.css'
const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        pages: {
            width: '100%',
            padding: theme.spacing(3),
        },
        root: {
            display: 'flex'
        },
        toolbar: theme.mixins.toolbar,
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
            color: 'black'
        },
        drawerPaper: {
            width: drawerWidth,
        },

        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(3)
        },
        appbar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,

            },
            backgroundColor: '#3834b4'
        },
        adminBar: {
            flexGrow: 1
        },
        adminLogo: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            borderRadius: '8px'
        },
        imaged: {
            marginLeft: '20px',
            width: '38px',
            height: '39px'
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
            color: 'white'
        },
        navbarHeaderNav: {
            padding: '10px',
            backgroundColor: '#3834b4',
            margin: '0px 0 50px',
            height: '65px'
        },
        navbarBrand: {
            height: '45px',
        },
        logo: {
            marginTop: '-10px',
            height: '70px'
        },
        buttonStyle: {
            backgroundColor: '#E7ca15',
            color: '#3834b4',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '800'
        }
    }
})

const SideBar = (props) => {
    const { window } = props
    const classes = useStyles()
    const history = useHistory()
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const location = useLocation()

    const menuItems = [
        {
            text: 'Schedules',
            icon: <ScheduleOutlinedIcon />,
            path: '/merchant/schedules'
        },
        {
            text: 'All Appointments',
            icon: <BookOnlineOutlinedIcon />,
            path: '/merchant/appointments'
        },
        {
            text: 'QR Code',
            icon: <QrCode2OutlinedIcon />,
            path: '/merchant/qrcode'
        },
        {
            text: 'Reports',
            icon: <ReportOutlinedIcon />,
            path: '/merchant/reports'
        },
        {
            text: 'Billing Info',
            icon: <EuroSymbolOutlined />,
            path: '/merchant/billing'
        },
        {
            text: 'Account Info',
            icon: <AccountCircleOutlined />,
            path: '/merchant/accounts'
        },
    ]

    const drawer = (
        <div>
            <div className={classes.navbarHeaderNav}>
                {/* <div className={classes.header}> */}
                <Link className={classes.navbarBrand} to="/">
                    <img src={logo} className={classes.logo} alt="BookByQR" />
                </Link>
                {/* </div> */}
            </div>
            <List style={{ fontFamily: "'Nunito', sans-serif" }}>
                {menuItems.map(item => (
                    <ListItem
                        key={item.text}
                        button
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar className={classes.appbar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.adminBar}></Typography>
                        <Typography className={classes.adminLogo}>
                            <div>
                                <Button className={classes.buttonStyle}
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                >
                                    Account
                                </Button>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        <Link to='/login' style={{textDecoration: 'none', color: 'black'}}>
                                                            <MenuItem>Sign In</MenuItem>
                                                        </Link>
                                                        <MenuItem>Logout</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div >
        </>
    )
}

export default SideBar