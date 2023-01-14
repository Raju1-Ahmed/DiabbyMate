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
            <div className=' flex justify-between p-2 items-center '>
                <div className='flex justify-center items-center '>
                    <div >
                        <span> <img src={logo1} alt="" style={{ position: 'absolute', padding: '5px' }} /></span>
                        <span> <img src={logo4} alt="" /></span>
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
                <div className='flex justify-center items-center'>
                    <span className='mr-5'>
                        <Button variant="outlined" startIcon={<AppleIcon />} >
                            App Store
                        </Button>
                    </span>
                    <span>
                        <Button variant="outlined" startIcon={<ShopIcon />} >
                            App Store
                        </Button>
                    </span>
                </div>
            </div>
            {/* Menu          End */}

            {/* Header     Start */}
            <div className='flex justify-between items-center mt-36 p-2 '>
                <div className='headerH'>
                    <h2 className=''>Quality medical advice <span> from your home</span></h2>
                    <p> Diabbymate provides quality care for diabetes and mental health.
                        We aim to make healthcare more accessible and help you consult experienced specialist doctors anytime, anywhere.</p>
                </div>
                <div className='headerImg'><img src={banner} alt="" />  </div>
            </div>
            {/* Header     End */}
        </div>
    );
};

export default Header;