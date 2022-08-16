import { Box } from '@mui/material'
import React from 'react'
import './Appointment.css'
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import Footer from '../../Component/Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'15px',
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

export default function Appointment() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <ConditionalHeader />

            {/* box */}
            <div className="sortlist">
                <Typography variant="h3" gutterBottom className='m-auto'>
                    All Appointments
                </Typography>

                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Evening Schedule Appointments</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
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
                        <Input placeholder="Enter Customer Name" className="mod_inp" inputProps={ariaLabel} fullWidth/>
                        <Input placeholder="Enter Customer Email" className="mod_inp" inputProps={ariaLabel} fullWidth/>
                        <Input placeholder="Enter Customer Number" className="mod_inp" inputProps={ariaLabel} fullWidth/>

                        <button class="button-header mod_btn">Submit</button>
                    </Box>
                </Modal>
                {/* modal on click  */}

            </div>

            <Footer />
        </div>
    )
}
