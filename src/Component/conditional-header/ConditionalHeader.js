
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AccountCircleOutlined, EuroSymbolOutlined } from '@mui/icons-material'
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useHistory, useLocation } from 'react-router-dom'
import './conditionalHeader.css'

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
    {
        text: 'Log Out',
        icon: <LogoutOutlinedIcon/>,
        path: '/login'
    }
]

const ConditionalHeader = () => {
    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="navbar-header-nav">
                {/* <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#myNavmenu" data-canvas="body">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button> */}

                <div className='header'>
                    <div className='header-left'>
                        <Link className="navbar-brand" to="/">
                            <img src="img/svg/logo.svg" className="logo" alt="ZASTA" />
                        </Link>
                    </div>
                    <div className='button-header-wrap'>
                        <div class="dropdown">
                            <Button className='button-header resp-btn'
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={handleClick}
                                size="small"
                                endIcon={<KeyboardArrowDownIcon />
                                }
                            >
                                Accounts
                            </Button>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <List style={{ fontFamily: "'Nunito', sans-serif"}}>
                                    {menuItems.map(item => (
                                        <ListItem
                                            key={item.text}
                                            button
                                            onClick={() => history.push(item.path)}
                                        >
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                                {/* <Link className='dropdown-header-list' to="/allappointment">
                                    <MenuItem onClick={handleClose} disableRipple className='menu-font'>
                                        View all Appointments
                                    </MenuItem>
                                </Link>
                                <Link className='dropdown-header-list' to="/schedules">
                                    <MenuItem onClick={handleClose} disableRipple className='menu-font'>
                                        My Schedules
                                    </MenuItem>
                                </Link>
                                <Link className='dropdown-header-list' to="/profile">
                                    <MenuItem onClick={handleClose} disableRipple className='menu-font'>
                                        Account Info
                                    </MenuItem>
                                </Link>
                                <Link className='dropdown-header-list' to="/billing">
                                    <MenuItem onClick={handleClose} disableRipple className='menu-font'>
                                        Billing Info
                                    </MenuItem>
                                </Link>
                                <Link className='dropdown-header-list' to="/qrcode">
                                    <MenuItem onClick={handleClose} disableRipple className='menu-font'>
                                        QR Code
                                    </MenuItem>
                                </Link>
                                <Link className='dropdown-header-list' to="/reports">
                                    <MenuItem onClick={handleClose} disableRipple className='menu-font'>
                                        Reports
                                    </MenuItem>
                                </Link> */}
                            </StyledMenu>
                        </div>
                    </div>
                </div>

                {/* Mobile menu starts*/}
                <nav id="myNavmenu" className="navmenu navmenu-default navmenu-fixed-left offcanvas" role="navigation" style={{}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#myNavmenu" data-canvas="body">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src="img/svg/logo.svg" className="logo" alt="ZASTA" />
                        </a>
                    </div>
                    <span className="telephone hidden">
                        <img src="img/combined-shape.png" srcSet="img/combined-shape@2x.png 2x, img/combined-shape@3x.png 3x" className="Combined-Shape" alt="phone" />
                        <a onclick="captureOutboundLink('tel:+498006020500'); return false;" href="tel:+498006020500"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>0800 6020 500</font></font></a>
                    </span>
                    <div className="links first">
                        {/* <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>resources</font></font></span> */}
                        <ul>
                            {/* <li><a href="#pricing"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Pricing</font></font></a></li>
                            <li><a href="#features"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Features</font></font></a></li>
                            <li><a href="#aboutus"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>About Us</font></font></a></li>
                            <li><a href="#contactus"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Contact Us</font></font></a></li> */}
                        </ul>
                    </div>
                    {/* <div className="links">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>For tax consultants</font></font></span>
                        <ul>
                            <li><a href="/partner.html"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>become a partner</font></font></a></li>
                        </ul>
                    </div> */}
                    <div className="links media-social">
                        <span className="title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Social media</font></font></span>
                        <a href="https://www.instagram.com/abysagar1/" onclick="captureOutboundLink('https://www.instagram.com/abysagar1/'); return false;" target="_blank"><i className="fa fa-instagram media-image social-media" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/bookbyqr/" onclick="captureOutboundLink('https://www.facebook.com/bookbyqr/'); return false;" target="_blank"><i className="fa fa-facebook-official media-image social-media-3" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/aby-sagar-699659125/" onclick="captureOutboundLink('https://www.linkedin.com/in/aby-sagar-699659125/'); return false;" target="_blank"><i className="fa fa-linkedin media-image social-media-1" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/abysagar1" onclick="captureOutboundLink('https://twitter.com/abysagar1'); return false;" target="_blank"><i className="fa fa-twitter media-image social-media-1" aria-hidden="true"></i></a>
                    </div>
                    <span className="copyright-info"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Note: We do not offer tax advice. </font><font style={{ verticalAlign: 'inherit' }}>zasta.de is a platform on which your tax return is created by independent tax consultants.</font></font></span>
                </nav>
                {/* mobile menu ends */}
            </div>
        </>
    )
};

export default ConditionalHeader;
