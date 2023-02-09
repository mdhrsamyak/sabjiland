import React from "react";
import Input from "../components/Input";

function Top(props){
    return(
        <div className="top">
            <div className="title">{props.title}</div>
            <div className="filter">
                <div className="filter-item"><button>All</button></div>
                <div className="filter-item"><button>Pending</button></div>
                <div className="filter-item"><button>In Progress</button></div>
                <div className="filter-item"><button>Completed</button></div>
                <div className="filter-item"><button>Cancelled</button></div>
            </div>
            <div className="sort">
                <div className="search"><Input type="text" placeholder="Search for order ID, customer name, order status" /></div>
                <div className="sort-drop"><select>
                    <option value="" disabled selected>Sort By</option>
                    <option>Price Up</option>
                </select></div>
            </div>
            <div className="paginate">1-50 of 100</div>
        </div>
    );
}

export default Top;