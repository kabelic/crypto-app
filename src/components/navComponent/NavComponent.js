import './NavComponent.css' 
import Search from '../searchComponent';
import Coins from '../coinsComponent';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return(
        <div className="navBar">
            <div className='leftSide'>
                <Coins/>
                <div><Link to='/portfolio'>Portfolio</Link></div>
            </div>
            <div className='rightSide'>
                <Search/>
                <div>USD</div>
                <div>Icon</div>
            </div>
        </div>
    )
}

export default NavComponent; 