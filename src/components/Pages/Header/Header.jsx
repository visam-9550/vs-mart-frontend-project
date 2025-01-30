import React from 'react'
import Cookies from "js-cookie"
import {Link, Navigate, useNavigate} from "react-router-dom"
import { useState } from 'react'
import { HeaderContainer, NavItem, Logo, NavItemsContainer, CartLength, CartLogo, MenuIcon, MenuOptionsContainer, MenuOption } from './styledComponents'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  const navigate = useNavigate()
  const [isMenuIconTrue, setMenuIconTrue] = useState(false)
  const cartLength = useSelector((store)=>store.cartState.cartLength)
  const clickOnLogout = ()=>{
    Cookies.remove("userData")
    navigate("/login")
  }
  const clickOnMenuIcon = () =>{
    setMenuIconTrue(!isMenuIconTrue)
  }
  return (
    <>
    <HeaderContainer>
      <Logo src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1737611663/Vmart_3-removebg-preview_my2yc5.png" />
      <NavItemsContainer>
        <Link to ="/">
          <NavItem>
              Home
          </NavItem>
        </Link>
        <Link to ="/cart">
          <NavItem>
            
            <CartLogo>
              <AiOutlineShoppingCart />
            </CartLogo>
            <CartLength>{cartLength}</CartLength> 
          </NavItem>
        </Link>
          <NavItem onClick = {clickOnLogout}>
              Logout
          </NavItem>
      </NavItemsContainer>
      <MenuIcon onClick = {clickOnMenuIcon}>
        <RxHamburgerMenu />
      </MenuIcon>
    </HeaderContainer>
    {isMenuIconTrue && 
        <MenuOptionsContainer>
          <Link to ="/">
            <MenuOption onClick = {clickOnMenuIcon}>Home</MenuOption>
          </Link>
          <Link to ="/cart">
            <MenuOption onClick = {clickOnMenuIcon}>Cart</MenuOption>
          </Link>
            <MenuOption onClick = {clickOnMenuIcon}>Log out</MenuOption>

        </MenuOptionsContainer>
    }
    </>
  )
}

export default Header