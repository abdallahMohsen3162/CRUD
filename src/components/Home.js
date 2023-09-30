import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import search_icon from "../componentStyles/images/search-icon.svg";
let prod_url = 'http://localhost:9000/prods';
const Home = () => {
    const [products_data, setProducts] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);
    const [arr, setarr] = useState([]);
    useEffect(()=>{
        fetch(prod_url)
        .then((res)=> res.json())
        .then((data)=>{
            setProducts(data);
  
        });

        
    }, []) 
    //search
    let match = (str1, str2) => {
        let lim = Math.min(str1.length, str2.length);
        for(let i = 0;i<lim;i++){
            if(str1[i] !== str2[i]){
                return 0;
            }
        }
        return 1;
    }


    let getter = (e) => {
        
        let arr = [];
        for(let i = 0; i< products_data.length; i++){
            let title = products_data[i].title;
            title = title.split(" ");
            for(let j = 0 ; j < title.length; j++){
                if(match(searchTerm , title[j].toLowerCase())){
                    arr.push(products_data[i])
                    break;
                }
            }
        }
        setarr(arr);
        setsearchTerm(e.target.value)
    }
    //end search

    return(
        <div> 
        <div className="container-fluid">
            <div className="row ">
                <div className="col-lg-12 search">
      
                    <input placeholder=" Search" type="text" onChange={(e)=>{getter(e)}}/>
                    {
                        searchTerm?(
                            <div className="results">
                                {
                                    arr.map((el, idx)=>{
                                        return(
                                            <div key={el.id}>
                                                <div>
                                                    <img src={el.image} alt="" />
                                                    <Link to={`/products/${el.id}`}> {el.title} </Link>
                                                </div>
                                                <img className="" src={search_icon} alt="" />
                                            </div>
                                           
                                        )
                                    })
                                }
                            </div>
                        ):(
                           ""
                        )
                    }
                </div>

               
                    

                
            </div>
        </div>

        
        </div>
    )
}

export default Home;


