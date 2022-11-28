import {SiNintendoswitch} from 'react-icons/si'
import './NavComponent.css' 
import Search from '../searchComponent';
import Coins from '../coinsComponent';
import CurrencyComponent from '../CurrencyComponent';
import { LeftSide, Nav, RightSide, RightCornerIcon, LinkStyle, LinkWrapper } from '../styles/Nav.styled';

const NavComponent = (props) => {
    return(
        <Nav>
            <LeftSide>
                <Coins/>
                <LinkStyle><LinkWrapper to='/portfolio'>Portfolio</LinkWrapper></LinkStyle>
            </LeftSide>
            <RightSide>
                <Search/>
                <CurrencyComponent/>
                <RightCornerIcon onClick={props.clicked}>
                    <SiNintendoswitch/>
                </RightCornerIcon>
            </RightSide>
        </Nav>
    )
}

export default NavComponent; 