import React, { useState, useEffect } from "react";
import { 
  CartContainer, CartItemsContainer, CartHeading, 
  TotalPrice, PreviewButtonContainer, PreveiewButton, 
  PreviewViewContainer, CloseIcon, Message, EmptyImage, CartEmptyContainer, MessageDescription
} from "./styledComponents";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import CartItemReload from "../CartItemsReload/CartItemReload";
import CartSlice from "../../Redux/Slices/CartSlice";
import { GrFormClose } from "react-icons/gr";
import CartItemTable from "../CartItemInTable/CartItemTable";

const cartActions = CartSlice.actions;

function Cart() {
  const dispatch = useDispatch();
  const cookiesData = JSON.parse(Cookies.get("userData") || "{}");
  const [isPreview, setIsPreview] = useState(false);
  const cartDataFromRedux = useSelector((store) => store.cartState) || [];
  const [totalPrice, setTotalCartPrice] = useState(0);
  const { cartData, totalCartPrice } = cartDataFromRedux;
  const userEmail = cookiesData.user_email || "";
  // const totalCartPrice = cartData.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);

  // setTotalCartPrice(totalCartPrice);

  // Toggle Preview Mode
  const clickOnPreviewButton = () => setIsPreview(true);
  const clickOnCloseIcon = () => setIsPreview(false);

  // Fetch Cart Data
  const fetchingData = async () => {
    try {
      dispatch(cartActions.setLoading(true));
      const response = await fetch("https://vs-mart-backend-project-3.onrender.com/cartItems");
      const respResult = await response.json();
      const fetchedData = respResult.cartsData || [];

      const updatedData = fetchedData.map((item) => ({
        id: item._id,
        productId: item.product_id,
        userEmail: item.user_email,
        quantity: item.quantity,
        price: item.price
      }));

      const filteredByUserEmail = updatedData.filter((item) => item.userEmail === userEmail);
      // const totalCartPrice = filteredByUserEmail.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);

      // setTotalCartPrice(totalCartPrice);
      dispatch(cartActions.setLoading(false));
      dispatch(cartActions.setCartData(filteredByUserEmail));
      dispatch(cartActions.setCartLength(filteredByUserEmail.length));
    } catch (err) {
      dispatch(cartActions.setLoading(false));
      dispatch(cartActions.setErr(true));
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(()=>{
    const totalCartPrice = cartData.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);
    console.log(totalCartPrice)
    dispatch(cartActions.setTotalCartPrice(totalCartPrice))
    setTotalCartPrice(totalCartPrice);
  }, [cartData])

  return (
    <CartContainer>
      <Header />
      <CartHeading>Welcome to your Cart</CartHeading>
      {cartData.length >= 1 ? <>
      {isPreview ? (
        <PreviewViewContainer>
            <CartItemTable data = {cartData} />
            <CloseIcon onClick={()=>{clickOnCloseIcon()}}>
                    Proceed
              </CloseIcon>
        </PreviewViewContainer>
      ) : (
        <>
          <CartItemsContainer>
            {cartData.map((item) => (
              <CartItemReload key={item.id} cartProduct={item} />
            ))}
          </CartItemsContainer>
          <PreviewButtonContainer>
            <PreveiewButton type="button" onClick={clickOnPreviewButton}>
              Preview
            </PreveiewButton>
          </PreviewButtonContainer>
          <TotalPrice>Total Price: ${totalCartPrice.toFixed(2)}</TotalPrice>
          
        </>
      )}</>: 
        <CartEmptyContainer>
          <EmptyImage src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1738167921/shopping-cart-empty-removebg-preview_wq1wgw.png" />
          <Message>Your cart is empty</Message>
          <MessageDescription>Looks like you havn't added any products to your cart yet</MessageDescription>
        </CartEmptyContainer>
      }
      
      
    </CartContainer>
  );
}

export default Cart;
