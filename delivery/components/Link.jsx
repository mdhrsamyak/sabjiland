import React from "react";

function Link(props){
    return(
        <div className='change-location'>
          <div><span>Lalitpur, Nepal</span></div>
            <div><button onClick={props.set}>Change Location</button></div>
        </div>
    );
}

export default Link;