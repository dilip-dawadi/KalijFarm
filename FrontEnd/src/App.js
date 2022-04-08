import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core'
import Home from './components/kalijFile/UserIndex'
import { Zoom } from 'react-reveal';
import Foo from './components/pages/footer/Footer';
import Image from './components/KalijsGallery/imageGallery';
import Nav from './components/pages/Navbar/navPage';
import Auth from './components/Auth/Auth'
import About from './components/pages/About'
import PostDetail from './components/kalijFile/Component/PostDetail'
import Cart from './components/pages/Cart/Cart'
import Contact from './components/pages/Navbar/contact/contact'
import PageNotFound from './components/pages/PageNotFound'
import Preload from './components/pages/PreLoad/Preload'
import Verify from './components/Auth/getVerify';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  const handleAddProduct = (product) => {
    // cart ma kai xaki nai paila hernya find method bata
    const productExist = cartItems.find(item => item._id === product._id);
    // yedi xa vanya product cart ma quality + 1 hunu haii
    if (productExist) {
      setCartItems(cartItems.map(item => item._id === product._id ? {
        ...productExist, quantity: productExist.quantity + 1
      } : item))
    }
    // yedi card ma product xaina vane new product add va 
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }
  const handleRemove = (product) => {
    const productExist = cartItems.find(item => item._id === product._id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((item) => item._id === product._id ? { ...productExist, quantity: productExist.quantity - 1 } : item)
      )
    }
  }
  const handleClearAll = () => {
    setCartItems([]);
    localStorage.removeItem('cart')
  }
  return (
    loading ? <Preload /> :
      (
        <BrowserRouter>
          <Container maxWidth='xl' style={{
            margin: '0 auto',
            padding: '0px',
            overflow: 'hidden',
          }} >
            <Nav cartItems={cartItems} />
            <Zoom>
              <Routes>
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/kalijs" exact element={<Home handleAddProduct={handleAddProduct} />} />
                <Route path="/" exact element={<Navigate to="/kalijs?adminPage=1" />} />
                <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemove={handleRemove} handleClearAll={handleClearAll} />} />
                <Route path="/kalijs/:id" exact element={<PostDetail handleAddProduct={handleAddProduct} />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/auth" exact element={<Auth />} />
                <Route path="/users/:id/verify/:token" exact element={<Verify />} />
                <Route path="/kalijs/all" exact element={<Image />} />
                <Route path="/kalijs/all/search" exact element={<Image />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Foo />
            </Zoom>
          </Container>
        </BrowserRouter>
      ))
};

export default App;