import { Link } from 'react-router-dom';
import './coinsComponent.css'

const Coins = () => {
    return (
        <div className='coinStyle'>
            <Link to='/coin'>Coins</Link>
        </div>
    )
}

export default Coins;