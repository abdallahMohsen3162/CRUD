
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../componentStyles/images/arrow.png"
const Sidebar = (props) => {
    const ref = useRef(null);
    const [btn,setbtn] = useState("open");

    let openSide =()=>{
        if(ref.current.classList.contains("open")){
            ref.current.classList.remove("open");
            ref.current.classList.add("close");
        }else{
            ref.current.classList.remove("close");
            ref.current.classList.add("open");
        }

    }
    return(
        <div ref={ref} className="side-small close">
            {
                props.flag?(
                    <button onClick={()=>{openSide(); setbtn(btn==="open"?"close":"open")}} className="show-btn" ><img src={arrow} alt="" /></button>
                ):(
                    ""
                )
            }
        <ul className="list-unstyled ">
            <li>
                <Link to="/">Get All products</Link>
            </li>

            <li>
                <Link to="/products">Get All cats</Link>
            </li>
        </ul>
        </div>
    );
}

export default Sidebar;