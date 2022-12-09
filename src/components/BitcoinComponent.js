import BitcoinLeft from "./BitcoinLeft";
import BitcoinRight from "./BitcoinRight";
import { BitcoinComponentStyle } from "./styles/coinpage.styled";

const BitcoinComponent = () => {
    return(
        <BitcoinComponentStyle>
            <BitcoinLeft/>
            <BitcoinRight/>
        </BitcoinComponentStyle>
    )
}

export default BitcoinComponent;