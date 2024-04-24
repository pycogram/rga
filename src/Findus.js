let MyFindUs = ({RGA_logo, DT, DS, DV, CG, Tw, Tb, Li, Git, Bk, Md}) => {

    return(
        <div className="findUsPage">
            <div className="OVPH1">
                <span></span>
                    <h1>Find Us</h1>
                <span></span>
            </div>
            <div className="allScLogo">
                <img src={DT} alt="dextools logo"></img>
                <img src={DS} alt="dexscreener logo"></img>
                <img src={DV} alt="dexviews logo"></img>
                <img src={CG} alt="coingecko logo"></img>
            </div>
            <footer className="Pt1">
                <img src={RGA_logo} alt="logo" className="footLogo"></img>
                <span className="footLine"></span>
                <div className="SCContainer">
                    <span><a href="" target="_blank"><img src={Tw} alt="telegram logo"></img></a></span>
                    <span><a href="" target="_blank"><img src={Tb} alt="twitter logo"></img></a></span>
                    <span><a href=""><img src={Li} alt="linkedIn logo"></img></a></span>
                    <span><a href=""><img src={Git} alt="github logo"></img></a></span>
                    <span><a href=""><img src={Bk} alt="book logo"></img></a></span>
                    <span><a href=""><img src={Md} alt="medium logo"></img></a></span>
                </div>
                {/* <p>© 2024 RGA. All rights reserved.</p> */}
                <p>RGA made by Travis0x.</p>
            </footer>
        </div>
    );
}

export default MyFindUs;