import './Search.css'
import { SearchStyle, SearchIcon } from '../styles/Nav.styled';
import {RiSearch2Line} from 'react-icons/ri'
const Search = () => {
    return(
        <SearchStyle>
            <SearchIcon><RiSearch2Line/></SearchIcon>
            <input placeholder='Search...'/>
        </SearchStyle>
    )
}

export default Search;