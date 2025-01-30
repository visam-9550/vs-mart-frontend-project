import React from 'react'
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Signup from './components/Pages/Signup/Signup'
import Cart from './components/Pages/Cart/Cart'
import Product from './components/Pages/Product/Product'
import ProductItem from './components/Pages/ProductItem/ProductItem'
import ProductItemDetails from './components/Pages/ProductItemDetails/ProductItemDetails'
import NotFound from './components/Pages/NotFound/NotFound'
import AddProducts from './components/AddProducts/AddProducts'
import CartItemReload from './components/Pages/CartItemsReload/CartItemReload'
import AdminLogin from './components/Pages/AdminLogin/AdminLogin'
import { Route, Routes} from "react-router-dom"
import ProtectedRoute from './components/Pages/ProtectedRoute/ProtectedRoute'
import AuthorizedProtectedRoute from './components/Pages/AuthorizedProtectedRoute/AuthorizedProtectedRoute'

function App() {
  return (

      <Routes>
        <Route element = {<AuthorizedProtectedRoute />} >
          <Route path = "/login" element = {
                                            <Login />
                                          } />
          <Route path = "/signup" element = {
                                           <Signup />
                                            } />
        </Route>
        <Route element = {<ProtectedRoute />}>
          <Route path = "/" element = {<Home />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path = "/products" element = {<Product />} />
          <Route path = "/product/:id" element = {<ProductItemDetails />} />
          <Route path = "/addProduct" element = {<AddProducts />} />
          <Route path = "/cartItemReload" element = {<CartItemReload />} />
        </Route>
        <Route path = "/adminLogin" element = {<AdminLogin />} />
        <Route path = "*" element = {<NotFound></NotFound>} />
        
      </Routes> 

  )
}

export default App

