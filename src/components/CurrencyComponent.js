import { Currency, MoneyIcon, RightSide } from './styles/Nav.styled'
import {RiArrowDropDownFill} from 'react-icons/ri'

const CurrencyComponent = () => {
    return (
        <Currency>
            <MoneyIcon>$</MoneyIcon>
            <RightSide>
                <div>USD</div>
                <div><RiArrowDropDownFill color='#00FC2A' size={11}/></div>
            </RightSide>
        </Currency>
    )
}

export default CurrencyComponent