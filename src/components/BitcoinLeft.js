import { BsCurrencyBitcoin } from 'react-icons/bs'
import { MdOutlineArrowDropUp } from 'react-icons/md'
import { TextStyle, Header, SubHeader, BitcoinIcon } from './styles/Body.styled'
import { BitcoinLeft1div, BitcoinLeft2div, BitCoinLeft2divDropd, BitCoinLeft2divPercent, 
    Tags, 
    BitcoinLeft3div,
     BitcoinLeft4div, 
     BitcoinLeftStyle,
     DropdwnStyle,
     } from './styles/coinpage.styled'
import BitcoinLeftInner from './BitcoinLeftInner'
import CreateAccount from './CreateAccount'

const BitcoinLeft = () => {
    return(
        <BitcoinLeftStyle>
            <BitcoinLeft1div>
                <BitcoinIcon bgColor={'#272727'}><BsCurrencyBitcoin/></BitcoinIcon>
                <TextStyle margin={0}>
                    <Header weight={400} size={15}>Bitcoin</Header>
                    <SubHeader weight={300} size={10}>BTC</SubHeader>
                </TextStyle>
            </BitcoinLeft1div>
            <BitcoinLeft2div>
                <BitcoinIcon/>
                <div>$2,400.90</div>
                <BitCoinLeft2divDropd>
                    <DropdwnStyle><MdOutlineArrowDropUp/></DropdwnStyle>
                    <BitCoinLeft2divPercent>0.50%</BitCoinLeft2divPercent>
                </BitCoinLeft2divDropd>
            </BitcoinLeft2div>
            <Tags>Tags</Tags>
            <BitcoinLeft3div>
                <BitcoinLeftInner text={'Minerable'}/>
                <BitcoinLeftInner text={'PoW'}/>
                <BitcoinLeftInner text={'Smart Contract'}/>
                <BitcoinLeftInner text={'Bitcoin'}/>
            </BitcoinLeft3div>
            <BitcoinLeft4div>
                <CreateAccount bg={'#FFAF2C'} text={'Buy coin'}/>
                <CreateAccount textColor={'#FFAF2C'} text={'Sell Coin'}/>
            </BitcoinLeft4div>
        </BitcoinLeftStyle>
    )
}

export default BitcoinLeft;