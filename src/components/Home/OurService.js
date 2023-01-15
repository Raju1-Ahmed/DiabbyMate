import React from 'react';
import Ellipse from "../../asset/service/Ellipse 18.png"
import Line4 from "../../asset/service/Line 4.png"
import Line3 from "../../asset/service/Line 3.png"
import Component3 from "../../asset/service/Component 3.png"
import Component4 from "../../asset/service/Component 4.png"
import Line5 from "../../asset/service/Line 5.png"
import Component5 from "../../asset/service/Component 5.png"
import Line9 from "../../asset/service/Line 9.png"
import '../style.css'
const OurService = () => {
    return (
        <div className='container  mb-12 service p-12 ' style={{ background:'#F7FFFB' }}>
            <h2>Our <span>Services</span> </h2>
            <p>
            Diabbymate offers a variety of healthcare services in from the comfort of your homes
            </p>
            <div className='flex items-center justify-center mr-4 '>
               <span className='flex items-center w-16 mb-12 '>
               <img src={Ellipse} alt="" className='pb-3'/>
                <img src={Line4} alt="" className='mt-5'/>
               </span>
                <img src={Component3} alt="" className='w-36 -ml-2 -mr-5'/>
                <span className='flex items-center '>
                <img src={Line3} alt="" className=''/>
               </span>
               <img src={Component4} alt="" className='w-36 -ml-4'/>
               <span className='flex items-center -ml-5'>
                <img src={Line5} alt="" className=''/>
               </span>
               <img src={Component5} alt="" className='w-36 -ml-6'/>
            </div>
            <div className='flex items-center justify-end '>
                <img src={Line9} alt="" className=' line4'/>
            </div>
            <div className='flex items-center justify-center mt-24 '>
               <span className='flex items-center w-16 mb-12 '>
               <img src={Ellipse} alt="" className='pb-3'/>
                <img src={Line4} alt="" className='mt-5'/>
               </span>
                <img src={Component3} alt="" className='w-36 -ml-2 -mr-5'/>
                <span className='flex items-center '>
                <img src={Line3} alt="" className=''/>
               </span>
               <img src={Component4} alt="" className='w-36 -ml-4'/>
               <span className='flex items-center -ml-5'>
                <img src={Line5} alt="" className=''/>
               </span>
               <img src={Component5} alt="" className='w-36 -ml-6'/>
            </div>
        
        </div>
    );
};

export default OurService;