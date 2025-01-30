import React from 'react'
import { useState } from 'react'
import { AddProductContainer, Heading, FormContainer, InputContainer, Input, Label, SubmitButton, ResultMsg } from './styledComponents'


function AddProducts() {
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [details, setDetails] = useState("")
    const [available, setAvailable] = useState(true)
    const [category, setCategory] = useState("")
    const [url,setUrl] = useState("")
    const [data, setData] = useState({
        productName: "",
        price: "",
        brand: "",
        details: "",
        available: "",
        category: "",
        url: ""
    })
    const [resultMsg, setResultMsg] = useState("")
    const clickOnSubmit = async(event) =>{
        event.preventDefault();
        try{
            event.preventDefault();
            const productData = {
                product_name: data.productName,
                price: data.price,
                details: data.details,
                brand: data.brand,
                category: data.category,
                available: true,
                url: data.url
            }
            const options = {
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(productData)
            }
            const resp = await fetch("https://vs-mart-backend-project-3.onrender.com/addProduct", options)
            const respResult = await resp.json()
            setResultMsg(respResult.message)
            setData({
                productName: "",
                price: "",
                brand: "",
                details: "",
                available: "",
                category: "",
                url: ""
            })
        }catch(err){
            setResultMsg(err.message)
        }
        
    }
  return (
    <AddProductContainer>
        <Heading>Add Product</Heading>
        <FormContainer onSubmit = {clickOnSubmit} action = "POST">
            <InputContainer>
                <Label>Product name</Label>
                <Input type = "text" value = {data.productName} onChange = {(e) => setData({...data, productName :e.target.value})} />
            </InputContainer>
            <InputContainer>
                <Label>Price (in $)</Label>
                <Input type = "number" value = {data.price} onChange = {(e) => setData({...data, price :e.target.value})} />
            </InputContainer>
            <InputContainer>
                <Label>Brand</Label>
                <Input type = "text" value = {data.brand} onChange = {(e) => setData({...data, brand :e.target.value})} />
            </InputContainer>
            <InputContainer>
                <Label>Details</Label>
                <Input type = "text" value = {data.details} onChange = {(e) => setData({...data, details :e.target.value})} />
            </InputContainer>
            <InputContainer>
                <Label>Category</Label>
                <Input type = "text" value = {data.category} onChange = {(e) => setData({...data, category: e.target.value})} />
            </InputContainer>
            <InputContainer>
                <Label>Image url</Label>
                <Input type = "text" value = {data.url} onChange = {(e) => setData({...data, url:e.target.value})} />
            </InputContainer>
            <div>
                <SubmitButton type = "submit">Submit</SubmitButton>
            </div>
            <ResultMsg>{resultMsg}</ResultMsg>
        </FormContainer>
    </AddProductContainer>
  )
}

export default AddProducts