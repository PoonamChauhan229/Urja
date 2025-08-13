import React from 'react'


// conditional rendering
const Box = ({productName,features,touchscreen,price,servicename,availbility,slot}) => {
  
  return (
    <div className="box">
        <h5>Name-{productName || servicename}</h5>
        {features?<h3>Features-{features}</h3>:null}       
        {touchscreen?<h2>touchscreen-{touchscreen}</h2>:<h2>availbility-{availbility}</h2>}
        <p>Price:{price}</p>
        {slot?<p>Slot:{slot}</p>:null}
    </div>
  )
}

export default Box

// product box >> green
//  services box >> orange
// conidtional rendering


// styling
// external css
// internal css
// inline css


