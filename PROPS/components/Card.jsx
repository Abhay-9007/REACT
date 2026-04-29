function card(props){
    return <>
        <div className="cont">
            <div className="top">
                <img className="logo" src={props.img} alt="" />
            </div>
            <div className="center">
                <div className="companyName"> {props.companyName} </div>
                <div className="position"> {props.position} </div>
                <div className="catagory">
                    <span> {props.level1} </span>
                    <span> {props.level2} </span>
                </div>
            </div>
            <div className="bottom">
                <p>{props.pay}</p>
                <button>Apply Now</button>
            </div>
        </div>
    </>
}

export default card;
