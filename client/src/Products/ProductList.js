import React from 'react'
import {Link} from 'react-router-dom';
const ProductList = () => {
    return (
        <div>
            Product List
           <Link to="/add-products"> <span> <button> Add Product </button> </span> </Link>
        <div> <Link to="/update-product"> Product 1  </Link>  
       <span> <Link to="/delete-product"> Delete </Link> </span>   </div> 
        </div>
    )
}

export default ProductList
