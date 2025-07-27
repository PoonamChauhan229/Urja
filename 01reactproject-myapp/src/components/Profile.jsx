const Profile=(props)=>{
    console.log(props)//properties >> object 
    // console.log(props.fname,props.age,props.nickName)
    const {fname,age,nickName}=props

    // reservred keyword >>class >>OOPS ,name

    return(
        <>  
            <div className='box'>
                <h4>{props.fname}</h4>
                <h4>Name:{fname}</h4>
                <h5>Age:{age}</h5>
                <h6>NickName:{nickName}</h6>
            </div>
        </>
    )
}
export default Profile

// Facebook >>
// lakhs users
// profile page >>user specific page

// Profiles >> display user