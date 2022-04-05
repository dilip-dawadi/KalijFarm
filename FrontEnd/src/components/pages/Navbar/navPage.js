import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import Login from './user'
const NavStyles = styled.nav`
.nav{
  position: fixed;
  z-index: 100;
  top: 1;
  left: 0;
  right: 0;
  width: 97.5%;
  background-color: #fcfcfc;
  margin: 0px auto;
  border-radius: 0px 0px 10px 10px;
  opacity: 0.99;
}
  ul{
    max-width: 800px;
    margin: 9.5px auto;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 12px;
      margin: 0px 4px;
      transition: 0.6s ease background-color;
      &:hover {
        background-color: #ebebeb;

      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 0.8rem 3rem;
      font-size: 1.2rem;
      text-decoration: none;
      color: black;
      border-radius: 12px;
      outline: none;
    }
    .active {
      transition: 2s ease font-weight;
      background-color: #ebebeb;
      color: black;
      opacity: 1;
    }
  }
  .Signin{
    background-color: coral;
    opacity: 0.95;
    border-radius: 10px;
    color: white;
  }
  .mobile-menu-icon {
    position: fixed;
    right: 2rem;
    font-size: 30px;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    color: lightgrey;
    display: none;
    outline: none;
    &:hover {
        color: grey;
      }
    * {
      pointer-events: none;
    }
  }
  .cart {
    text-decoration: none;
    position: fixed;
    right: 5.5rem;
    top: 1rem;
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
    font-size: 25px;
  }
  @media only screen and (max-width: 1070px) {
    .cart {
      top: 1.2rem;
      left: 3rem;
      width: 3rem;
    }
  }
  @media only screen and (max-width: 890px) {
   ul li a{
      font-size: 1.1rem;
      padding: 1rem 2.4rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .hide-item {
      transform: translateY(calc(-110% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
      right: 0rem;
    }
    .navItems {
      --top: 0.5rem;
      transition: 0.3s ease transform;
      background-color: #f5f5f5;
      padding: 2rem;
      width: 100%;
      max-width: 350px;
      border-radius: 12px;
      position: absolute;
      right:  0rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        color: grey;
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
    @media only screen and (max-width: 550px) {
      .navItems {
          max-width: 280px;
      }
      }
      @media only screen and (max-width: 440px) {
        .navItems {
            max-width: 240px;
        }
        }
        @media only screen and (max-width: 344px) {
          .navItems {
              max-width: 200px;
          }
          }
`;

export default function NavMenu({ cartItems }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [nav, setNav] = useState(false);
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

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNav(true);
    }
    else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <NavStyles>
      <div className={'nav'}>
        <div
          className={nav ? 'mobile-menu-icon menu' : 'mobile-menu-icon'}
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
            <Link
              style={{ color: 'black', fontWeight: 'bold' }}
              to="/kalijs?adminPage=1"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Home
            </Link>
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
          <li>
            <NavLink
              to="/kalijs/all?page=1"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Foods
            </NavLink>
          </li>
          <li>

            <NavLink
              to="/contact"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Contact
            </NavLink>
          </li>
          <li>
            {user?.result ? (
              <Login />
            ) : (
              <NavLink className='Signin' to="/auth">Sign in</NavLink>
            )}
          </li>

        </ul>

        <NavLink to="/cart" className='cart'><FaShoppingCart /> <span> {cartItems.length === 0 || !user?.result?.email ? 0 : cartItems.length}</span></NavLink>
      </div>
    </NavStyles>
  );
}