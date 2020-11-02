import React from 'react';
import '../css/compa_css.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';

const CompA = () => {


    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '6rem', color: 'white', fontSize: '1.2rem', boxShadow: '1px 1px solid yellow;', backgroundColor: 'indigo' }}>

                <h1> -- Welcome to Admission Department -- </h1>
            </div>
            <br />
            <div id="Slider" className="slider">
                <div className="slides"> <img src={image1} alt="image1" />


                </div>
                <div className="slides"> <img src={image2} alt="image1" /> </div>
                <div className="slides"> <img src={image1} alt="image1" /> </div>
                <div className="slides"> <img src={image2} alt="image1" /> </div>
                <div className="slides"> <img src={image1} alt="image1" /> </div>
            </div>

            <div style={{ display: 'grid', placeItems: 'center', height: '12rem' }}> <p style={{ fontSize: '3rem', textShadow: '1px 1px 3px grey' }}> -- FIND YOUR AREA OF INTEREST -- </p> </div>

        </>
    );
}

export default CompA;