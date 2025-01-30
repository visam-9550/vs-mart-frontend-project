import styled from "styled-components";

export const TableContainer = styled.div`
  width: 70%;
  overflow-x: auto;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-width: 10px;
`;

export const TableHead = styled.thead`
  background-color: #007bff;
  color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover{
    background-color:rgb(201, 200, 200);
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const CloseIcon = styled.div`
  text-align: right;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  color: black;
`;
export const TotalCartPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  font-family: Roboto;
`
