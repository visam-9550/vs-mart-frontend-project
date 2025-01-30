import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
`
export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgb(198, 196, 196);
    min-height: 7vh;
    width: 100%;
    color: black;
    font-family: Roboto;
    font-weight: 700;
    position: relative;
    @media screen and (max-width: 576px){
       justify-content: space-between;
       align-items: center;
   }
`
export const IsFilteredContainer = styled.div`
    @media screen and (min-width: 576px){
        display: none;
    }
    position: absolute;
    top: 20vh;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color:rgb(138, 133, 133);
    padding: 30px;
    z-index: 2;
    opacity: 0.8;
    border-radius: 5px;

`
export const SortPriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 576px){
        display: none;
    }
    
`
export const InputContainer = styled.div`
    // margin-right: 30px;
    display: flex; 
    alignItems: center; 
    border: 1px solid #ccc;
     padding: 5px; 
     borderRadius: 5px;
    @media screen and (max-width: 576px){
        display: none;
    }
    @media screen and (min-width: 577px) and (max-width: 767px){
        width: 200px; 
   }
`

export const Label = styled.label`
    font-weight: 700;
    font-family: Roboto;
    font-size: 14px;
    color: black;
//     @media screen and (max-width: 576px){
//         display: none;
//    }
`
export const RadioButton = styled.input`
   color: blue;
//    @media screen and (max-width: 576px){
//     display: none;
//    }
`
export const Input = styled.input`
    color: black;
    font-family: Roboto;
    font-weight: 700;
    height: 4vh;
    width: 300px;
    outline: none;
    border-radius: 3px;
    background-color: white;
    &:hover{
        background-color: black;
        color: white;
    }
    @media screen and (max-width: 576px){
        width: 200px;
   }
`
export const InputContainerAtMobile = styled.div`

`
export const FilterIcon = styled.p`
    font-weight: 700;
    font-size: 24px;
    @media screen and (min-width: 577px){
        display: none;
    }
`
export const CategoryInputAtMobile = styled.input`
    color: black;
    font-family: Roboto;
    font-weight: 700;
    height: 4vh;
    width: 120px;
    outline: none;
    border-radius: 4px;
    background-color: white;
    outline: none;
    &:hover{
        background-color: black;
        color: white;
    }
    @media screen and (min-width: 577px){
        display: none;  
   }
`
export const CategoryInput = styled.input`
    color: black;
    font-family: Roboto;
    font-weight: 700;
    height: 4vh;
    width: 220px;
    outline: none;
    border-radius: 4px;
    background-color: white;
    margin-left: 30px;
    outline: none;
    &:hover{
        background-color: black;
        color: white;
    }
    @media screen and (max-width: 576px){
        display: none;
   }
`


export const SearchFilterInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    @media screen and (min-width: 576px){
        display: none;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    width: 50%;
`
export const Image = styled.img`
    height: 100%;
    width: 90%;
    background-size: cover;
    @media screen and (max-width: 767px){
        width: 100%;
    }
`
export const DescriptionContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 40%;
    color: black;
    @media screen and (max-width: 767px){
        width: 90%;
    }
`

export const TagLine = styled.h1`
    font-family: "Pacifico", cursive;
    // font-family: "Papyrus", fantasy;
    font-size: 32px;
    font-weight: bolder;
    color:rgb(97, 140, 167);
    font-style: incline;
    text-align: center;
    @media screen and (max-width: 767px){
        font-size: 24px;
        text-align: center;
    }
`
export const Description = styled.p`
    // font-family: "Courier New", Courier, monospace;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-align: center;
`


export const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        min-height: 60vh;
    }
`;

export const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    z-index: -1;
`;



