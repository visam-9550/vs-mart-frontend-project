import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 8vh;
    background-color:rgb(130, 95, 54);
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.img`
    background-size: cover;
    height: 90%;
    width: 100px;
    color: white;
`
export const NavItemsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    @media screen and (max-width: 576px){
        display: none;
    }
`
export const NavItem = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    cursor: pointer;
    position: relative;
    color: black;
    &:hover{
        color:rgb(157, 157, 155);
    }
`
export const CartLogo = styled.p`
    font-size: 24px;
    margin-bottom: 0px;
`
export const CartLength = styled.p`
    color:white;
    margin-top: 0px;
    margin-bottom: 0px;
    position: absolute;
    top: 0;
    font-weight: bold;
    font-size: 18px;

`
export const MenuIcon = styled.p`
    font-weight: bold;
    font-size: 24px;
    margin-right: 20px;
    @media screen and (min-width: 576px){
        display: none;
    }
`
export const MenuOptionsContainer = styled.div`
    background-color:rgb(61, 38, 116);
    position: absolute;
    top: 8vh;
    right: 0;
    min-height: 30vh;
    width: 140px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    z-index: 2;
    @media screen and (min-width: 576px){
        display: none;
    }
`
export const MenuOption = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: black;
    margin-bottom: 0px;
    margin-top: 0px;
`