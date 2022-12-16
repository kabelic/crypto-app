import BitcoinLeft from "./BitcoinLeft";
import BitcoinRight from "./BitcoinRight";
import { BitcoinComponentStyle } from "./styles/coinpage.styled";

const BitcoinComponent = ({ data, name }) => {
    return(
        <BitcoinComponentStyle>
            <BitcoinLeft name={name} data={data}/>
            <BitcoinRight/>
        </BitcoinComponentStyle>
    )
}

export default BitcoinComponent;