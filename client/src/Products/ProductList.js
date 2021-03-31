import React from 'react'
import {Link} from 'react-router-dom';
const ProductList = () => {
    return (
        <div>
            Product List
           <Link to="/add-products"> <span> <button> Add Product </button> </span> </Link>
        </div>
    )
}

export default ProductList
