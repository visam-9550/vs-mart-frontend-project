import styled from "styled-components"

export const CartContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #ffffff;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    
`
export const CartHeading = styled.h1`
    font-weight: 700;
    font-size: 24px;
    font-family: "Poppins", "Arial", sans-serif;
    color: black;
    text-align: center;
    text-decoration: underline;
`
export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
`
export const TotalPrice = styled.p`
    font-weight: 700;
    font-size: 24px;
    font-family: Roboto;
    text-align: right;
    color: black;
    margin-right: 50px;
`
export const PreviewButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px; 
`
export const PreveiewButton = styled.button`
    background-color: blue;
    color: white;
    font-weight: 700;
    font-size: 12px;
    border-radius: 4px;
    font-family: Roboto;
`
export const PreviewViewContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CloseIcon = styled.button`
    font-size: 10px;
    font-weight: bold;
    color: white;
    text-align: right;
    margin-top: 20px;
`
export const CartEmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const EmptyImage = styled.img`
    width: 30%;
    height: 30%;
    background-size: cover;
    margin-bottom: 0px;
`
export const MessageDescription = styled.p`
    color: black;
    text-align: center;
    font-weight: 500;
    margin-top: 0px;
`
export const Message = styled.p`
    color: black;
    text-align: center;
    font-weight: 700;
    margin-top: 0px;
    font-size: 20px;
    margin-bottom: 0px;
`