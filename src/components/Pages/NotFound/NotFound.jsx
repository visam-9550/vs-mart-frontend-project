import React from 'react'
import { NotFoundContainer, Heading, Image, Description } from './styledComponents'

function NotFound() {
  return (
    <NotFoundContainer>
      <Image src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1737720541/404-Error-removebg-preview_qhfxqu.png" />
     
      <Heading>Try Again.Page Not Found...!</Heading>
      <Description>Oops! The page you’re looking for doesn’t exist. Try checking the URL or go back to the homepage.</Description>
    </NotFoundContainer>
  )
}

export default NotFound