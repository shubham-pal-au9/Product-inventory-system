import React from 'react'
import { Link } from 'react-router-dom';
const UpdateProduct = () => {
        return (
    <div>
    <div class="d-flex justify-content-center"> <h1> Update Products </h1></div>  
    <form>
            <label for="exampleFormControlSelect1">Screen size</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>40inch</option>
                <option>43inch</option>
                <option>50inch</option>
                <option>55inch</option>
                </select>
            
            <label for="exampleFormControlSelect1">OS</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>Android</option>
                <option>Tizen</option>
                <option>WebOS</option>
                <option>tvOS</option>
                
                </select>
            
            <label for="exampleFormControlSelect1">Quality</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>4K</option>
                <option>8K</option>
                </select>
            
            <label for="exampleFormControlSelect1">Frame Rate</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>1024ghz</option>
                <option>720ghz</option>
                
                </select>
            
            <label for="exampleFormControlSelect1">Price</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>50,000</option>
                <option>55,500</option>
                <option>85,000</option>
                <option>65,000</option>
               
                </select>
            
            <button type="submit" class="btn btn-primary">Add Product</button> 
       
            <Link to="/">
                <button type="submit" class="btn btn-success">Go back</button>
            </Link>
           
                      
    </form>


        </div>
    )
    
}

export default UpdateProduct;
