import springflower from '../assets/spring-flowers.jpg'
const Box=()=>{
    // inline css  >> style attribute style="border:1px solid red"
    // style={} >> it takes JS >> its takes an object >>{}  >> style={{}}
    return(
        <>
            <div style={{backgroundColor:"red",height:"180px",width:"172px",marginTop:"10px"}}>
                <img src={springflower} alt=""  style={{height:"180px",width:"172px"}}/>
            </div>

        </>
    )
}

export default Box

// insta ||facebook icons/images/emjos