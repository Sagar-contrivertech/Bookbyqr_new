import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import './Privacy.css'

export default function Termsofuse() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const boxStyle = {
        backgroundColor: "#f5f7f9",
        border: "solid 1px #d1dae3",
        marginTop: "52px"
    }

    return <div>
        <Header/>
        <div className="container">
            <h2>Terms & Conditions</h2>
            <div className="text privacy-wrap" style={boxStyle}>
                <div className="privacy-inner-wrap">
                    <ol >
                        <li><strong> </strong><strong>Introduction</strong></li>
                    </ol>
                    <p>Welcome to&nbsp;<strong>BOOKBYQR</strong>&nbsp;(“<strong>Company</strong>”, “<strong>we</strong>”, “<strong>our</strong>”, “<strong>us</strong>”)! As you have just clicked our Terms of Service, please pause, grab a cup of Tea and carefully read the following pages. It may take you approximately 20&nbsp;minutes.</p>
                    <p>These Terms of Service (“<strong>Terms</strong>”, “<strong>Terms of Service</strong>”) govern your use of&nbsp;our Company services, or documents or web pages located at www.bookbyqr.com and our mobile application&nbsp;BOOKBYQR (together or individually “<strong>Service</strong>”)&nbsp;operated by&nbsp;BOOKBYQR.</p>
                    <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our services. Please read it here www.bookbyqr.com/policies/global-privacy-policy.html.</p>
                    <p>Your agreement with us includes these Terms&nbsp;and our Privacy Policy&nbsp;(“<strong>Agreements</strong>”). You acknowledge that you have read and understood Agreements, and agree to be bound of them when you proceed further with us.</p>
                    <p>If you do not agree with (or cannot comply with) Agreements, then you may not use theService, but please let us know by emailing at <a href="mailto:support@bookbyqr.com">support@bookbyqr.com</a>so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
                    <p>Thank you for being responsible and supportive.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="2">
                        <li><strong> </strong><strong>Communications</strong></li>
                    </ol>
                    <p>By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by dropping us an email or clicking the unsubscribe link where available in our communications.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="3">
                        <li><strong> </strong><strong>Purchases</strong></li>
                    </ol>
                    <p>If you wish to purchase any product or service made available through Service (“<strong>Purchase</strong>”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your name, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
                    <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
                    <p>We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties&nbsp;subject to our Privacy Policy.</p>
                    <p>We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p>
                    <p>We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="4">
                        <li><strong> </strong><strong>Prepaid payments and Subscriptions</strong></li>
                    </ol>
                    <p>Some of our services are available on pre-paid payment basis, you would be billed in advance to be able to use our services. Upon exhausting the pre-paid balances, you could again make the advance payments and have positive balances. We reserve the right to discontinue and stop certain or all services in case of no positive balance is available in your account. The policies and terms are applicable as at the time of these pre-paid payments, and by making payments you agree to the terms and conditions as applicable on the date of payment.</p>
                    <p>Also, some parts of Service are billed on a regular subscription basis (“<strong>Subscription(s)</strong>”). You may choose to be billed in advance on a recurring and periodic basis (“<strong>Billing Cycle</strong>”). Billing cycles are set&nbsp;either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.</p>
                    <p>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or&nbsp;BOOKBYQR&nbsp;cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting&nbsp;BOOKBYQR&nbsp;customer support team.</p>
                    <p>A valid payment method, including&nbsp;credit card or PayPal or from similar providers, is required to process the payment for your subscription. You shall provide&nbsp;BOOKBYQR&nbsp;with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize&nbsp;BOOKBYQR&nbsp;to charge all Subscription fees incurred through your account to any such payment instruments.</p>
                    <p>Should automatic billing fail to occur for any reason,&nbsp;BOOKBYQR&nbsp;will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="5">
                        <li><strong> </strong><strong>Free Forever plans</strong></li>
                    </ol>
                    <p>For some of the customers, some of the times, BOOKBYQR&nbsp;may, at its sole discretion, may offer a Subscription with a “<strong>Free-Forever</strong>” for a limited period of time with certain limitations. The current duration where Free-Forever plans can be used by a registered user is up to a maximum of 90 days from the initial signup.</p>
                    <p>You may <strong>not </strong>be required to enter your billing information in order to sign up for forever free plans.</p>
                    <p>Please note, the Free-Forever plans come without any warranties, claims, support and are provided as on a best effort basis to a very limited number of customers on a resource availability basis to be able to evaluate and understand our products or services. These plans may be discontinued at any time (even within 90 days from initial signup) with or without any prior information or notices.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="6">
                        <li><strong> </strong><strong>Free Trial</strong></li>
                    </ol>
                    <p>For some of the customers, some of the time, BOOKBYQR may, at its sole discretion, may offer a Subscription with a free trial for a limited period of time (“<strong>Free Trial</strong>”) with certain limitations.</p>
                    <p>You may be required to enter your billing information in order to sign up for Free Trial.</p>
                    <p>If you do enter your billing information when signing up for Free Trial, you will not be charged by&nbsp;BOOKBYQR&nbsp;until Free Trial has expired. On the last day of Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.</p>
                    <p>At any time and without notice,&nbsp;BOOKBYQR&nbsp;reserves the right to (i) modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial offer.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="7">
                        <li><strong> </strong><strong>Fee Changes</strong></li>
                    </ol>
                    <p>BOOKBYQR, in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p>
                    <p>BOOKBYQR will provide you with reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</p>
                    <p>Your continued use of Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="8">
                        <li><strong> </strong><strong>Cancellation and Refunds</strong></li>
                    </ol>
                    <p>We strive to provide the best possible services continuously to all our customers, but we are humbled to admit that at certain times we may not be able to cater to your individual expectations and in those times if you wish to discontinue we request you to confirm your cancellation of our services by writing to us and getting confirmation about it.</p>
                    <p>Upon cancellation confirmation of our services, your subscription renewals if any would be discontinued on immediate basis.</p>
                    <p>In case of pre-paid accounts with a positive balances, your unused positive balances would be refunded back to you within 15 business days with the same means of payments as that of which the payments were received with. We may be not be responsible for additional charges your banks , payment gateways or other third party facilitators that may be deducted on these refunds. We are sorry about this, but this is external and out of our controls.</p>
                    <p>You could also choose to reach out to us through email in case you wish to delete, terminate , deactivate or permanently close your account with us after the cancellation the your accounts with us. Upon receipt of such requests, we within 60 business days, shall permanentlydelete all information about the account.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="9">
                        <li><strong> </strong><strong>Content</strong></li>
                    </ol>
                    <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“<strong>Content</strong>”). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.</p>
                    <p>By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
                    <p>You retain any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. However, by posting Content using Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through Service. You agree that this license includes the right for us to make your Content available to other users of Service, who may also use your Content subject to these Terms.</p>
                    <p>BOOKBYQR&nbsp;has the right but not the obligation to monitor and edit all Content provided by users.</p>
                    <p>In addition, Content found on or through this Service are the property of&nbsp;BOOKBYQR&nbsp;or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="10">
                        <li><strong> </strong><strong>Prohibited Uses</strong></li>
                    </ol>
                    <p>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
                    <ul>
                        <li>In any way that violates any applicable national or international law or regulation.</li>
                        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.</li>
                        <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                        <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                        <li>To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</li>
                    </ul>
                    <p>Additionally, you agree not to:</p>
                    <ul>
                        <li>Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.</li>
                        <li>Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</li>
                        <li>Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.</li>
                        <li>Use any device, software, or routine that interferes with the proper working of Service.</li>
                        <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
                        <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</li>
                        <li>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
                        <li>Take any action that may damage or falsify Company rating.</li>
                        <li>Otherwise attempt to interfere with the proper working of Service.</li>
                    </ul>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="11">
                        <li><strong> </strong><strong>Analytics</strong></li>
                    </ol>
                    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                    <p><strong>Google Analytics</strong></p>
                    <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
                    <p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
                    <p>We also encourage you to review the Google's policy for safeguarding your data: <a href="https://support.google.com/analytics/answer/6004245">https://support.google.com/analytics/answer/6004245</a>.</p>
                    <p><strong>Cloudflare analytics</strong></p>
                    <p>Cloudflare analytics is a web analytics service operated by Cloudflare Inc. Read the Privacy Policy here: <a href="https://www.cloudflare.com/privacypolicy/">https://www.cloudflare.com/privacypolicy/</a></p>
                    <p><strong>Azure DevOps</strong></p>
                    <p>Azure DevOps&nbsp;is a Software as a service (SaaS) platform from Microsoft that provides an end-to-end&nbsp;DevOps&nbsp;toolchain for developing and deploying software.</p>
                    <p>You can find Microsoft Privacy Statement here: <a href="https://privacy.microsoft.com/en-gb/privacystatement" target="_blank" rel="noopener">https://privacy.microsoft.com/en-gb/privacystatement</a></p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="12">
                        <li><strong> </strong><strong>No Use By Minors</strong></li>
                    </ol>
                    <p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="13">
                        <li><strong> </strong><strong>Accounts</strong></li>
                    </ol>
                    <p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.</p>
                    <p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                    <p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p>
                    <p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="14">
                        <li><strong> </strong><strong>Intellectual Property</strong></li>
                    </ol>
                    <p>Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of&nbsp;BOOKBYQR&nbsp;and its licensors. Service is protected by copyright, trademark, and other laws of&nbsp;the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of&nbsp;BOOKBYQR.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="15">
                        <li><strong> </strong><strong>Copyright Policy</strong></li>
                    </ol>
                    <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“<strong>Infringement</strong>”) of any person or entity.</p>
                    <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to&nbsp;<a href="mailto:copyrights@bookbyqr.com">copyrights@bookbyqr.com</a>, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”</p>
                    <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>
                    <p>&nbsp;</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="16">
                        <li><strong> </strong><strong>DMCA Notice and Procedure for Copyright Infringement Claims</strong></li>
                    </ol>
                    <p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
                    <ul>
                        <li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest;</li>
                        <li>a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</li>
                        <li>identification of the URL or other specific location on Service where the material that you claim is infringing is located;</li>
                        <li>your address, telephone number, and email address;</li>
                        <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                        <li>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                    </ul>
                    <p>You can contact our Copyright Agent via email at&nbsp;<a href="mailto:copyrights@bookbyqr.com">copyrights@bookbyqr.com</a></p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="17">
                        <li><strong> </strong><strong>Error Reporting and Feedback</strong></li>
                    </ol>
                    <p>You may provide us&nbsp;either directly at support@bookbyqr.com or via third party sites and tools&nbsp;with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“<strong>Feedback</strong>”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.</p>
                    <p>The third party sites and tools mentioned above include the following:</p>
                    <p><strong>Bugsnag</strong></p>
                    <p>Bugsnag is a platform for monitoring and logging stability of applications provided by Bugsnag Inc. Please read their Privacy Policy here: <a href="https://docs.bugsnag.com/legal/privacy-policy/" target="_blank" rel="noopener">https://docs.bugsnag.com/legal/privacy-policy/</a></p>
                    <p><strong>Sentry</strong></p>
                    <p>Sentry is open-source error tracking solution provided by Functional Software Inc. More information is available here: <a href="https://sentry.io/privacy/">https://sentry.io/privacy/</a></p>
                    <p><strong>Raygun</strong></p>
                    <p>Raygun is automated error monitoring software provided by Raygun Limited. Privacy Policy is accessible at <a href="https://raygun.com/privacy/">https://raygun.com/privacy/</a></p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="18">
                        <li><strong> </strong><strong>Links To Other Web Sites</strong></li>
                    </ol>
                    <p>Our Service may contain links to third party web sites or services that are not owned or controlled by&nbsp;BOOKBYQR.</p>
                    <p>BOOKBYQR&nbsp;has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
                    <p>&nbsp;</p>
                    <p>YOU ACKNOWLEDGE AND AGREE THAT&nbsp;BOOKBYQR&nbsp;SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.</p>
                    <p>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="19">
                        <li><strong> </strong><strong>Disclaimer Of Warranty</strong></li>
                    </ol>
                    <p>THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” ,“AS AVAILABLE” AND “BEST EFFORT” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
                    <p>NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE. ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
                    <p>COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>
                    <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="20">
                        <li><strong> </strong><strong>Limitation Of Liability</strong></li>
                    </ol>
                    <p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER, IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="21">
                        <li><strong> </strong><strong>Termination</strong></li>
                    </ol>
                    <p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>
                    <p>If you wish to terminate your account, you may simply discontinue using Service.</p>
                    <p>All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="22">
                        <li><strong> </strong><strong>Governing Law</strong></li>
                    </ol>
                    <p>These Terms shall be governed and construed in accordance with the laws of India. The place of jurisdiction shall be exclusively in Bengaluru, Karnataka&nbsp;.</p>
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="23">
                        <li><strong> </strong><strong>Changes To Service</strong></li>
                    </ol>
                    <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="24">
                        <li><strong> </strong><strong>Amendments To Terms</strong></li>
                    </ol>
                    <p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>
                    <p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>
                    <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="25">
                        <li><strong> </strong><strong>Waiver And Severability</strong></li>
                    </ol>
                    <p>No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.</p>
                    <p>If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="26">
                        <li><strong> </strong><strong>Indemnity </strong></li>
                    </ol>
                    <p>You shall indemnify and hold harmless BOOKBYQR, its owners, licensees, affiliates, subsidiaries, and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys’ fees, made by any third party or penalty imposed due to or arising out of Your breach of this Terms of Use, privacy Policy and other Policies, or Your violation of any law, rules or regulations or the rights (including infringement of intellectual property rights) of a third party.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="27">
                        <li><strong> </strong><strong>Disclaimer</strong></li>
                    </ol>
                    <p>The Website, apps or our communications, may sometimes contain inaccuracies and typographical and clerical errors. BOOKBYQR expressly disclaims any obligation(s) to update this Website and apps or any of these materials. BOOKBYQR does not warrant the accuracy or completeness of the Materials or the reliability of any advice, opinion, statement or other information displayed or distributed through the Website, apps or communications. You acknowledge that any reliance on any such opinion, advice, statement, memorandum, or information shall be at your sole risk. BOOKBYQR reserves the right, in its sole discretion, to correct any errors or omissions in any portion of the Website, apps or communications. BOOKBYQR may make any other changes to the materials and the products, programs, services, or prices (if any) described in the Website and apps at any time without notice. This Website and apps is for informational purposes only and should not be construed as technical advice of any manner.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="28">
                        <li><strong> </strong><strong>Acknowledgment</strong></li>
                    </ol>
                    <p>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>
                </div>

                <div className="privacy-inner-wrap">
                    <ol start="29">
                        <li><strong> </strong><strong>Contact Us</strong></li>
                    </ol>
                    <p>Please send your feedback, comments, requests for technical support:</p>
                    <p>By email: <a href="mailto:support@bookbyqr.com">support@bookbyqr.com</a></p>
                    <p>By visiting this page on our website: <a href="https://www.bookbyqr.com/contact-us">https://www.bookbyqr.com/contact-us.</a></p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>

}