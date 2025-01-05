import React from "react";
import './SectionsImages.css';
import './Buttons.css';

function Sections(){
    return(
        <>
        <div id="sectionParent">
        <div id="Telsa-Home">
            <h2 className="SubTitle">$299/mo Leasing</h2>
            <div className="button-container">
                <a className="styled-button">Order Model 3</a>
                <a className="styled-button">Order Model Y</a>
            </div>
        </div>
        <div id="car-model-y">
            <h1>Model Y</h1>
            <h2>$299/mo Leasing</h2>
            <p>From $31,490</p> {/* fix these containers later */}
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="car-model-3">
        <h1>Model 3</h1>
            <h2>$299/mo Leasing</h2>
            <p>From $29,990</p> {/* fix these containers later */}
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="car-model-x">
        <h1>Model X</h1>
            <h2>From $65,990</h2>
            <p>After Federal Tax Credit $7,500</p> {/* fix these containers later */}
            <p>and Est.Gas Savings 6,500</p>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="car-model-s">
        <h1>Model S</h1>
            <h2>Free Supercharging Included</h2>
            <p>From $73,490 <u>After Est.Gas Savings $6,500</u></p> {/* fix these containers later */}
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div> 
        </div>
        <div id="car-model-cbertruck">
            <h1>This is the Cbertruck</h1>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div> 
        </div>
        <div id="Solar-Panels">
            <h1>Solar Panels</h1>
            <h3><u>Schedule a Virtual Consultation</u></h3>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div>
        <div id="Powerwall">
            <h1>Powerwall</h1>
            <div className="button-container">
                <a className="styled-button">Order Now</a>
                <a className="styled-button">Learn More</a>
            </div>
        </div> 
        <div id="Acessories">
           <h1>Acessories</h1>
           <div className="button-container">
                <a className="styled-button">Order Now</a>
            </div>
        </div>
        {/* add the video WE ARE TESLA here */}
        <div id="Footer">
            <h4>Tesla - 2025</h4>
            <p>This site was made by Mario Costa
                {/* Set up link to the GitHub Account */}
            </p>
        </div>
        </div>    
        </>
    );
}

export default Sections;
