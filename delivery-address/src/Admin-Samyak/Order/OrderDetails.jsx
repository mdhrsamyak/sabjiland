import React from "react";
import "../main.css";
import "./order.css";
import Top from "../Top";
import Table from "../Table";

function Order(){
    return(
        <div className="main-container">
            <Top 
                title="Order Details"
            />
            <Table />

        </div>
    );
}

export default Order;