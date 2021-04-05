import React from 'react';
import Category from '../Category/Category';
import {BrowserRouter, Route} from 'react-router-dom';
import AddProducts from '../Products/AddProducts';
import Home from '../Home/Home';
import UpdateProducts from '../Products/UpdateProduct';


function Routing() {
  return (
    <BrowserRouter>
      <div>
          <Route exact path='/' component={Home}/>
          <Route path='/category' component={Category}/>
          <Route path='/add-products' component={AddProducts}/>
          <Route path='/update-product/:id' component={UpdateProducts}/>
          
      </div>
    </BrowserRouter>
  );
}

export default Routing;
