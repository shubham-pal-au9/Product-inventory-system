import React from 'react'
import { Link } from 'react-router-dom';
import './displaycategory.css';
const DisplayCategory = (props) => {

    const DeleteProduct =(ID) => {
        console.log(ID)
        fetch(`http://localhost:9700/deleteProduct/${ID}`,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
        })
        
    }
    const listProducts = ({productdata}) => {
        console.log("Product Test>>>>",productdata._id)
        if(productdata){
            
            return productdata.map((item) => {
                
                return(
                    <div>
                        
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.images}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                   {item.os} TV <br/> <br/>
                                   INR: {item.price}

                                </div>
                            </div> <br/> <br/>
                       <Link to={`/update-product/${item._id}`}> <i class="fas fa-edit"></i> </Link>
                        
                       <button className="btn btn-primary" onClick={(ID) => DeleteProduct(item._id)}> Delete </button>
                       
                        </div>
                    
                     
                   </div>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    List of Products
                </p> 
                
                <Link to="/add-products" className="btn btn-primary">Add Product</Link> <br/> <br/>
                <p className="quickSearchSubHeading">
                    Television
                </p>
                <br/>
                {listProducts(props)}
            </div>
        </div>
    )
}

export default DisplayCategory;
