import Rm from "./img/Rmap1.png";

let MyRoadMap = () => {
    return(
        <div className="RMapPage">
            <div className="OVPH1">
                <span></span>
                    <h1>Roadmap</h1>
                <span></span>
            </div>
            <div className="RMpic">
                <img src={Rm} alt="Roadmap pic"></img>
            </div>
        </div>
    );
}

export default MyRoadMap;