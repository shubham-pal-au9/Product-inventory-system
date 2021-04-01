import React from 'react'
import { Link } from 'react-router-dom';
import './displaycategory.css';
const DisplayCategory = (props) => {
    const listProducts = ({productdata}) => {
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
                       <Link to="/update-product"> <i class="fas fa-edit"></i> </Link>
                       <Link to="/delete-product"> <i class="fas fa-trash-alt"></i></Link> 
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
