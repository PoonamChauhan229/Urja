const Message=({mess1,mess2,mess3})=>{
    // destructing over the fly
    // const {mess1,mess2,mess3}=props
    return(
        <>
           <div className="box">
                <h4>{mess1}</h4>
                <h5>{mess2}</h5>
                <h6>{mess3}</h6>
           </div>
        </>
    )
}
export default Message