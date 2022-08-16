import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import "./qrcode.css"
import ConditionalHeader from '../../Component/conditional-header/ConditionalHeader';

const Qrcode = () => {
    return (
        <>
            <ConditionalHeader />
            <div>
                <div className='container heading'>
                    <h2>Your shareable QR Code</h2>
                    <hr className='hr' />
                </div>
                <div _ngcontent-serverapp-c139 className="qr-card">
                    <div _ngcontent-serverapp-c139 className="card-body">
                        <div _ngcontent-serverapp-c139 id="toDownload" className="qr-block text-center">
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
                                </p></div></div>
                        <div _ngcontent-serverapp-c139 className="qr-btns btn-row d-flex align-items-center flex-wrap justify-content-center">
                            <button _ngcontent-serverapp-c139 type="button" className="btn btn-primary">Share</button>
                            <button _ngcontent-serverapp-c139 type="button" className="btn btn-primary">Save</button>
                            <button _ngcontent-serverapp-c139 type="button" className="btn btn-primary">Print</button>{/**/}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Qrcode;
