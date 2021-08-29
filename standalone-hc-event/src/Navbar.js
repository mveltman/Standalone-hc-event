import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={"Navbar"}>
            <Link to="/">
                <div className={"link"}>
                    Home
                </div>
            </Link>
            <Link to="/easy">
                <div className={"link"}>
                    Easy tasks
                </div>
            </Link>
            <Link to="/medium">
                <div className={"link"}>
                    Medium tasks
                </div>
            </Link>
            <Link to="/hard">
                
                <div className={"link"}>
                    Hard tasks
                </div>
            </Link>
            <Link to="/elite">
                <div className={"link"}>
                    Elite tasks
                </div>
           </Link>          
            <Link to="/master">
                <div className={"link"}>
                    Master tasks
                </div>
            </Link> 
        </div>
    );
}