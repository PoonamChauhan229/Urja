import React from 'react'
import Box from './Box'

//arry of objects
const services=[
  {
    servicename:"repair2",
    availbility:"2hrs",
    slot:"yes",
    price:"$89"
  },
  {
    servicename:"replace2",
    availbility:"3hrs",
    slot:"no",
      price:"$69"
  },
  {
    servicename:"trade2",
    availbility:"5hrs",
    slot:"yes",
    price:"$99"
  }
]
const Services = () => {
  return (
    <>
    <h2>Services</h2>
    <div className="section servicessection">
      <Box servicename="repair" availbility="2hrs" price="$56"/>
      <Box servicename="replace" availbility="3hrs" price="$76"/>
      <Box servicename="trade" availbility="5hrs" price="$66"/>      

      {/* map method >>arrays*/}
      {
        services.map((element,index)=><Box servicename={element.servicename} availbility={element.availbility} slot={element.slot} price={element.price}/>)
      }

  {/* map method >> spread operator  */}
      {
        services.map((element,index)=><Box {...element}/>)
      }
    </div>
    </>
  )
}

export default Services
