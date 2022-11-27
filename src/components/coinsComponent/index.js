import { Link } from 'react-router-dom';
import {CoinStyle} from '../../components/styles/Nav.styled';
import './coinsComponent.css'

const Coins = () => {
    return (
        <CoinStyle>
            <Link style={{textDecoration: 'none', color:'white'}} to='/coin'>Coins</Link>
        </CoinStyle>
    )
}

export default Coins;