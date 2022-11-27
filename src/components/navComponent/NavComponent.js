import './NavComponent.css' 
import Search from '../searchComponent';
import Coins from '../coinsComponent';
import CurrencyComponent from '../CurrencyComponent';
import { Link } from 'react-router-dom';
import { LeftSide, Nav, RightSide, RightCornerIcon, LinkStyle } from '../styles/Nav.styled';
import {SiNintendoswitch} from 'react-icons/si'

const NavComponent = () => {
    return(
        <Nav>
            <LeftSide>
                <Coins/>
                <LinkStyle><Link style={{textDecoration: 'none', color:'white'}} to='/portfolio'>Portfolio</Link></LinkStyle>
            </LeftSide>
            <RightSide>
                <Search/>
                <CurrencyComponent/>
                <RightCornerIcon>
                    <SiNintendoswitch/>
                </RightCornerIcon>
            </RightSide>
        </Nav>
    )
}

export default NavComponent; 