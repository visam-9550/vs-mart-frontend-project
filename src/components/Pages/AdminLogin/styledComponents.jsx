import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.form`
    background-color: #b5b5b5;
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    box-shadow: 0px 0px 10px 10px black;
    @media screen and (max-width: 576px){
        width: 50%;
    }
`
export const Heading = styled.h1`
    font-weight: 700;
    font-size: 24px;
    color: black;
    text-align: center;
`
export const InputContainer = styled.div`
    margin-bottom: 15px;
`
export const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: black;
`
export const Input = styled.input`
    width: 80%;
    height: 5vh;
    font-size: 14px;
    border-style: none;
    border-radius: 6px;
    outline: none;
    background-color: #5c5b5b;
    padding-left: 10px;
    color: black;
    font-weight: bold;
    @media screen and (max-width: 576px){
        width: 90%;
    }
`
export const LoginButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LoginText = styled.button`
    background-color:rgb(4, 72, 95) ;
    font-weight: 700;
    font-size: 13px;
    font-family: Roboto;
    color: white;
    outline: none;
    margin-bottom: 0px;
`
export const DoHaveAccountText = styled.p`
    font-weight: 500;
    font-size: 16px;
    font-family: Roboto;
    margin-right: 10px;
    color: #2f4787;
    margin-top: 5px;
    text-align: center;
    &:hover{
        text-decoration: underline;
    }
`