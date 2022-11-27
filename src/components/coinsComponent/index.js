import {CoinStyle, LinkWrapper} from '../../components/styles/Nav.styled';
import './coinsComponent.css'

const Coins = () => {
    return (
        <CoinStyle>
            <LinkWrapper to='/coin'>Coins</LinkWrapper>
        </CoinStyle>
    )
}

export default Coins;