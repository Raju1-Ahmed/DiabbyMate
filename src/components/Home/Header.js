import { Button } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import React from 'react';
import logo1 from "../../asset/Vector.png"
import logo4 from "../../asset/Vector (3).png"
import banner from "../../asset/Frame 1.png"
import '../style.css'

const Header = () => {
    return (
        <div className='container mx-auto'>
            {/* Menu            start  */}
            <div className=' flex justify-between p-2 items-center mx-auto shadow sm:shadow-none md:shadow-none lg:shadow-none xl:shadow-none 2xl-shadow-none'>
                <div className='flex justify-center items-center  '>
                    <div>
                        <span> <img src={logo1} alt="" style={{ position: 'absolute', padding: '5px' }} className='logo1' /></span>
                        <span> <img src={logo4} alt="" className='logo2' /></span>
                    </div>
                    <div>
                        <div>
                            <h3 className='logoText'>diabby <span className='locoColor'>mate</span> </h3>
                        </div>
                        <div>
                            <p className='textP'>your health guardian</p>
                        </div>
                    </div>
                </div>
                <div className='sm:flex md:flex lg:flex xl:flex 2xl:flex hidden justify-center items-center '>
                    <div className='mr-5 '>
                        <Button variant="outlined" startIcon={<AppleIcon />} >
                            App Store
                        </Button>
                    </div>
                    <div className=' '>
                        <Button variant="outlined" startIcon={<ShopIcon />} >
                           Play Store
                        </Button>
                    </div>
                </div>
                {/* for mobile device  */}
                <div className='flex justify-center items-center sm:hidden  md:hidden lg:hidden xl:hidden 2x:hidden'>
                    <div className=' '>
                        <Button variant="outlined">
                            Get The App
                        </Button>
                    </div>
                </div>
            </div>
            {/* Menu          End */}

            {/* Header     Start */}
              {/* large device */} 
            <div className='sm:flex md:flex lg:flex xl:flex 2xl:flex hidden  justify-between items-center mt-12 '>
                <div className='headerH'>
                    <h2 className=''>Quality medical advice <span> from your home</span></h2>
                    <p> Diabbymate provides quality care for diabetes and mental health.
                        We aim to make healthcare more accessible and help you consult experienced specialist doctors anytime, anywhere.</p>
                </div>
                <div className='headerImg'><img src={banner} alt="" />  </div>
            </div>
            
            {/* mobile Device  */}
            <div className=' justify-center items-center mt-12  sm:hidden  md:hidden lg:hidden xl:hidden 2x:hidden'>
            <div className='headerImgM'><img src={banner} alt="" />  </div>
                <div className='headerM'>
                    <h2 className=' ml-8 mt-6'>Quality medical advice <span> from your home</span></h2>
                    <p> Diabbymate provides quality care for diabetes and mental health.
                        We aim to make healthcare more accessible and help you consult experienced specialist doctors anytime, anywhere.</p>
                </div>
            </div>

            {/* Header     End */}
        </div>
    );
};

export default Header;