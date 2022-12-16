import { BitcoinIcon } from "./styles/Body.styled"
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { MdOutlineArrowDropUp } from 'react-icons/md'
import { Btcoin2InnerStyle } from "./styles/coinpage.styled"
import { Header, SubHeader } from "./styles/Body.styled"
import { BitCoinLeft2divPercent, BitCoinLeft2divDropd, DropdwnStyle, MoneyPercentge } from "./styles/coinpage.styled"

const BitcoinRight2divInner = ({header, subheader, icon, logoColor}) => {
    return(
        <Btcoin2InnerStyle>
                <BitcoinIcon logoColor={logoColor} bgColor={'#272727'}>{icon}</BitcoinIcon>
                <Header weight={400} size={15}>{header}</Header>
                <SubHeader weight={300} size={10}>{subheader}</SubHeader>
            <MoneyPercentge>
                <div>$2,400.90</div>
                <BitCoinLeft2divDropd>
                    <DropdwnStyle><MdOutlineArrowDropUp/></DropdwnStyle>
                    <BitCoinLeft2divPercent>0.50%</BitCoinLeft2divPercent>
                </BitCoinLeft2divDropd>
            </MoneyPercentge>
            
        </Btcoin2InnerStyle>
    )
}

export default BitcoinRight2divInner