
import React, { useState } from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { TiFilter } from "react-icons/ti";
import { MdOutlineFilterAltOff } from "react-icons/md";
import ProductSlice from "../../Redux/Slices/ProductSlice";
import { 
    HomeContainer, BannerContainer, DescriptionContainer, Video, 
    TagLine, Description, FilterIcon, InputContainerAtMobile, 
    SortPriceContainer, CategoryInputAtMobile, SearchFilterInputsContainer, 
    FilterContainer, IsFilteredContainer, InputContainer, Input, Label, 
    RadioButton, CategoryInput 
} from "./styledComponents";

const productActions = ProductSlice.actions;
const bannerVideo = "https://res.cloudinary.com/dpeqiwvxt/video/upload/v1738213063/1473425_People_3840x2160_tsk3m5.mp4";

function Home() {
    const dispatch = useDispatch();
    const productsDataFromRedux = useSelector((store) => store.productState);
    const { category, searchValue } = productsDataFromRedux;
    const [isFiltered, setIsFiltered] = useState(false);
    const dataFromCookies = Cookies.get("userData");

    if (!dataFromCookies) {
        return <Navigate to="/login" />;
    }

    const toggleFilter = () => {
        setIsFiltered(!isFiltered);
    };

    return (
        <HomeContainer>
            <Header />
            <FilterContainer>
                <FilterIcon onClick={toggleFilter}>
                    {isFiltered ? <MdOutlineFilterAltOff /> : <TiFilter />}
                </FilterIcon>
                <InputContainer>
                    <FaSearch style={{ marginRight: "5px" }} />
                    <Input
                        type="text"
                        placeholder="Search product here..."
                        value={searchValue}
                        onChange={(e) => dispatch(productActions.setSearchValue(e.target.value))}
                    />
                </InputContainer>
                <SearchFilterInputsContainer>
                    <InputContainerAtMobile>
                        <FaSearch style={{ marginRight: "5px" }} />
                        <Input
                            type="text"
                            placeholder="Search product here..."
                            value={searchValue}
                            onChange={(e) => dispatch(productActions.setSearchValue(e.target.value))}
                        />
                    </InputContainerAtMobile>
                </SearchFilterInputsContainer>
                <SortPriceContainer>
                    <Label>Price high</Label>
                    <RadioButton type="radio" name="price" value="high" onChange={(e) => dispatch(productActions.setPriceRange(e.target.value))} />
                    <Label>Low</Label>
                    <RadioButton type="radio" name="price" value="low" onChange={(e) => dispatch(productActions.setPriceRange(e.target.value))} />
                </SortPriceContainer>
                <CategoryInput
                    type="text"
                    value={category}
                    placeholder="Enter category.."
                    onChange={(e) => dispatch(productActions.setCategory(e.target.value))}
                />
            </FilterContainer>

            {isFiltered && (
                <IsFilteredContainer>
                    <div>
                      <CategoryInputAtMobile
                          type="text"
                          value={category}
                          placeholder="Enter category.."
                          onChange={(e) => dispatch(productActions.setCategory(e.target.value))}
                      />
                    </div>
                    <div>
                        <Label>Price high</Label>
                        <RadioButton type="radio" name="price" value="high" onChange={(e) => dispatch(productActions.setPriceRange(e.target.value))} />
                        <Label>Low</Label>
                        <RadioButton type="radio" name="price" value="low" onChange={(e) => dispatch(productActions.setPriceRange(e.target.value))} />
                    </div>
                    
                </IsFilteredContainer>
            )}

            <BannerContainer>
                <Video muted loop autoPlay>
                    <source src={bannerVideo} type="video/mp4" />
                </Video>
                <DescriptionContainer>
                    <TagLine>"Shop Smart, Shop VS-Mart!"</TagLine>
                    <Description>
                        "VS-Mart—where smart shopping meets unbeatable deals, convenience, and quality, all in one place!"
                    </Description>
                </DescriptionContainer>
            </BannerContainer>

            <Product />
        </HomeContainer>
    );
}

export default Home;
