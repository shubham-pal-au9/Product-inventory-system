import React from 'react';
import Category from '../Category/Category';
import {BrowserRouter, Route} from 'react-router-dom';
import ProductList from '../Products/ProductList';
import AddProducts from '../Products/AddProducts';
import Home from '../Home/Home';
import UpdateProducts from '../Products/UpdateProduct';
import DeleteProduct from '../Products/DeleteProduct';

function Routing() {
  return (
    <BrowserRouter>
      <div>
          <Route exact path='/' component={Home}/>
          <Route path='/category' component={Category}/>
          <Route path='/product-list' component={ProductList}/>
          <Route path='/add-products' component={AddProducts}/>
          <Route path='/update-product' component={UpdateProducts}/>
          <Route path='/delete-product' component={DeleteProduct}/>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
