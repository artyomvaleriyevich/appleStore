import React from 'react';
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-content">
                    <ul className="footer-listOne">
                        <li className="footer-item-title">Follow Us.</li>
                        <li style={{marginTop: '8px',marginBottom: '20px'}} className="footer-item">
                            We are always looking for new <br/>
                            projects and collaborations. <br/>
                            Feel free to contact us.
                        </li>
                        <li>
                            <div className='footer-item-block'>
                                <ImFacebook className='reactIcon'/>
                                <BsTwitter className='reactIcon'/>
                                <AiFillInstagram className='reactIcon'/>
                            </div>
                        </li>
                    </ul>

                    <ul className="footer-listTwo">
                        <li className="footer-item-title">Contact Us.</li>
                        <li style={{marginTop: '8px',marginBottom: '16px'}} className="footer-item">
                            One Apple Park Way <br/>
                            Cupertino, CA 95014
                        </li>
                        <li style={{marginBottom: '8px'}} className="footer-item-number">
                            (408) 996-1010
                        </li>
                        <li className="footer-item">
                            <a className='footer-item-email' href="">support@apple.com</a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    );
};

export default Footer;