import styled from "styled-components"

export const ProductItemContainer = styled.div`
    width: 15vw;
    height: 40vh;
    background-color:rgb(198, 196, 196);
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform: translateY(10px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
    @media screen and (max-width: 576px){
        width: 75%;
    }
    @media screen and (min-width: 577px) and (max-width: 767px){
        width: 40%;
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
        width: 30%;
    }
`
export const ProductImage = styled.img`
    width: 80%;
    height: 40%;
    background-size: cover;
    @media screen and (max-width: 576px){
        width: 60%;
        height: 60%;
    }
    @media screen and (min-width: 577px) and (max-width: 767px){
        width: 50%;
        height: 50%;
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
        width: 60%;
        height: 60%;
    }
`
export const ProductName = styled.p`
    font-weight: 700;
    font-size: 16px;
    font-family: Roboto;
    color: black;
    margin-bottom: 0px;
    text-align: center;
`
export const Price = styled.p`
    font-size: 14px;
    font-weight: 500;
    font-family: Roboto;
    color: black;
    margin-bottom: 0px;
    margin-top: 0px;
`
export const Brand = styled.p`
    font-weight: 500;
    font-size: 12
    px;
    color: black;
    margin-bottom: 0px;
    margin-top: 0px;
`
export const GetMoreContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    margin-right: 20px;
    margin-top: auto;
    margin-bottom:20px;
`

export const GetMore = styled.text`
    color: blue;
`