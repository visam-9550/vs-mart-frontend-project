import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'
import Cookies from "js-cookie"
import CartSlice from '../../Redux/Slices/CartSlice'
import { ProductItemDetailsContainer, 
    ProductImage, 
    ProductName, 
    Price, 
    Brand, 
    Details, 
    Category, 
    StockAvailable,
    SimillarProductsHeading,
    SimillarItemsContainer,
    AddToCart,
    Container,
    EmptySimillarProductsContainer,
    EmptySimillarProductsHeading,
    EmptySimillarProductsImage,
    SimillarProductsContainer,
    HRLine
 } from './styledComponents'
 import { useDispatch, useSelector } from 'react-redux'
 const CartActions = CartSlice.actions
function ProductItemDetails() {

    const {id} = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const [simillarProducts, setSimillarProducts] = useState([])
    const dispatch = useDispatch()
    const cartLength = useSelector((store) =>store.cartState.cartLength)

    const clickOnCartButton = async(id)=>{
        const value = JSON.parse(Cookies.get("userData"))
        const checkingCartItemInCart = await fetch("https://vs-mart-backend-project-3.onrender.com/findCartItem", {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({product_id: id, user_email: value.user_email})
        })
        const result = await checkingCartItemInCart.json()

        if(result.cartItem === null){
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify({product_id: id, user_email: value.user_email, quantity: 1, price: data.price})
            }
            const postResp = await fetch("https://vs-mart-backend-project-3.onrender.com/addcart", options)
            const respResult = await postResp.json()
            dispatch(CartActions.setCartLength(cartLength + 1))
        }else{
            const prevQuantity = result.cartItem.quantity
            const id = result.cartItem._id
            const putOptions = {
                method: "PUT",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({quantity: prevQuantity + 1})
            }
            const putResp = await fetch(`https://vs-mart-backend-project-3.onrender.com/cartItem/${id}`, putOptions)
            const putRespResult = await putResp.json()
            console.log(putRespResult)
        }
    }
    const fetchingData = async()=>{
        try{
            setLoading(true)
            const fetchingResp = await fetch(`https://vs-mart-backend-project-3.onrender.com/product/${id}`)
            const result = await fetchingResp.json()
            setLoading(false)
            setData(result.productData)
            const categoryName = result.productData.category
            // console.log(categoryName)
            const fetchingSimillarProductsResp = await fetch("https://vs-mart-backend-project-3.onrender.com/products")
            const simillarProductsResult = await fetchingSimillarProductsResp.json()
            const fetchedProductsData = simillarProductsResult.productsData
            // console.log(fetchedProductsData)
            const fetchedSimillarProducts = fetchedProductsData.filter((item) =>{
                return(
                    item.category === categoryName
                )
            })
            const filteredDataById = 
                fetchedSimillarProducts.filter((item)=>{
                    return(
                        item._id !== id
                    )
                })
            
            console.log("filteredDataById", filteredDataById)
            const updatedSimillarProducts = filteredDataById.map((product) =>({
                    productName: product.product_name,
                    id: product._id,
                    price: product.price,
                    brand: product.brand,
                    details: product.details,
                    category: product.category,
                    available: product.available,
                    url: product.url
                
            }))
            setSimillarProducts(updatedSimillarProducts)
            
        }catch(err){
            setLoading(false)
            setErr(true)
        }
    }
    useEffect(()=>{fetchingData()}, [id])
    // console.log(simillarProducts, "simillar products")
  return (
    <ProductItemDetailsContainer>
        <Container>
            <ProductImage src = {data.url} />
            <div>
                <ProductName>{data.product_name}</ProductName>
                <Brand>Brand name:- {data.brand}</Brand>
                <Price>Price:- ${data.price}</Price>
                <Category> Category:- {data.category}</Category>
                <Details>Details of product:- {data.details}</Details>
                <StockAvailable>{data.available}</StockAvailable>
                <AddToCart onClick = {() =>{clickOnCartButton(data._id)}}>Add to cart</AddToCart>
            </div>
        </Container>
        <HRLine />
        <SimillarProductsContainer>
        <SimillarProductsHeading>Simillar Products</SimillarProductsHeading>
        {simillarProducts.length > 0 ? 
        <SimillarItemsContainer>
            {simillarProducts.map((product) =>{
                return(
                    <ProductItem key = {product.id} productData = {product} />
                )
            })}
        </SimillarItemsContainer>
        : 
        <>
            <EmptySimillarProductsContainer>
                <EmptySimillarProductsImage src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1738211038/aebc8c60e30c83f3ab34c978733dab26-removebg-preview_eowril.png" />
                <EmptySimillarProductsHeading>No more simillar products.</EmptySimillarProductsHeading>
            </EmptySimillarProductsContainer>
        </>}
        </SimillarProductsContainer>
    </ProductItemDetailsContainer>
    
  )
}

export default ProductItemDetails