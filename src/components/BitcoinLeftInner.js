import { BtCoinLeftInner } from "./styles/coinpage.styled";
   
const BitcoinLeftInner = ({text}) => {
    return(
        <BtCoinLeftInner onClick={() => console.log(text, ' was clicked!!')}>
            {text}
        </BtCoinLeftInner>
    )
}

export default BitcoinLeftInner;