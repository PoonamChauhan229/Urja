function JSVariables_Test(){
    let x=100
    var y=200
    const z=45 // cannot update >>Assignment to constant variable.

    return(
        <>
            <hr/>
            <h1>UseState Hook-JS Variables</h1>
            <h2>{x}</h2>
            <h2>{y}</h2>
            <h2>{z}</h2>
            <button
            onClick={()=>{
                // console.log("test Btn")
                x++;
                y++;
                console.log(x,y,z)

            }}
            >Increase</button>
            <hr/>
        </>
    )

}
export default JSVariables_Test