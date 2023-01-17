import { Button, Paper } from '@mui/material';
import Ellipse from "../../../asset/service/Ellipse 5.png"
import leftQuote from "../../../asset/service/left-quote.png"
import leftquit from "../../../asset/service/leftquit.png"
import React from 'react';
import '../../style.css'


const SliderContent = (props) => {
    const str2 = props.item.description.slice(1, 80);
    const about = props.item.about.slice(1, 190);
    console.log(str2);
    return (
        <div className='service container mx-auto mb-16 mt-10'>
            <h2 className='text-center'>{props.item.name}</h2>
            <p className='text-center'>{str2}</p>

            <div className='carousel'>
                <div className='flex justify-center'>
                    <span className='mt-5 -mr-8'> <img src={leftQuote} alt="" /></span>
                    <span>  <p className='p-8'> {about} </p></span>  
                    <span className='mt-24 -ml-8'> <img src={leftquit} alt="" /></span>
                </div>
                  <h2 className='text-center'> {props.item.company}  </h2>
            </div>
        </div>
    );
};

export default SliderContent;