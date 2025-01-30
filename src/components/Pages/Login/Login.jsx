import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Cookie from "js-cookie"
import { LoginContainer, Container, Heading, InputContainer, Label, Input, LoginButtonContainer, LoginText, DoHaveAccountText } from './styledComponents'
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [resultMsg, setResultMsg] = useState("")
  const navigate = useNavigate()
  
  const clickOnLogin = async(event) =>{
    try{
      event.preventDefault()
      const userData = {
        user_email: email,
        password: password
      }
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
      }
      const resp = await fetch("https://vs-mart-backend-project-3.onrender.com/login", options)
      const respResult = await resp.json()
      if (respResult.status === "success"){
        const userDataToken = {
          token: respResult.token, user_email: userData.user_email
        }
          Cookie.set("userData", JSON.stringify(userDataToken), {expires: 7})
          navigate("/")
      }
    }catch(err){
      setResultMsg(err.message)
    }
  }
  return (
    <LoginContainer>
      <Container onSubmit = {clickOnLogin} action = "POST">
          <Heading>Login</Heading>
          <InputContainer>
            <Label>Email</Label>
            <br />
            <Input type = "text" value = {email} onChange = {(e) =>{setEmail(e.target.value)}} />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <br />
            <Input type = "password" value = {password} onChange = {(e) =>{setPassword(e.target.value)}}/>
          </InputContainer>
          <LoginButtonContainer>
            <LoginText type = "submit">Login</LoginText>
            <Link to = "/signup">
              <DoHaveAccountText> Don't have an account / Register</DoHaveAccountText>
            </Link>
          </LoginButtonContainer>
          <p>{resultMsg}</p>
      </Container>
      
    </LoginContainer>
  )
}

export default Login