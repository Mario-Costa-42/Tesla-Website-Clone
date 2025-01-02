import React from "react";
import './SectionsImages.css';

function Sections(){
    return(
        <>
        <div className="Telsa-Home">
            <img src="/src/assets/twoModels.jpg" id="twoModel" className="background-photo"></img>
        </div>
        <div className="car-model-y">
            <img src="/src/assets/ModelY_58.jpg" id="ModelY" className="background-photo"></img>
        </div>
        <div className="car-model-3">
            <img src="/src/assets/Model3-66.jpg" id="Model3" className="background-photo"></img>
        </div>
        <div className="car-model-x">
            <img src="/src/assets/ModelX_62.jpg" id="ModelX" className="background-photo"></img>
        </div>
        <div className="car-model-y">
            <img src="/src/assets/ModelS_70.jpg" id="ModelS" className="background-photo"></img>
        </div>
        <div className="car-model-cbertruck">
            <img src="/src/assets/Cybertruck_66.jpg" id="Cybertruck" className="background-photo"></img>
        </div>
        <div className="Solar-Panels">
            <img src="/src/assets/SolarPanels_90.jpg" id="Panels" className="background-photo"></img>
        </div>
        <div className="Solar-Roof">
            <img src="/src/assets/SolarRoof_89.jpg" id="Roof" className="background-photo"></img>
        </div> 
        <div className="Powerwall">
            <img src="/src/assets/0x0-PowerwallPlus_01.jpg" id="Power" className="background-photo"></img>
        </div> 
        <div className="Acessories">
            <img src="/src/assets/acessories.jpg" id="Acesso" className="background-photo"></img>
        </div>    
        </>
    );
}

export default Sections;

/////////////////////////////////////////////////////////////////////