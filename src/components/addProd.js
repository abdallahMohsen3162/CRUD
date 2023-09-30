import { useState } from "react";
import  axios from "axios";
import { useNavigate } from "react-router-dom";
let urlpost = "http://localhost:9000/prods";


const AddProd =() => {
    const [title, settitle] = useState('');
    const [price, setPrice] = useState('');
    const [des, setdes] = useState('');
    let navi = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        
        axios.post(urlpost,{
            title:title,
            price:price
        })
        .then((res)=>{
            console.log(res);
        })
        navi("/products");
    }




    return(
        <>
            <div className="form">
                <form>
                <input type="text" placeholder="title" onChange={(e)=>{settitle(e.target.value)}}/>
                <input type="text" placeholder="price" onChange={(e)=>{setPrice(e.target.value)}}/>
                <input type="text" placeholder="description" />
                <input type="text" placeholder="category" />
                <button onClick={(e)=>{submitForm(e)}}>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddProd;



