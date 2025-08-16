import { useState } from "react"

function Hook_useState(){
    const [x,setX]=useState(100) // undefined
    const[y,setY]=useState(200)
    const[z,setZ]=useState(45)
    const [name,setName]=useState("urja")
    // 3 scenarios 
    const [fruits,setFruits]=useState(["apple","kiwi","orange","mango"])
    // x     >> state    >> initial Value >>React variable
    // setX  >>setState  >> function >>update the state value
    // state Management

    // setState()
   
    return(
       <>
       <hr/>
        <h1>UseState Hook</h1>
        <h2>{x}</h2>
        <h2>{y}</h2>
        <h2>{z}{name}</h2>
        <h3>{fruits.map((element)=><div>{element}</div>)}</h3>
        {/* []  >> ""  || logic >> fruits.map() >>array method || map array 
            []  >>""   ||array is missing >>arr >> string
        
        */}
        <button onClick={()=>{
            setX(x+1)
            setY(y-1)
            setZ(z*2)
            setName("Poonam")
            setFruits([...fruits,"strawberry"])// u have keep exiting arr + strawberry
        }}>Increase</button>
        <hr/>
       </>
    )

}
export default Hook_useState