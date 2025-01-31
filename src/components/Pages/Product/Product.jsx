import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";
import Loading from "react-loading";
import ProductItem from '../ProductItem/ProductItem';
import ProductSlice from '../../Redux/Slices/ProductSlice';
import PaginationSlice from '../../Redux/Slices/PaginationSlice';
import { 
  ProductsContainer, PaginationContainer, LeftButton, RightButton, 
  NoProductsFoundContainer, Loader, NoProductsFoundHeading, 
  NoProductsFoundImage, NoProductsFoundDescription 
} from './styledComponents';


const productActions = ProductSlice.actions;
const paginationActions = PaginationSlice.actions;

const Product = () => {
  const dispatch = useDispatch();
  const reduxProductsData = useSelector((store) => store.productState);
  const paginationData = useSelector((store) => store.paginationState);

  const { productsData, category, searchValue, priceRange, loading, err } = reduxProductsData;
  const { pageNumber, startIndex, endIndex, pageLength } = paginationData;

  const totalPagesInHome = Math.ceil(productsData.length / pageLength);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

        dispatch(productActions.setProductsData(data));
      } catch (error) {
        dispatch(productActions.setErr(true));
      } finally {
        dispatch(productActions.setLoading(false));
      }
    };

    fetchingProductsData();
  }, [dispatch]);

  // Apply search, category & price filters
  useEffect(() => {
    let filtered = [...productsData];

    if (searchValue) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (priceRange) {
      filtered = filtered.sort((a, b) =>
        priceRange === "low" ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(filtered);
  }, [searchValue, category, priceRange, productsData]);

  // Handle pagination updates
  useEffect(() => {
    dispatch(paginationActions.setStartIndex((pageNumber - 1) * pageLength));
    dispatch(paginationActions.setEndIndex(pageNumber * pageLength));
  }, [pageNumber, pageLength, dispatch]);

  const paginatedProducts = useMemo(
    () => filteredProducts.slice(startIndex, endIndex),
    [filteredProducts, startIndex, endIndex]
  );

  // No Products Found Component
  const NoProductsFound = () => {
    return (
      <NoProductsFoundContainer>
        <NoProductsFoundImage src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6665.jpg?semt=ais_hybrid" />
        <NoProductsFoundHeading>No products found</NoProductsFoundHeading>
        <NoProductsFoundDescription>
          Sorry, we couldn’t fetch any products based on your inputs.
        </NoProductsFoundDescription>
      </NoProductsFoundContainer>
    );
  };

  // Loading View
  if (loading) {
    return (
      <Loader>
        {/* <Loading /> */}
        <h3>Loading...</h3>
      </Loader>
    );
  }

  return (
    <>
      {paginatedProducts.length === 0 ? (
        <NoProductsFound />
      ) : (
        <ProductsContainer>
          {paginatedProducts.map((product) => (
            <ProductItem productData={product} key={product.id} />
          ))}

          <PaginationContainer>
            <LeftButton
              onClick={() => dispatch(paginationActions.setPageNumber(pageNumber - 1))}
              disabled={pageNumber === 1}
            >
              <FaMinus />
            </LeftButton>
            <span>{pageNumber}</span>
            <RightButton
              onClick={() => dispatch(paginationActions.setPageNumber(pageNumber + 1))}
              disabled={pageNumber === totalPagesInHome}
            >
              <FaPlus />
            </RightButton>
          </PaginationContainer>
        </ProductsContainer>
      )}
    </>
  );
};

export default Product;
