import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../componentStyles/product.css";
let prod_url = "http://localhost:9000/prods/";

const ProductDetails =()=>{
    const [product, setdata]= useState([]);
    let params = useParams();
    useEffect(()=>{
        fetch(`${prod_url}${params.productdId}`).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setdata(data);
        })
    }, [])
    return(
        <div>
            
            {
                product.image?(
                    <div className="img-hold">
                        <img src={product.image} alt="" />
                     </div>
                    
                ):(
                    <div className="loading">
                            
                    </div>
                )
            }
            
            
            <br />
            <hr />
            <p>
                <h1 className="display-1">Title</h1>
                {product.title}
            </p>
            <p>
                <h1 className="display-1">des</h1>
                {product.description}
            </p>
            
        </div>
    )
}

export default ProductDetails;