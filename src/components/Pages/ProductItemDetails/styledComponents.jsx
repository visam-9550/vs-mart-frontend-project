import styled from "styled-components"

export const ProductItemDetailsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color:rgb(214, 211, 211);
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    // margin-left: 50px;
    padding-top: 40px;
    padding-bottom: 40px;
    @media screen and (max-width: 576px){
        flex-direction: column;
        
    }
`
export const ProductImage = styled.img`
    width: 20%;
    height: 90%;
    background-size: cover;
    margin-right: 30px;
    border-radius: 10px;
    margin-left: 50px;
    @media screen and (max-width: 576px){
        width: 40%;
    }
`
export const ProductName = styled.p`
    font-weight: 700;
    font-size: 28px;
    font-family: Roboto;
    color: black;
    text-decoration: underline;
    margin-bottom: 0px;
    @media screen and (max-width: 576px){
        text-align: center;
        font-size: 20px;
        text-decoration: none;
    }
`
export const Details = styled.p`
    font-weight: 700;
    font-size: 12px;
    font-family: Roboto;
    color: black;
`
export const Price = styled.p`
    font-weight: 700;3
    font-size: 14px;
    font-family: Roboto;
    color: black;
    margin-top: 0px;
    margin-bottom: 0px;
`
export const StockAvailable = styled.p`
    font-weight: 700;
    font-size: 24px;
    font-family: Roboto;
    color: black;
`
export const Category = styled.p`
    font-weight: 700;
    font-size: 14px;
    font-family: Roboto;
    color: black;
    margin-top: 0px;

`
export const AddToCart = styled.button`
    border-radius: 5px;
    outline: none;
    background-color:rgb(236, 176, 8);
    font-weight: 700;
    font-family: Roboto;
    font-size: 14px;
`
export const Brand = styled.p`
    font-weight: 700;
    font-size: 14px;
    font-family: Roboto;
    color: black;
    margin-bottom: 0px;
`
export const SimillarProductsHeading = styled.h1`
    font-weight: 700;
    font-size: 20px;
    font-family: Roboto;
    color: black;
    text-align: center;
    text-decoration: underline;
`
export const SimillarItemsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 576px){
        flex-direction: column;
    }
`
export const EmptySimillarProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const EmptySimillarProductsHeading = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: black;
    margin-top: 0px;
`
export const EmptySimillarProductsImage = styled.img`
    width: 35vw;
    height: 30vh;
    background-size: cover;
    margin-bottom: 0px;
`
export const SimillarProductsContainer = styled.div`
    background-color:rgb(141, 158, 164);
    min-height: 50vh;
    width: 100%;
    margin-top: 0px;
    padding-top: 20px;
`
export const HRLine = styled.hr`
    margin-bottom: 0px;
    border-width: 2px;
    border-color: black;
`
export const ShareButton = styled.button`
    margin-right: 20px;
    background-color:rgb(47, 105, 143);
    border-radius: 5px;
    font-weight: 700;
    font-family: Roboto;
    font-size: 14px;
    outline: none;
    &:active{
        background-color: black;
    }
`