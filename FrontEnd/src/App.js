import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Paper } from '@material-ui/core'
import Home from './components/Food/kalijFile/UserIndex'
import { Zoom } from 'react-reveal';
import Foo from './components/Food/pages/footer/Footer';
import Image from './components/Food/KalijsGallery/imageGallery';
import Room from './components/Restaurant/RoomView/indexRoom';
import Gallery from './components/Food/KalijsGallery/reakGalery';
import Nav from './components/Food/pages/Navbar/navPage';
import Auth from './components/Food/Auth/Auth'
import About from './components/Food/pages/About'
import PostDetail from './components/Food/kalijFile/Component/PostDetail'
import Cart from './components/Food/pages/Cart/Cart'
import Contact from './components/Food/pages/Navbar/contact/contact'
import PageNotFound from './components/Food/pages/PageNotFound'
import Preload from './components/Food/pages/PreLoad/Preload'
import Verify from './components/Food/Auth/getVerify';
import ScrollToTop from './components/Food/pages/ScroolToTop';
import PostDetailOfRoom from './components/Restaurant/RoomView/postDetail/PostDetail';
import axios from 'axios';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
const App = () => {
  // const theme = createTheme({
  //   palette: {
  //     type: 'dark',
  //     primary: {
  //       main: '#fff',
  //     },
  //     secondary: {
  //       main: '#fff',
  //     },
  //   },
  // });
  const getVisitor = () => {
    axios.get('https://api.countapi.xyz/update/rhinospotnkalij.com/rskf/?amount=1').then(res => {
    }
    ).catch(err => {
      console.log(err);
    }
    )
  }
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getVisitor();
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
  // const user = JSON.parse(localStorage.getItem('profile'))
  return (
    loading ? <Preload /> :
      (
        <BrowserRouter>
          {/* <ThemeProvider theme={theme}> */}
          <React.StrictMode>
            <Paper>
              <Container maxWidth='xl' style={{
                margin: '0 auto',
                padding: '0px',
                overflow: 'hidden',
              }} >
                <ScrollToTop />
                <Nav cartItems={cartItems} />
                <Zoom>
                  <Routes>
                    <Route path="/contact" exact element={<Contact />} />
                    <Route path="/home" exact element={<Home handleAddProduct={handleAddProduct} />} />
                    <Route path="/" exact element={<Navigate to="/home?up=1" />} />
                    {/* <Route path="/admin" exact element={<Admin />} /> */}
                    {/* {user?.result.role === 1 ? <Route path="/" exact element={<Navigate to="/admin" />} /> : <Route path="/" exact element={<Navigate to="/" />} />} */}
                    <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemove={handleRemove} handleClearAll={handleClearAll} />} />
                    <Route path="/food/:id" exact element={<PostDetail handleAddProduct={handleAddProduct} />} />
                    <Route path="/room/:id" exact element={<PostDetailOfRoom />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/auth" exact element={<Auth />} />
                    <Route path="/users/:id/verify/:token" exact element={<Verify />} />
                    <Route path="/food" exact element={<Image />} />
                    <Route path="/food/search" exact element={<Image />} />
                    <Route path="/room" exact element={<Room />} />
                    <Route path="/gallery" exact element={<Gallery />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                  <Foo />
                </Zoom>
              </Container>
            </Paper>
          </React.StrictMode>
          {/* </ThemeProvider> */}
        </BrowserRouter>
      ))
};

export default App;