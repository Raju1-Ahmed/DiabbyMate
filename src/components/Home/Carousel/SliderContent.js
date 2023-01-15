import { Button, Paper } from '@mui/material';
import React from 'react';
import '../../style.css'


const SliderContent = (props) => {
    console.log(props);
    return (
        <div className='service container mx-auto mb-16 mt-10'>
            <h2 className='text-center'>{props.item.name}</h2>
            <p className='text-center'>{props.item.description}</p>
            <p className='text-center'>{props.item.detail}</p>

            <div className='carousel'>
            <p className='p-8'>
            Highly recommended! Consulting on this app is very convenient. Consulted a doctor within minutes through this app and got good medical advice.
            </p>
            <h2 className='text-center'>John Smith</h2>
            </div>

            <Button className="CheckButton justify-center text-center">
                Check it out!
            </Button>
        </div>
    );
};

export default SliderContent;