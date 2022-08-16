import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import './Privacy.css'

export default function Refund() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const boxStyle = {
        backgroundColor: "#f5f7f9",
        border: "solid 1px #d1dae3",
        marginTop: "52px"
    }

    return <div>
        <Header />
        <div className="container">
            <h2>Our Refunds Policy.</h2>
            <div className="text privacy-wrap" style={boxStyle}>
                <p><strong>Simple and easy as it can be.</strong></p>
                <p><span>We want you to be happy with everything you buy from with BookbyQR.com . If for any reason you are not satisfied with our services we offer a very easy refund policy.&nbsp;</span></p>
                <ol>
                    <li aria-level="1"><span>We aim for a 100% satisfaction of our customers.&nbsp;</span></li>
                    <li aria-level="1"><strong>All</strong><span> unused credits are refunded back.&nbsp;</span></li>
                    <li aria-level="1"><span>We refund generously up to 6 months of the purchase.&nbsp;</span></li>
                    <li aria-level="1"><span>The credits you buy first, get consumed first (pro-rated unused balance).&nbsp;</span></li>
                    <li aria-level="1"><span>Refunds are processed in 14 working days.&nbsp;</span></li>
                    <li aria-level="1"><span>Refunds processed in the same mode of transaction that was used for payments.&nbsp;</span></li>
                    <li aria-level="1"><span>Refunds can only be processed for payments acknowledged by our systems.&nbsp;</span></li>
                    <li aria-level="1"><span>There is no minimum amount for the refunds. You can request refunds for even 1 credit.&nbsp;</span></li>
                    <li aria-level="1"><span>Please understand some Taxes may not be refundable.&nbsp;</span></li>
                    <li aria-level="1"><span>Please note credits towards discounts, promotions, gifts etc, which are not paid are not refunded.&nbsp;</span></li>
                    <li aria-level="1"><span>There is no minimum time limit for the refunds, you can make a payment and raise a refund request as immediately your payments are acknowledged by us.&nbsp;</span></li>
                    <li aria-level="1"><span>We have no control over the costs levied by payment gateways, banks and other systems, that may lead in lower refunds that you might expect.&nbsp;</span></li>
                    <li aria-level="1"><span>No refund will be possible if your account is suspended or terminated for a cause.</span></li>
                    <li aria-level="1"><span>To request a refund, please drop a mail to </span><a href="mailto:refunds@bookbyqr.com"><span>refunds@bookbyqr.com</span></a><span> .</span></li>
                    <li aria-level="1"><span>If you have questions regarding our refunds policy or other concerns, please reach us at </span><a href="mailto:support@bookbyqr.com"><span>support@bookbyqr.com</span></a></li>
                </ol>
            </div>
        </div>
        <Footer />
    </div>
}

{/* <Footer /> */ }
