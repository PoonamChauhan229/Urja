import { Link, useNavigate } from "react-router-dom"
function Navbar(){

    const test=5
    const imgStyle={
        width:test==5?"75px":"5px",// conditional css
        height:"20px"
    }
    const navigate =useNavigate()  // 1 hook
    const [count,setCount]=useState(0)

    return(
        <>
            <div className="container">
               <Link to='/'>
                 <div className="logo spacing">
                    <img src="https://m.media-amazon.com/images/I/81VfCbZ5psL._UF1000,1000_QL80_.jpg" alt="" 
                    style={imgStyle}
                    />
                </div>
               </Link>
                <div className="navItems spacing">
                    <div className="rightNavItems">
                        <Link to="/home">Home</Link>
                    </div>
                    <div className="rightNavItems">
                        <Link to='/flowerSection'>About Us</Link>
                    </div>
                    <div className="rightNavItems">
                        <Link to='/services'>Services</Link>
                    </div>
                    <div className="rightNavItems">
                        <Link to='/contact'>Contact Us</Link>
                    </div>
                </div>
            </div>
            {/* 
                Hooks >> Functions >> return 
                const navigate=useNavigate()
                // navigate()
            */}

               <div className="container">
                    <div class="leftpanel">
                        <button
                        onClick={
                            ()=>{navigate("/")}
                        }
                        >
                         <img src="https://m.media-amazon.com/images/I/81VfCbZ5psL._UF1000,1000_QL80_.jpg" alt="" style={imgStyle}/>
                        </button>
                    </div>
                    <div className="rightpanel"></div>
                </div> 




            {/* <div className="containertest">
                <div className="item item1">1</div>
                <div className="item item2 test2 indentation">2</div>
                <div className="item item3">3</div>
                <div className="item item4">4</div>
                <div className="item item5">5</div>
            </div> */}
        
        </>
    )
}
export default Navbar

// div Tag >>height/width/css > block
