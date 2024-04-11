import { useState } from "react";
import { Link } from "react-router-dom";
let MyNavBar = ( {RGA_logo} ) => {
    return(
        <header>
            <div className="NBBox">
                    <img src={RGA_logo} alt="RGA Logo"></img> 
                    <ul className="NBOption">
                        <li><Link to="/"><h3>Home</h3></Link></li>
                        <li><Link to="/Overview"><h3>Overview</h3></Link></li>
                        <li><Link to="/Tokenomic"><h3>Tokenomics</h3></Link></li>
                        <li><Link to="/Allocation"><h3>Allocation</h3></Link></li>
                        <li><Link to="/Roadmap"><h3>Roadmap</h3></Link></li>
                        <li><Link to="/Findus"><h3>FindUs</h3></Link></li>
                    </ul>
                    <div className="NBBtn">
                        <button>Buy $RGA</button>
                        <button>Chart</button>
                    </div>
                    <div id="MenuBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>
        </header>
    );
}
export default MyNavBar;