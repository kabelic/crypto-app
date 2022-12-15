import { BsCurrencyBitcoin } from 'react-icons/bs'
import { MdOutlineArrowDropUp } from 'react-icons/md'
import { TextStyle, Header, SubHeader, BitcoinIcon } from './styles/Body.styled'
import { BitcoinLeft1div, BitcoinLeft2div, BitCoinLeft2divDropd, BitCoinLeft2divPercent, 
    Tags, 
    BitcoinLeft3div,
     BitcoinLeft4div, 
     BitcoinLeftStyle,
     DropdwnStyle,
     Amount,
     } from './styles/coinpage.styled'
import BitcoinLeftInner from './BitcoinLeftInner'
import CreateAccount from './CreateAccount'

const BitcoinLeft = ({ data, name}) => {
    return(
        <BitcoinLeftStyle>
            {data && data.map((item) => {
                if(item.name === name){
                    return(
                        <BitcoinLeft1div>
                            <BitcoinIcon bgColor={'#272727'}>
                                { item.name ? <img src={item.image} width='15' alt='Bitcoin'/> :  <BsCurrencyBitcoin/> }
                            </BitcoinIcon>
                            <TextStyle margin={10}>
                                <Header weight={400} size={15}>{item.name ? item.name : 'Bitcoin'}</Header>
                                <SubHeader weight={300} size={10}>{ item.name ? item.symbol.toUpperCase() : 'BTC' }</SubHeader>
                            </TextStyle>
                        </BitcoinLeft1div>
                    )
                }
            })}
            <BitcoinLeft2div>
                <BitcoinIcon/>
                <Amount>$2,400.90</Amount>
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