import React from 'react'
import '../css/Categories.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="left">
                <div className="logo">E - Shop</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Quae atque eligendi
                      rem ea non ducimus ut! Fugiat earum 
                      deserunt eligendi, itaque et perferendis 
                      excepturi nam iste quae rem iure minus.
                </div>
                <div className="social-link">
                    <div className="social-icon">
                        <FacebookIcon />
                    </div>
                    <div className="social-icon">
                        <InstagramIcon />
                    </div>
                    <div className="social-icon">
                        <TwitterIcon color='white' />
                    </div>
                    <div className="social-icon">
                        <PinterestIcon />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="title">
                    Useful Link
                </div>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Men Fashion</li>
                    <li>Women Fashion</li>
                    <li>Accessories</li>
                    <li>Sign In/Register</li>
                    <li>My Account</li>
                    <li>Order Tracking </li>
                    <li>Payments</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="right">
                <div className="title">
                    Contact
                </div>
                <div className="contact">
                    <div className="contactItem">
                        <LocationOnIcon /> MDU, Rohtak,Haryana , 124001,India 
                    </div>
                    <div className="contactItem">
                        <CallIcon />  91+ 89083 79097
                    </div>
                    <div className="contactItem">
                        <MailIcon />  abc@gmail.com
                    </div>
                    <div className="contactItem"></div>
                </div>
                <div className="paymet">
                    <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="" />
                    <img src="https://cdn-icons.flaticon.com/png/128/5566/premium/5566925.png?token=exp=1649334277~hmac=30aa7c8d38f5451cd490c138991b1c03" alt="" />
                    <img src="https://cdn-icons.flaticon.com/png/128/1440/premium/1440517.png?token=exp=1649334319~hmac=0ed50ff7f7c625608b031412c72b0901" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1019/1019607.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer