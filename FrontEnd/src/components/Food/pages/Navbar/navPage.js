import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import Login from './user'
import { Paper } from '@material-ui/core';
const NavStyles = styled.nav`
.nav{
  position: fixed;
  z-index: 100;
  top: 1;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fcfcfc;
  margin: 0px auto;
  opacity: 1;
}

  ul{
    max-width: 840px;
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
      padding: 0.8rem 2.7rem;
      font-size: 1.05rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      text-decoration: none;
      color: black;
      border-radius: 12px;
      outline: none;
    }
    .active {
      transition: 1s ease;
      font-weight: 600;
      color: black;
      opacity: 1;
    }
  }
  .Signin{
    background-image: linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e);
    letter-spacing: 2px;
    opacity: 1;
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
    color: gray;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .cart {
    text-decoration: none;
    position: fixed;
    right: 5.5rem;
    top: 1rem;
    padding: 4px 12px;
    cursor: pointer;
    outline: none;
    color: white;
    background-image: linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e);
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
  @media only screen and (max-width: 1100px) {
    .cart {
      top: 1.2rem;
      padding: 4px 8px;
      left: 1rem;
      width: 3rem;
    }
  }
  @media only screen and (max-width: 970px) {
    ul li{
      margin: 0px 8px;
    }
   ul li a{
      padding: 0.8rem 1.5rem;
    }
    .cart {
      top: 1rem;
      padding: 4px 4px;
      left: 0.5rem;
      width: 3rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .cart {
      padding: 4px 8px;
      left: 2rem;
    }
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
      right:  1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        color: gray;
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
    <Paper>
      <NavStyles>
        <div className={'nav'}>
          <div
            className={'mobile-menu-icon'}
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
                to="/home?up=1"
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
                to="/food"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/room"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Room
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
                <Link className='Signin' to="/auth" onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}>Sign in</Link>
              )}
            </li>

          </ul>

          <NavLink to="/cart" className='cart'><FaShoppingCart /> <span> {cartItems.length === 0 || !user?.result?.email ? 0 : cartItems.length}</span></NavLink>
        </div>
      </NavStyles>
    </Paper>
  );
}