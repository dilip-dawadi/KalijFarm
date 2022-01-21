import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import {FaShoppingCart} from 'react-icons/fa';
import Login from './user'
const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 98%;
  margin: 0.2px 10px;
  background: #F5F5F5;
  border-radius: 12px;
  ul {
    max-width: 1200px;
    margin: 3px auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 16px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: LightGray;
      }
    }
    .num {
      padding: 0rem 0.3rem;
      font-size: 0.5rem;
      text-decoration: none;
      border-radius:20px;
      color: white;
      background-color: coral;
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 0.8rem 3rem;
      font-size: 1.1rem;
      text-decoration: none;
      color: #C0C0C0;
      outline: none;
    }
    .active {
      color: black;
      font-weight: 800;
    }
  }
  .Signin{
    background-color: #E97D3F;
    border-radius: 10px;
    color: white;
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    font-size: 30px;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    color: #C0C0C0;
    display: none;
    outline: none;
    &:hover {
        color: #000000;
      }
    * {
      pointer-events: none;
    }
  }
  .cart {
    text-decoration: none;
    position: absolute;
    right: 2rem;
    top: 0.7rem;
    padding: 4px 8px;
    cursor: pointer;
    color: #C0C0C0;
    outline: none;
    color: white;
    background-color: coral;
    border-radius: 12px;
    &:hover {
        color: white;
      }
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .cart {
      top: 1rem;
      left: 2rem;
      width: 2rem;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: #DCDCDC;
      padding: 2rem;
      width: 90%;
      max-width: 350px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .navItems {
        max-width: 200px;
    }
    }
`;

export default function NavMenu({cartItems}) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem('cart')
    navigate('/auth');
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
       }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const [showNav, setShowNav] = useState(false);
  const cart = () => { 
    alert("Moving to Cart Page")}

  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/kalijs"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/cart"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <FaShoppingCart style={{color: 'coral', fontSize:'15px' }} /> <span className='num'> {cartItems.length=== 0 ? 0: cartItems.length}</span>
          </NavLink>
        </li> */}
        <li>
        {user?.result ? (
          <Login />
        ) : (
        <NavLink className='Signin' to="/auth">Sign in</NavLink>
        )}
        </li>

      </ul>
      
        <NavLink to="/cart" className='cart' onClick={cart}><FaShoppingCart /> <span className='num'> {cartItems.length=== 0 ? 0: cartItems.length}</span></NavLink>
    </NavStyles>
  );
}