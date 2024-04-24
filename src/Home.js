import Scpic from "./img/Securitypic.jpg"

let MyHome =  ( {RGA_logo, Tw, Tb, Li, Git, Bk, Md} ) => {
    return(
        <div className="homePage">
            <div className="Pt1">
                <h1>Rugged Group Of Associates</h1>
                <div className="btnHome">
                    <button>Whitepaper</button>
                    <button>Chart</button>
                </div>
                <span><img className="logo2" src={RGA_logo} alt="RGA Logo"></img></span>
                <h2>Motto: <i>We are tired of scams</i></h2>
                <div className="SCContainer">
                    <span><a href="" target="_blank"><img src={Tw} alt="telegram logo"></img></a></span>
                    <span><a href="" target="_blank"><img src={Tb} alt="twitter logo"></img></a></span>
                    <span><a href=""><img src={Li} alt="linkedIn logo"></img></a></span>
                    <span><a href=""><img src={Git} alt="github logo"></img></a></span>
                    <span><a href=""><img src={Bk} alt="book logo"></img></a></span>
                    <span><a href=""><img src={Md} alt="medium logo"></img></a></span>
                </div>
            </div>
            <div className="Pt2">
                <img src={Scpic} alt="security logo"></img>
            </div>
        </div>
    );
}

export default MyHome;