import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { SignupContainer, Container, Heading, InputContainer, Label, Input, SignupButtonContainer, LoginText, SignupButton, ResultMsg } from './styledComponents'
function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [resultMsg, setResultMsg] = useState("")
  
   const clickOnRegisterButton = async(event) =>{
    try{
      event.preventDefault();
      const userData = {
        user_email: email,
        password: password
      }
      const options = {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(userData)
      }
      const resp = await fetch("https://vs-mart-backend-project-3.onrender.com/signup", options)
      const respResult = await resp.json()
      setResultMsg(respResult.message)
      console.log(respResult.message)
    }catch(err){
      setResultMsg(err.message)
    }
   }
  return (
    <SignupContainer>
      <Container action = "POST" onSubmit = {clickOnRegisterButton}>
          <Heading>Register</Heading>
          <InputContainer>
            <Label>Email</Label>
            <br />
            <Input type = "text" value = {email} onChange = {(e) =>{setEmail(e.target.value)}} />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <br />
            <Input type = "password" value = {password} onChange = {(e)=>{setPassword(e.target.value)}} />
          </InputContainer>
          <SignupButtonContainer>
            <SignupButton type = "submit">Register</SignupButton>
            <Link to = "/login">
              <LoginText>login</LoginText>
            </Link>
          </SignupButtonContainer>
          <ResultMsg>{resultMsg}</ResultMsg>
      </Container>
    </SignupContainer>
  )
}

export default Signup