import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let prod_url = "http://localhost:9000/prods/";
const Products = () => {
    const [products_data, setProducts] = useState([]);
    
    const getProducts = () => {
        fetch(prod_url)
        .then((res)=> res.json())
        .then((data)=>{
            setProducts(data);
        });
    }


    useEffect(()=>{
        getProducts();
        
    }, [])
    const _delete = (_id ) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              fetch(`${prod_url}${_id}`,{
            method: 'DELETE',
            }).then((res)=>res.json())
            .then((data)=>{
                getProducts();
            });
            }
          })
        
    }



    return(
        <div className="px-2">
        <h1>Products</h1>
        <Link className="btn btn-success p-3" to="/AddProd">Add New Product</Link>
        <table className="mt-1 table table-striped m-auto">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">operations</th>
            </tr>
        </thead>
        <tbody>
            {
                products_data.map((el, idx)=>{
    
                    return(
                        <tr key={el.id}>
                        <th scope="row">{el.id}</th>
                            <td>{el.title}</td>
                            <td>{el.price}</td>
                            <td className="">
                            <button onClick={()=>{_delete(el.id)}} className="btn btn-danger">Delete</button>
                            <Link className="btn btn-info" to={`/products/${el.id}`}>View</Link>
                            <Link className="btn btn-primary" to={`/update/${el.id}`}>Edit</Link>
                        </td>
                    </tr>
                    )
                })
            }
        
        </tbody>
        </table>
        </div>
    )
}

export default Products;


/*

{
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
}



*/