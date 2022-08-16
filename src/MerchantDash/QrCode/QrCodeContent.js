import { Grid, Paper, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import "./qrcode.css"

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

const QrCodeContent = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <AppBar position="static" className={classes.static}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            QR Code
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Paper>
            <div className='container heading'>
                <h2>Your shareable QR Code</h2>
                <hr className='hr' />
            </div>
            <div _ngcontent-serverapp-c139 className="qr-card">
                <div _ngcontent-serverapp-c139 className="card-body">
                    <div _ngcontent-serverapp-c139 id="toDownload" className="qr-block">
                        <Grid container justify="center">
                            <div _ngcontent-serverapp-c139 className="text-center print-qa-css">
                                <p _ngcontent-serverapp-c139 className="Barber-express"> Contriver Tech </p>
                                <div _ngcontent-serverapp-c139 className="text-center">
                                    <span _ngcontent-serverapp-c139 className="print-border" />
                                </div>
                                <p _ngcontent-serverapp-c139 className="thank-you-psg mb-0"> To make a appointment <br _ngcontent-serverapp-c139 /> Please Scan the QR Code </p><div _ngcontent-serverapp-c139 className="qrcode">
                                    <img _ngcontent-serverapp-c139 width={256} height={256} className="my-2" src="https://bookbyqr.com/api/book-by-qr/storage/app/qr_code/uJYHAB6mYxnMx2bSharableCode124.png" /></div><p _ngcontent-serverapp-c139 className="thank-you-psg"> By Scanning the QR, you accept terms of service available at the Merchant </p>
                                <p _ngcontent-serverapp-c139>
                                    <b _ngcontent-serverapp-c139>
                                        <a _ngcontent-serverapp-c139 target="_blank" className="qr_link" href="https://bookbyqr.com/in/rRZ183">https://bookbyqr.com/in/rRZ183</a></b></p>
                                <p _ngcontent-serverapp-c139 className="thank-you-psg"> Powered By <br _ngcontent-serverapp-c139 />
                                    <img _ngcontent-serverapp-c139 src="https://bookbyqr.com/assets/image/current-logo-new1.png" className="powered_by" />
                                </p>
                            </div>
                        </Grid>
                    </div>
                    <div _ngcontent-serverapp-c139 className="qr-btns btn-row d-flex align-items-center flex-wrap justify-content-center">
                        <button _ngcontent-serverapp-c139 type="button" className="btn btn-primary">Share</button>
                        <button _ngcontent-serverapp-c139 type="button" className="btn btn-primary">Save</button>
                        <button _ngcontent-serverapp-c139 type="button" className="btn btn-primary">Print</button>{/**/}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default QrCodeContent