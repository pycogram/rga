import { useState } from "react";
import { Link } from "react-router-dom";
let MyNavBar = ( {RGA_logo} ) => {
    let [ openMenu, setOpenMenu ] = useState("NBOption unclicked");
    let [ burgerClass, setBurgerClass ] = useState("burgarBar inactive");
    let [ isMenuClicked, setMenuClicked ] = useState(false);
    let updateMenu = () => {
        if(!isMenuClicked){
            setOpenMenu("NBOption clicked");
            setBurgerClass("burgarBar active");
        } else {
            setOpenMenu("NBOption unclicked");
            setBurgerClass("burgarBar inactive");
        }
        setMenuClicked(!isMenuClicked);
    }
    let NavLink = () => {
        setOpenMenu("NBOption unclicked");
        setBurgerClass("burgarBar inactive");
        setMenuClicked(!isMenuClicked);
    }
    return(
        <header>
            <div className="NBBox">
                    <img src={RGA_logo} alt="RGA Logo"></img> 
                    <ul className={openMenu}>
                        <li onClick={() => NavLink()}><Link to="/"><h3>Home</h3></Link></li>
                        <li onClick={() => NavLink()}><Link to="/Overview"><h3>Overview</h3></Link></li>
                        <li onClick={() => NavLink()}><Link to="/Tokenomic"><h3>Tokenomics</h3></Link></li>
                        <li onClick={() => NavLink()}><Link to="/Allocation"><h3>Allocation</h3></Link></li>
                        <li onClick={() => NavLink()}><Link to="/Roadmap"><h3>Roadmap</h3></Link></li>
                        <li onClick={() => NavLink()}><Link to="/Findus"><h3>FindUs</h3></Link></li>
                    </ul>
                    <div className="NBBtn">
                        <button>Buy $RGA</button>
                        <button>Chart</button>
                    </div>
                    <div id="MenuBtn" onClick={() => updateMenu()}>
                        <span className={burgerClass}></span>
                        <span className={burgerClass}></span>
                        <span className={burgerClass}></span>
                    </div>
            </div>
        </header>
    );
}
export default MyNavBar;