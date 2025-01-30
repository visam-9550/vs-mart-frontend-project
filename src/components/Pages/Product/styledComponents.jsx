import styled from "styled-components"

export const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color:rgb(124, 110, 56);
    padding-bottom: 50px;
`
export const FilterContainer = styled.div`
    flex-direction: column;
    align-items: center;
    jsutify-content: center;
    background-color:rgb(198, 196, 196);
    height: 7vh;
    width: 100%;
    color: black;
    font-family: Roboto;
    font-weight: 700;
`
export const Input = styled.input`
    color: black;
    font-family: Roboto;
    font-weight: 700;
    height: 4vh;
    width: 300px;
    outline: none;
    border-radius: 3px;
`
export const Loader = styled.h1`
    type:spin; 
    color:#3498db;
     height:50;
      width: 50; 
`
export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 30px;
`
export const LeftButton = styled.button`
    outline: none;
    margin-right: 10px;
    font-size: 10px;
`
export const pageNumber = styled.p`
    font-weight: bold;
    font-size: 12px;
    color: red;
`
export const RightButton = styled.button`
    outline: none;
    margin-left: 10px;
    font-size: 10px;
`
export const NoProductsFoundContainer = styled.div`
    background-color: white;
    min-height: 60vh;
    width: 100%;
    background-color: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
`
export const NoProductsFoundImage = styled.img`
    height: 35vh;
    width: 30vw;
    background-size: cover;

`
export const NoProductsFoundHeading = styled.h1`
    font-family: Roboto;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 0px;
`
export const NoProductsFoundDescription = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
`