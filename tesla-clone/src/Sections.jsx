import React from "react";
import './SectionsImages.css';
import './Buttons.css';
import './Responsive.css';
import './assets/twoModels.jpg';

function Sections(){
    return(
        <>
        <div id="sectionParent">
        <div id="Telsa-Home" className="background-images">
            <h1 className="SubTitle">$299/mo Leasing</h1>
            <div className="button-container">
                <a className="styled-button">Order Model 3</a>
                <a className="styled-button">Order Model Y</a>
            </div>
        </div>
        <div id="car-model-y" className="background-images">
            <h1>Model Y</h1>
            <h2>$299/mo Leasing</h2>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="car-model-3" className="background-images">
        <h1>Model 3</h1>
            <h2>$299/mo Leasing</h2>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="car-model-x" className="background-images">
        <h1>Model X</h1>
            <h2>From $65,990</h2>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="car-model-s" className="background-images">
        <h1>Model S</h1>
            <h2>Free Supercharging Included</h2>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div> 
        </div>
        <div id="car-model-cbertruck" className="background-images">
            <h1>This is the Cybertruck</h1>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div> 
        </div>
        <div id="Solar-Panels" className="background-images">
            <h1>Solar Panels</h1>
            <h3><u>Schedule a Virtual Consultation</u></h3>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="Powerwall" className="background-images">
            <h1>Powerwall</h1>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div> 
        <div id="Acessories" className="background-images">
           <h1>Accessories</h1>
           <div className="button-container">
                <a className="styled-button">Order Now</a>
            </div>
        </div>
        <div id="video-showcase">
            <video src="/src/assets/we-are-tesla.webm" autoPlay muted loop id="tesla-video"></video>
            <div id="sub-video-div-container">
                <h2 id="weAreTesla">We Are Tesla</h2>
                <button id="joinTesla">Join Tesla</button>
            </div>
        </div>
        <div id="Footer">
            <h4>Tesla - 2025</h4>
            <p>This site was made by <a href="https://github.com/Mario-Costa-42" id="nameLink"><u>Mario Costa</u></a> 
            </p>
        </div>
        </div>    
        </>
    );
}

export default Sections;
