
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Update = () => {
    const [tit, settit] = useState('');
    const [pri, setpri] = useState(0);
    const [prod, setprod] = useState(0);
    let params = useParams();

    let getProd = `http://localhost:9000/prods/${params.prodid}`;

    useEffect(()=>{
        axios({
            method:'get',
            url:getProd
        }).then((res)=>{
            console.log(res.data);
            setprod(res.data);
        })
    }, [])
    let nav = useNavigate();
    const click = (e) => {
        e.preventDefault();
        
       axios({
        method:'put',
        url:getProd,
        data:{
            title:(tit)?tit:prod.title,
            price:(pri)?pri:prod.price,
            id:prod.id,
            description:prod.description,
            category:prod.category,
            image:prod.image,
            rating:prod.rating,
        }
       });
       nav('/products')
    }

    return(
        <>
            <form>
                <input type="text" placeholder="title" onChange={(e)=>(settit(e.target.value))}/>
                <input type="text" placeholder="price" onChange={(e)=>(setpri(e.target.value))}/>
                <button onClick={(e)=>click(e)}>Edit</button>
            </form>
        </>
    )
}


export default Update;




/*
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}


*/