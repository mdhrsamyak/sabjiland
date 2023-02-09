import React from "react";
import "./Location.css"

function Location(props){
    return(
        <div className="pop-up" style={props.pop ? {display: "block"} : {display: "none"}}>
            <div className="pop-up-content">    
                <div className="pop-heading">
                    <span>SET DELIVERY LOCATION</span>
                    <span className="close" onClick={props.set}>&times;</span>
                </div>
                <div className="pop-subheading">
                    <span>Drag The Map To Pin Point Your Delivery Location</span>
                </div>
                <div className="line"></div>
                <div className="panel"><span>Your Location</span></div>
                <div><input type="text" placeholder="Search Your Location Here" /></div>
                <div className="map"></div>
                <button className="confirm-btn">Confirm this location</button>
            </div>
        </div>
    );
}

export default Location;