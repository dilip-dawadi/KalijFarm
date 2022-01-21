import React,{useState, useEffect} from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/kalijFile/UserIndex'
import Foo from './components/pages/footer/Footer';
import Image from './components/pages/imageGallery';
import  Nav from './components/pages/Navbar/navPage'
import Auth from './components/Auth/Auth'
import About from './components/pages/About'
import PostDetail from './components/Admins/Admin/Posts/Post/PostDetail' 
import Cart from './components/pages/Cart/Cart'
import PageNotFound from './components/pages/PageNotFound'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
const App = () => {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage); 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  const handleAddProduct =(product) => {
    // cart ma kai xaki nai paila hernya find method bata
    const productExist = cartItems.find(item => item._id === product._id);
    // yedi xa vanya product cart ma quality + 1 hunu haii
    if (productExist) {
      setCartItems(cartItems.map(item => item._id === product._id ? {
        ...productExist, quantity: productExist.quantity + 1
      }: item))
    }
    // yedi card ma product xaina vane new product add va 
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }
  const handleRemove = (product) => {
    const productExist = cartItems.find(item => item._id === product._id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item._id !== product._id));
    }else{
      setCartItems(
        cartItems.map((item) => item._id === product._id ? {...productExist, quantity: productExist.quantity -1}:item)
        )
    }
  }
  const handleClearAll = () => {
    setCartItems([]);
    localStorage.removeItem('profile')
  }
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
    <Nav cartItems={cartItems} />
      <Routes>
      <Route path="/kalijs" exact  element={<Home handleAddProduct={handleAddProduct} />} />
      <Route path="/" exact element={<Navigate to = "/kalijs" />} />
      <Route path="/cart" exact  element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemove={handleRemove} handleClearAll={handleClearAll} />} />
      <Route path="/kalijs/:id" exact element={<PostDetail />} />
      <Route path="/about" exact  element={<About />} />
        <Route path="/auth" exact  element={<Auth />} />
        <Route path="/gallery" exact  element={<Image />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Foo />
    </Container>
  </BrowserRouter>
)}

export default App;