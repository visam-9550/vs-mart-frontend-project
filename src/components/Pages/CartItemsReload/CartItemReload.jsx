import React, { useEffect, useState } from 'react';
import { MdOutlineDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { 
  CartItemContainer, ProductImage, ProductName, 
  Quantity, IncreseButton, DecreseButton, 
  QunatityButtonsContainer, DeleteIcon, Brand, Price,
  ProductDetailsContainer
} from './styledComponents';
import CartSlice from '../../Redux/Slices/CartSlice';

const cartActions = CartSlice.actions;

function CartItemReload({ cartProduct }) {
    console.log(cartProduct, "cartProduct from cartItemreload")
    const [product, setProduct] = useState(null); // ✅ Set initial state to null
    const [quantity, setQuantity] = useState(cartProduct?.quantity || 1); // ✅ Ensure initial value

    const id = cartProduct?.productId;
    console.log(id, "product id")
    const cartId = cartProduct?.id;
    const dispatch = useDispatch();
    const cartDataFromRedux = useSelector((store) => store.cartState);
    const { cartData, totalCartPrice } = cartDataFromRedux;

    // ✅ Fetch product data safely
    useEffect(() => {
      const fetchProductData = async () => {
        if (!id) return; // Prevent API call if no ID
        try {
          const response = await fetch(`https://vs-mart-backend-project-3.onrender.com/product/${id}`);
          if (!response.ok) throw new Error("Failed to fetch product");
          const { productData } = await response.json();
          console.log(productData, "product data through id")
          setProduct(productData);
          
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProductData();
    }, [id]);

    const updateQuantity = async (newQuantity) => {
      try {
        const response = await fetch(`https://vs-mart-backend-project-3.onrender.com/cartItem/${cartId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: newQuantity })
        });
        if (!response.ok) throw new Error("Failed to update quantity");

        setQuantity(newQuantity);
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    };

    const clickOnDecreseButton = () => {
      if (quantity > 1){
        updateQuantity(quantity - 1);
        dispatch(cartActions.setTotalCartPrice(totalCartPrice - product.price))
      } 

    };

    const clickOnIncreseButton = () => {
      updateQuantity(quantity + 1);
      console.log()
      dispatch(cartActions.setTotalCartPrice(totalCartPrice + product.price))
    };
    const clickOnDeleteIcon = async () => {
      try {
        const response = await fetch(`https://vs-mart-backend-project-3.onrender.com/cartItem/${cartId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error("Failed to delete item");
        dispatch(cartActions.setTotalCartPrice(totalCartPrice - (quantity * product.price)))
        dispatch(cartActions.setCartData(cartData.filter((item) => item.id !== cartId)));
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    };

    return (
      <CartItemContainer>
        {product ? (
          <>
            <ProductImage src = {product.url} />
            <ProductDetailsContainer>
              
              <ProductName>{product.product_name}</ProductName>
              <Brand>{product.brand}</Brand>
              <Price>Price: ${product.price}</Price>
            </ProductDetailsContainer>
            <QunatityButtonsContainer>
              <DecreseButton type="button" disabled={quantity === 1} onClick={clickOnDecreseButton}>
                -
              </DecreseButton>
              <Quantity>{quantity}</Quantity>
              <IncreseButton type="button" onClick={clickOnIncreseButton}>
                +
              </IncreseButton>
            </QunatityButtonsContainer>
            <DeleteIcon onClick={clickOnDeleteIcon}>
              <MdOutlineDelete />
            </DeleteIcon>
          </>
        ) : (
          <p>Loading product details...</p> // ✅ Prevents errors during loading
        )}
      </CartItemContainer>
    );
}

export default CartItemReload;
