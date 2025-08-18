import { useState } from "react"

function Hook_useState(){
    const [x,setX]=useState(100) // undefined
    const[y,setY]=useState(200)
    const[z,setZ]=useState(45)
    const [name,setName]=useState("urja")
    // 3 scenarios 
    const [fruits,setFruits]=useState(["apple","kiwi","orange","mango"])
    const [complete,setComplete]=useState(false) //false >> not completed
    const [user,setUser]=useState({name:"Poonam",email:"poonam@gmail.com"})
    const [test,setTest]=useState([{roll:"1",id:"01"},{roll:"2",id:"02"}]) //arry itself >> [...test,{}]
    // x     >> state    >> initial Value >>React variable
    // setX  >>setState  >> function >>update the state value
    // state Management

    // setState()
   
    return(
       <div style={{display:"flex",gap:"20%"}}>
            <div>
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
                setComplete(!complete)
                setUser({...user,email:"urja@gmail.com",contact:"345678"}) //copy 

                setTest([...test,{roll:"3",id:"03"}])
            }}>Increase</button>
            <hr/>
            </div>
            <div>
                <h1>Continue</h1>
                {/* False >>Pending */}
                <h2>{complete==true?"Done":"Pending"}</h2>
                <h3>{JSON.stringify(user)}</h3>
                <h4>{user.name} and {user.email} and {user?.contact}</h4> 
                {/* optainal chaining ? */}
                {
                    test.map((element)=><h2>{element.roll} and {element.id}</h2>)
                }
            </div>
       </div>
    )

}
export default Hook_useState