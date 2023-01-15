import React from 'react';
import '../style.css'
import stethoscope from "../../asset/service/stethoscope.png"
import stats from "../../asset/service/stats.png"
import chat from "../../asset/service/chat.png"

const WhyChooseUs = () => {
    return (
        <div class="container mx-auto p-3 grid grid-cols-4 gap-4">
            <div className='why'>
                <h2>Why <span>choose us?</span></h2>
                <p>Your well-being is our top priority. That is why we guarantee that your healthcare will be made easy - appointment, prescription and monitoring, </p>
            </div>
            <div className='license justify-center items-center mx-auto'>
                    <img src={stethoscope} alt=""  className='ml-24 mt-12'/>
                    <h2>Fast response</h2>
                    <p>Communicate directly with your consultant through Diabbymate messaging </p>
                </div>
                <div className='license justify-center items-center mx-auto'>
                    <img src={stats} alt=""  className='ml-24 mt-12'/>
                    <h2>Remote monitoring</h2>
                    <p>Track health stats and easily analyze your results and progress over time </p>
                </div>
                <div className='license justify-center items-center mx-auto'>
                    <img src={chat} alt=""  className='ml-24 mt-12'/>
                    <h2>Licensed experts</h2>
                    <p>All doctors are licensed and go through extensive training to handle online consultations.
                    </p>
                </div>
        </div>
    );
};

export default WhyChooseUs;