import React from 'react'
import { Link } from 'react-router-dom'
import { ProductItemContainer, ProductImage, ProductName, Price , Brand,GetMoreContainer,  GetMore } from './styledComponents'
function ProductItem(props) {
  const productData = props
  
  return (
    <ProductItemContainer>
        <ProductImage src = {productData.productData.url} />
        <ProductName>{productData.productData.productName}</ProductName>
        <Brand>Brand:- {productData.productData.brand}</Brand>
        <Price>Price:- ${productData.productData.price}</Price>
        <GetMoreContainer>
          <Link to= {`/product/${productData.productData.id}`}>
            <GetMore>Get more</GetMore>
          </Link>
        </GetMoreContainer>
    </ProductItemContainer>
  )
}

export default ProductItem