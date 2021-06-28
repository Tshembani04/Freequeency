
import styled from "styled-components";
import { Search as SearchIcon } from "@material-ui/icons";

const Search = () => {
    return ( 
        <SearchContainer>
            <SearchTop>
                <SearchBar>
                    <BarLeft>
                        <input type="search" placeholder="Search for music, art, culture..."/>
                    </BarLeft>
                    <BarRight>
                        <SearchIcon/>
                    </BarRight>
                </SearchBar>
            </SearchTop>
        </SearchContainer>
     );
}
export const SearchContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #111111;
    padding: 20px;
    width: 100%;
`;
export const SearchTop = styled.div`
    display:flex;
    justify-content: center;
`;
export const SearchBar = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border: solid 2px #fce96d;
    padding: 0 15px;
    width: 70%;
`;
export const BarLeft = styled.div`
    flex: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    > input {
        border-bottom: none !important;
        color: #fce96d !important;
        :focus{
            border-bottom: none !important;
            box-shadow: none !important;
        }
    }

`;
export const BarRight = styled.div`
    flex:0.2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fce96d !important;
    font-weight: bold !important;
    

`;
export default Search;