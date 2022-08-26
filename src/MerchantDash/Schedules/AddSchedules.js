import { Grid, makeStyles, useTheme } from '@material-ui/core'
import React from 'react'
// import SideBar from '../SideBar'
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader'
import AddScheduleContent from './AddScheduleContent'
import SchedulesPage from './Schedules'

const useStyles = makeStyles((theme) => {
    return {
        pages: {
            width: '100%',
            padding: theme.spacing(3)
        },
        root: {
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center'
        },
        toolbar: theme.mixins.toolbar,
    }

})

const AddSchedules = () => {
    const classes = useStyles()
    const theme = useTheme();
    return (
        <>
            <ConditionalHeader />
            <div className={classes.root}>
                {/* <Grid>
                    <SideBar />
                </Grid> */}
                <Grid item sm={9} xs={12}>
                    <div className={classes.pages}>
                        <div className={classes.toolbar}></div>
                        <AddScheduleContent />
                    </div>
                </Grid>
            </div>
        </>

    )
}

export default AddSchedules