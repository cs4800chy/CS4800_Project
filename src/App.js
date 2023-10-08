import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home.js';
import Buy from './components/pages/Buy.jsx';
import Sell from './components/pages/Sell.js';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Login} from "./Login";
import {Register} from './Register'
import {commerce} from './lib/commerce'
import Cart from './components/Cart/Cart'
import Checkout  from "./components/CheckoutForm/Checkout/Checkout";
import UserPool from './UserPool'
import { Amplify, Auth } from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react'
import awsExports from './aws-exports';
Amplify.configure(awsExports);



export function App ({signOut, user}) {
  const [currentForm, setCurrentForm] = useState('login');
  const handleUpdateCartQuantity = async (productId, quantity) => {
    

  };
  const handleCheckout = async () => {
    try {
      const { id } = await commerce.cart.checkout.generateToken(cart.id, {
        type: 'cart'
      });
      // Redirect to the checkout page or handle the generated token as needed
      // For example, you can use window.location.href to redirect to the checkout URL
      window.location.href = `YOUR_CHECKOUT_URL?id=${id}`;
    } catch (error) {
      console.error('Error generating checkout token:', error);
    }
  };

  // Define the handleRemoveFromCart function
  const handleRemoveFromCart = async (productId) => {
    const updatedCart = await commerce.cart.remove(productId);
    setCart(updatedCart);
  };
   const toggleForm = (formName) => {
    setCurrentForm(formName);
   }
   const[products,setProducts] = useState([]);
   const [cart, setCart] = useState({line_items: []});
   
   const fetchProducts = async () =>{
      const {data} = await commerce.products.list();

      setProducts(data);
   }
   const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve());

   }

   const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity));
}

   useEffect(() => {
    fetchProducts();
    fetchCart();
   }, []);
   console.log(cart);
  return(
    <>
    <Router>
       <Navbar totalItems={cart.total_items} />
       <Routes>
         <Route path='/' element = {<Home/>} />
         <Route path='/buy' element = {<Buy products={products} onAddToCart={handleAddToCart} />}/>
         <Route path='/sell' element = {<Sell/>}/>
         <Route path='/cart' element = {<Cart cart={cart}  onUpdateCartQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart}  onCheckout={handleCheckout} />}/>
         <Route path='/checkout' element = {<Checkout/>}/>
         <Route path='/signIn' element = {<div className="App">
         
   {
     currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Register  onFormSwitch = {toggleForm}/>
   }
 
   </div>}/>
         </Routes>
       </Router>
       
      </>
  );

}
export default withAuthenticator(App)




/* <>
<Router>
   <Navbar/>
   <Routes>
     <Route path='/' element = {<Home/>} />
     <Route path='/buy' element = {<Buy/>}/>
     <Route path='/sell' element = {<Sell/>}/>
     <Route path='/signIn' element = {<SignIn/>}/>
     </Routes>
   </Router>
   
  </> */


  // <div className="App">
  // {
  //   currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Register  onFormSwitch = {toggleForm}/>
  // }
 
  // </div>

// totalItems={cart.total_items}
//Buy products={products} onAddToCart={handleAddToCart}