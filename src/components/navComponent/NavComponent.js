import { MdNotifications } from 'react-icons/md'
import './NavComponent.css' 
import Search from '../searchComponent';
import CreateAccount from '../CreateAccount';
import { Nav, Notification, SearchRigh } from '../styles/Nav.styled';

const NavComponent = (props) => {
    return(
        <Nav>
            <Search/>
            <SearchRigh>
                <CreateAccount bg={'#FFAF2C'} text={'Create a new account'}/>
                <Notification>
                    <MdNotifications color='#FFAF2C'/>
                </Notification>
            </SearchRigh>
        </Nav>
    )
}

export default NavComponent; 