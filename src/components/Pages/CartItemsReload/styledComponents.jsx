import styled from "styled-components"

export const CartItemContainer = styled.div`
    width: 70%;
    height: 18vh;
    background-color:rgb(141, 175, 167);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    &:hover{
        background-color:rgb(110, 147, 138);
    }
    @media screen and (max-width: 576px){
        flex-direction: column;
        height: 100%;
    }
    
`
export const ProductImage = styled.img`
    width: 14vw;
    height: 80%;
    background-size: cover;
    border-radius: 10px;
    margin-left: 20px;
    opacity: 0.7;
    &:hover{
        opacity: 1;
        box-shadow: 0px 0px 5px 5px black;
    }
    @media screen and (max-width: 576px){
         width: 20vw;
        height: 80%;
        margin-bottom: 0px;
        margin-top: 5px;
        margin-left: 0px;
    }
`
export const ProductDetailsContainer = styled.div`
    margin-left: 0px;
    @media screen and (max-width: 576px){
        margin-top: 5px;
        background-color: rgb(87, 161, 144);
        width: 100%;
    }
`
export const ProductName = styled.p`
    font-family: Roboto;
    font-size: 18px;;
    font-weight: 700;
    color: black;
    @media screen and (max-width: 576px){
        text-align: center;
        margin-bottom: 0px;
    }
`
export const Price = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    margin-top: 0px;
    color: black;
    @media screen and (max-width: 576px){
        text-align: center;
        
    }
`
export const Brand = styled.p`
    font-size: 14px;;
    font-weight: 500;
    margin-bottom: 0px;
    font-family: "Times New Roman", Times, serif;
    color:rgb(16, 76, 164);
    @media screen and (max-width: 576px){
        margin-top: 0px;
        text-align: center;
    }
`
export const DeleteIcon = styled.p`
    font-size: 24px;;
    font-weight: bold;
    margin-right: 30px;
    cursor: pointer;
    @media screen and (max-width: 576px){
         margin-right: 0px;
         margin-top: 0px;
    }
`
export const QunatityButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`
export const IncreseButton = styled.button`
    color: white;
    font-weight: bold;
    font-size: 10px;
    outline: none;
    width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`
export const DecreseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 10px;
    outline: none;
    width: 40px;
    height: 20px;
    margin-right: 10px;
`
export const Quantity = styled.p`
    color: black;
    font-weight: bold;
    font-size: 16px;
    font-family: Roboto;
`