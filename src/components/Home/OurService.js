import React from 'react';
import Ellipse from "../../asset/service/Ellipse 18.png"
import Line4 from "../../asset/service/Line 4.png"
import Line3 from "../../asset/service/Line 3.png"
import Component3 from "../../asset/service/Component 3.png"
import Component4 from "../../asset/service/Component 4.png"
import Line5 from "../../asset/service/Line 5.png"
import Component5 from "../../asset/service/Component 5.png"
import Component19 from "../../asset/service/Component 19.png"
import Component6 from "../../asset/service/Component 6.png"
import Component7 from "../../asset/service/Component 7.png"
import Line9 from "../../asset/service/Line 9.png"
import Line7 from "../../asset/service/Line 7.png"
import Line6 from "../../asset/service/Line 6.png"
import Line10 from "../../asset/service/Line 10.png"
import '../style.css'
const OurService = () => {
    return (
        <div className='  mb-12 mt-12 ' style={{ background: '#F7FFFB' }}>

            {/* for Desktop device  */}
            <div className='container mx-auto service sm:p-12 ' >
                <div className='flex justify-center items-center'> <h2 className=''>Our <span>Services</span> </h2> </div>
                <div className='flex justify-center items-center'> <p >
                    Diabbymate offers a variety of healthcare services in from the comfort of your homes
                </p> </div>
                
                <div className='flex items-center justify-center sm:mr-4 sm:p-0 p-4'>
                    <span className='  flex items-center w-12 sm:w-16'>
                        <img src={Ellipse} alt="" className='sm:pb-7 pb-5' />
                        <img src={Line4} alt="" />
                    </span>
                    <img src={Component3} alt="" className='sm:w-36 w-20 hover:text-green-500 sm:-ml-2 sm:-mr-5 -ml-2' />
                    <span className='flex items-center sm:w-20 w-14 sm:-ml-0 -ml-3'>
                        <img src={Line3} alt="" className='' />
                    </span>
                    <img src={Component4} alt="" className='sm:w-36 w-20 -ml-3 sm:-ml-4' />
                    <span className='flex items-center sm:-ml-5 -ml-3'>
                        <img src={Line5} alt="" className='sm:w-20 w-14' />
                    </span>
                    <img src={Component5} alt="" className='sm:w-36 w-20 sm:-ml-6 -ml-3' />
                </div>
                <div className='flex items-center justify-end '>
                    <img src={Line9} alt="" className=' line4' />
                </div>
                <div className='flex items-center justify-center mt-3 sm:mt-24 sm:mr-4 sm:p-0 p-4'>
                    <span className='  flex items-center w-12 sm:w-16'>
                        <img src={Ellipse} alt="" className='sm:-mb-7 -mb-5' />
                        <img src={Line7} alt="" />
                    </span>
                    <img src={Component19} alt="" className='sm:w-36 w-20 hover:text-green-500 sm:-ml-2 sm:-mr-5 -ml-2' />
                    <span className='flex items-center sm:w-20 w-14 sm:-ml-0 -ml-3'>
                        <img src={Line10} alt="" className='' />
                    </span>
                    <img src={Component6} alt="" className='sm:w-36 w-20 -ml-3 sm:-ml-4' />
                    <span className='flex items-center sm:-ml-5 -ml-3'>
                        <img src={Line6} alt="" className='sm:w-20 w-14' />
                    </span>
                    <img src={Component7} alt="" className='sm:w-36 w-20 sm:-ml-6 -ml-3' />
                </div>


            </div>
            {/* End desktop Device  */}

            {/* For  Mobile Device  */}

            {/* <div className='container mx-auto service p-12 ' >
                <h2 className='w-auto'>Our <span>Services</span> </h2>
                <p >
                    Diabbymate offers a variety of healthcare services in from the comfort of your homes
                </p>
            <div className='flex items-center justify-center mr-4 '>
                <span className='  flex items-center w-16'>
                    <img src={Ellipse} alt="" className='pb-3' />
                    <img src={Line4} alt="" className='mt-5' />
                </span>
                <img src={Component3} alt="" className='w-36 hover:text-green-500 -ml-2 -mr-5' />
                <span className='flex items-center '>
                    <img src={Line3} alt="" className='' />
                </span>
                <img src={Component4} alt="" className='w-36 -ml-4' />
                <span className='flex items-center -ml-5'>
                    <img src={Line5} alt="" className='' />
                </span>
                <img src={Component5} alt="" className='w-36 -ml-6' />
            </div>
            <div className='flex items-center justify-end '>
                <img src={Line9} alt="" className=' line4'/>
            </div>
            <div className='flex items-center justify-center mt-24 '>
               <span className='flex items-center w-16 mb-12 '>
               <img src={Ellipse} alt="" className='mt-14'/>
                <img src={Line7} alt="" className='mt-5'/>
               </span>
                <img src={Component19} alt="" className='w-36 -ml-2 -mr-5'/>
                <span className='flex items-center '>
                <img src={Line10} alt="" className=''/>
               </span>
               <img src={Component6} alt="" className='w-36 -ml-4'/>
               <span className='flex items-center -ml-5'>
                <img src={Line6} alt="" className=''/>
               </span>
               <img src={Component7} alt="" className='w-36 -ml-6'/>
            </div>

        </div> */}
            {/* End Mobile Device  */}
        </div>
    );
};

export default OurService;