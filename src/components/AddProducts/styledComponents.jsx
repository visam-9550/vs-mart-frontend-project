import styled from "styled-components"

export const AddProductContainer = styled.div`
    background-color:rgb(73, 90, 98);
    width: 100vw;
    min-height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Heading = styled.h1`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 60%;
    background-color:rgb(182, 181, 181);
    padding-top: 30px;
    padding-bottom: 30px;
    @media screen and (max-width: 767px){
        width: 90%;
    }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`
export const Label = styled.label`
    font-weight: 700;
    font-size: 14px;
    color: black;
    font-family: Roboto;
    margin-bottom: 0px;
`
export const Input = styled.input`
    height: 4vh;
    width: 80%;
    font-weight: 700;
    outline: none;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-width: 0px;
    padding: 5px 10px 5px 10px;
    color: black;
    &:focus{
        background-color: white;
    }
    @media screen and (max-width: 576px){
        width: 90%;
    }
`
export const SubmitButton = styled.button`
    font-family: Roboto;
    font-size: 12px;
    color: white;
    background-color: blue;
    outline: none;
    border-radius: 3px;
    border-width: 0px;
    &:active{
        background-color: green;
    }
`
export const ResultMsg = styled.p`
    color: black;
    font-weight: bold;
    font-size: 12px;
    font-family: Roboto;
    text-align: center;
`