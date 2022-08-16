import { Grid, makeStyles, useTheme } from '@material-ui/core'
import React from 'react'
import SideBar from '../SideBar'
import QrCodeContent from './QrCodeContent'


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

const QrCode = () => {
    const classes = useStyles()
    const theme = useTheme();
    return (
        <>
            <div className={classes.root}>
                <Grid>
                    <SideBar />
                </Grid>
                <Grid item sm={9} xs={12}>
                    <div className={classes.pages}>
                        <div className={classes.toolbar}></div>
                        <QrCodeContent />
                    </div>
                </Grid>
            </div>
        </>
    )
}

export default QrCode