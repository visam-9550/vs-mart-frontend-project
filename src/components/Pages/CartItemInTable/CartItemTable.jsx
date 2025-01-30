import React from "react";
import { TableContainer, StyledTable, TableHead, TableRow, TableHeader, TableCell, CloseIcon , TotalCartPrice} from "./styledComponents";
import { GrFormClose } from "react-icons/gr";
import CartSlice from "../../Redux/Slices/CartSlice";
import { useSelector } from "react-redux";



const CartItemTable = ({ data}) => {
  const cartDataFromRedux = useSelector((store)=> store.cartState)
  
  return (
    <TableContainer>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeader>Product ID</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total Price</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.productId}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price * item.quantity}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <TotalCartPrice>Total cart price:- ${cartDataFromRedux.totalCartPrice}</TotalCartPrice>
    </TableContainer>
  );
};

export default CartItemTable;