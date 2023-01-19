import { Avatar, Button } from '@mui/material';
import React from 'react';
import './style.css'
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import footerBanner from '../asset/service/Union.png'
import instagram from '../asset/service/instagram.png'
import facebook from '../asset/service/facebook.png'
import twitter from '../asset/service/twitter.png'
import linkedin from '../asset/service/linkedin.png'
import call from '../asset/service/call.png'
import mail from '../asset/service/mail.png'

const Footer = () => {
    return (
        <div className='' >
            <img src={footerBanner} alt="" className='absolute' />
            <div >
                <div className='flex items-center justify-between p-20 absolute container border-b ml-9'>
                    <div className='footerContent '>
                        <h3 className=' text-white'>mate <span className='locoColor'> diabby  </span> </h3>
                        <div className='flex justify-between items-center '>
                            <button>
                                <Avatar sx={{
                                    marginRight: '14px',
                                    bgColor: 'whitesmoke',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '0.7px solid rgba(255, 255, 255, 0.46)',
                                    borderRadius: '5px'
                                }} variant="square">
                                    <img src={instagram} alt="" />
                                </Avatar>
                            </button>
                            <button>
                                <Avatar sx={{
                                    marginRight: '14px',
                                    bgColor: 'whitesmoke',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '0.7px solid rgba(255, 255, 255, 0.46)',
                                    borderRadius: '5px'
                                }} variant="square">
                                    <img src={facebook} alt="" />
                                </Avatar>
                            </button>
                            <button>
                                <Avatar sx={{
                                    marginRight: '14px',
                                    bgColor: 'whitesmoke',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '0.7px solid rgba(255, 255, 255, 0.46)',
                                    borderRadius: '5px'
                                }} variant="square">
                                    <img src={twitter} alt="" />
                                </Avatar>
                            </button>
                            <button>
                                <Avatar sx={{
                                    marginRight: '14px',
                                    bgColor: 'whitesmoke',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '0.7px solid rgba(255, 255, 255, 0.46)',
                                    borderRadius: '5px'
                                }} variant="square">
                                    <img src={linkedin} alt="" />
                                </Avatar>
                            </button>
                        </div>

                    </div>
                    <div className='fb'>
                        <div><button>About us</button></div>
                        <div><button>Services</button></div>
                        <div><button>Support</button></div>
                    </div>
                    <div className='fc'>
                        <div className='ml-2'><button>Contact us</button></div>
                        <div className='flex  items-center'>
                            <div>
                                <Avatar sx={{
                                    background: 'none',
                                }} variant="square">
                                    <img src={call} alt="" />
                                </Avatar>
                            </div>
                            <div><p>1234567890</p></div>
                        </div>


                        <div className='flex justify-center items-center'>
                            <div>
                                <Avatar sx={{
                                    background: 'none',
                                }} variant="square">
                                    <img src={mail} alt="" />
                                </Avatar>
                            </div>
                            <div><p>contactmail.@mail.com</p></div>
                        </div>

                    </div>
                    <div className='fl'>
                        <h2>Download the app</h2>
                        <div className='flex justify-center mt-7 items-center'>
                            <span>
                                <Button sx={{
                                    marginRight: '20px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '0.7px solid rgba(255, 255, 255, 0.46)',
                                    borderRadius: ' 6px',
                                }} variant="outlined" startIcon={<AppleIcon className='text-white' />} >
                                    <p className='text-white'>App Store</p>
                                </Button>
                            </span>
                            <span>
                                <Button sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '0.7px solid rgba(255, 255, 255, 0.46)',
                                    borderRadius: ' 6px',
                                }} variant="outlined" startIcon={<ShopIcon className='text-white' />} >
                                    <p className='text-white'>App Store</p>
                                </Button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-60 fd  ml-8   absolute '>
                    <p>© diabbymate. All rights reserved</p>
                </div>
            </div>

        </div >
    );
};

export default Footer;