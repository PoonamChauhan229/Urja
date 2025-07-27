
// React is library of JS 
// Angular is framework of JS >> Set of rules -predefined >> which needs to followed

import './App.css'
import Calculate from './components/Calculate' // Auto import >> Calculate.jsx
import Message from './components/Message'
import Profile from './components/Profile'
import Show from './components/Show'


function App() {
  // return 1 jsx
  return (
    <>
    {/* JSX  javascript xml >> js+html */} 
    {/* html like syntax */}
      <h1>First Project</h1>
      {/* <h3>Welcome to React World</h3> */}
      {/* js code  */}
      {console.log("react")}

      {/* 1 way >> JS  dont use */}
      {/* <h2>First way</h2> */}
      {/* {Calculate()} */}
      
      {/* <h2>Second way</h2> */}
      {/* 2 way >> React  JSX || component*/}
      {/* Opening and closing tag   || some text/logic/anything in between them*/}
      {/* <Calculate></Calculate>  */}

      {/* <h2>Third way</h2> */}
      {/* 3 way>> React JSX*/}
      {/* Self closing tag */}        
      {/* <Calculate/> */}

      {/* Not a good way coding */}
      {/* loop concept >>map method in js  */}
      {/* <Show/> */}

      {/* () >> pooja,23,poo 
        html like tag >> self closing tag
        attributes in html
        <input type="text"/>
        <input type="number"/>
        attributeName=attrubuteValue
        userdefined
        Profile component call >> values >>arguments
        // key and value pair
        // object 

      */}
     <div className='profileContainer'>
       <Profile fname="Pooja" age={23} nickName={"Poo"}/>
       <Profile fname="shiva" age="45" nickName="andy"/>
       <Profile fname="manu" age="78" nickName="manish"/>
       <Profile fname="arjun" age="67" nickName="aru"/>
     </div>


       <div className='messageContainer'> 
       <Message mess1="Hey" mess2="How are You" mess3="Come Home"/>
       <Message mess1="Hey Hi" mess2="M fine" mess3="Can we meet"/>
       <Message mess1="Take care" mess2="Stay feet" mess3="Miss you"/>
       <Message  mess1="Come Home" mess2="M also in India" mess3="Plam up someday"/>
      </div>

    </>
  )
}

export default App
// small code + functionality 

// export >> import  || es6 

// function JS 
function calculate(a,b){
  console.log("test")
  // console.log(a+b) // 5
  let sum=a+b
  return (sum)

}
let val=calculate(3,2)
console.log(val)

// function JS
function show(x){
  console.log("Value from calculate function recvd",x)
}
show(val)


// JSX 
// Project Structure
// Create 1 more sample project 
// Remove evrthing CSS (App.css +index.css)
// App.jsx >> create a simple box  show in console.log