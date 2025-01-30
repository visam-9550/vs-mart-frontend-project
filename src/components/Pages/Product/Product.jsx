import React, { useEffect, useState, useMemo } from 'react';
import { ProductsContainer, PaginationContainer, LeftButton, RightButton, NoProductsFoundContainer,Loader, NoProductsFoundHeading, NoProductsFoundImage, NoProductsFoundDescription } from './styledComponents';
import ProductItem from '../ProductItem/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import ProductSlice from '../../Redux/Slices/ProductSlice';
import { FaPlus, FaMinus } from "react-icons/fa";
import PaginationSlice from '../../Redux/Slices/PaginationSlice';
import Loading from "react-loading";
const productActions = ProductSlice.actions;
const paginationActions = PaginationSlice.actions;

function Product() {
  const dispatch = useDispatch();
  const reduxProductsData = useSelector((store) => store.productState);
  const paginationData = useSelector((store) => store.paginationState);

  const { productsData, category, searchValue, priceRange, loading, err } = reduxProductsData;
  const { pageNumber, startIndex, endIndex, pageLength } = paginationData;

  const totalPagesInHome = Math.ceil(productsData.length / pageLength);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Fetch products on mount
  useEffect(() => {
    const fetchingProductsData = async () => {
      try {
        dispatch(productActions.setLoading(true));
        const fetchingData = await fetch("https://vs-mart-backend-project-3.onrender.com/products");
        const result = await fetchingData.json();
        const data = result.productsData.map((product) => ({
          id: product._id,
          productName: product.product_name,
          brand: product.brand,
          available: product.available,
          category: product.category,
          price: product.price,
          url: product.url,
          details: product.price
        }));

        dispatch(productActions.setLoading(false));
        dispatch(productActions.setProductsData(data));
      } catch (err) {
        dispatch(productActions.setLoading(false));
        dispatch(productActions.setErr(true));
      }
    };

    fetchingProductsData();
  }, [dispatch]);

  // Filter by search value
  useEffect(() => {
    const filtered = searchValue
      ? productsData.filter((product) => product.productName.toLowerCase().includes(searchValue.toLowerCase()))
      : productsData;

    setFilteredProducts(filtered);
  }, [searchValue, productsData]);

  // Filter by category
  useEffect(() => {
    const filtered = category
      ? productsData.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()))
      : productsData;

    setFilteredProducts(filtered);
  }, [category, productsData]);

  // Sort by price
  const sortedProducts = useMemo(() => {
    if (!priceRange) return filteredProducts;

    return [...filteredProducts].sort((a, b) =>
      priceRange === "low" ? a.price - b.price : b.price - a.price
    );
  }, [priceRange, filteredProducts]);

  // Handle pagination updates
  useEffect(() => {
    dispatch(paginationActions.setStartIndex((pageNumber - 1) * pageLength));
    dispatch(paginationActions.setEndIndex(pageNumber * pageLength));
  }, [pageNumber, pageLength, dispatch]);

  const paginatedProducts = useMemo(() => sortedProducts.slice(startIndex, endIndex), [sortedProducts, startIndex, endIndex]);
  const imageUrl = "https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6665.jpg?semt=ais_hybrid"
  const NoProductsFound = ()=>{
    return(
      <NoProductsFoundContainer>
        <NoProductsFoundImage src = {imageUrl} />
        <NoProductsFoundHeading>
          No products found
        </NoProductsFoundHeading>
        <NoProductsFoundDescription>
          Sorry, we don't fetched the products on your inputs.
        </NoProductsFoundDescription>
      </NoProductsFoundContainer>
    )
  }
  const LoadingView = loading && <>
    <h1>Loading</h1>
  </>
  return (
    <>
      {paginatedProducts.length === 0 ? NoProductsFound() : <ProductsContainer>
       {loading && 
          <>
            <Loader>

                <Loading />
            </Loader>
          </>
       }
      {paginatedProducts.map((product) => (
        <ProductItem productData={product} key={product.id} />
      ))}
      
      <PaginationContainer>
        <LeftButton onClick={() => dispatch(paginationActions.setPageNumber(pageNumber - 1))} disabled={pageNumber === 1}>
          <FaMinus />
        </LeftButton>
        <span>{pageNumber}</span>
        <RightButton onClick={() => dispatch(paginationActions.setPageNumber(pageNumber + 1))} disabled={pageNumber === totalPagesInHome}>
          <FaPlus />
        </RightButton>
      </PaginationContainer>
      </ProductsContainer>
      }
    </>
    
  );
}

export default Product;