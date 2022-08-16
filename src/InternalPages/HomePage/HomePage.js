import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from '../../Component/Header';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { useHistory } from 'react-router-dom';
const drawerWidth = 240;

function HomePage(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history = useHistory()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        {
            text: 'Schedules',
            icon: ScheduleOutlinedIcon,
            onClick: () => history.push("/schedules"),
        },
        {
            text: 'All Appointments',
            icon: BookOnlineOutlinedIcon,
            onClick: () => history.push("/allappointment"),
        },
        {
            text: 'QR Code',
            icon: QrCode2OutlinedIcon,
            onClick: () => history.push("/qrcode"),
        },
        {
            text: 'Reports',
            icon: ReportOutlinedIcon,
            onClick: () => history.push("/reports"),
        },
        {
            text: 'Billing Info',
            icon: AccountBalanceOutlinedIcon,
            onClick: () => history.push("/billing"),
        },
    ]
    const drawer = (
        <div>
            <Header />
            <List>
                {menuItems.map(({text, icon: Icon, onClick}, index) => (
                    <ListItem key={text} disablePadding onClick={onClick}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon fontSize='large'/>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}

            >
                <Toolbar style={{ backgroundColor: '#3834b4' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
            </Box>
        </Box>
    );
}

HomePage.propTypes = {
    window: PropTypes.func,
};

export default HomePage;
