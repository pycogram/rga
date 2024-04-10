import RGAAllocate  from "./img/allocation.png"
let MyAllocation = () => {
    return(
        <div className="allocationPage">
            <div className="OVPH1">
                <span></span>
                    <h1>Allocation</h1>
                <span></span>
            </div>
            <div className="AllocImg">
                <img src={RGAAllocate} alt="Token Allocation Image"></img>
            </div>
        </div>
    )
}

export default MyAllocation;