import { Header, SubHeader, TextStyle } from "./styles/Body.styled";
import { BitcoinRighStyle, BitcoinRight2div, VerticalLine } from "./styles/coinpage.styled";
import BitcoinRight2divInner from "./BitcoinRight2divInner";
import { BsCurrencyBitcoin } from 'react-icons/bs'
import avax from '../images/download.png'

const BitcoinRight = () => {
    return(
        <BitcoinRighStyle>
            <TextStyle margin={0}>
                    <Header weight={400} size={15}>Other Coins</Header>
                    <SubHeader weight={200} size={8}>Learn about projects and status</SubHeader>
            </TextStyle>
            <BitcoinRight2div>
                <BitcoinRight2divInner logoColor={'#FFAF2C'} icon={<img style={{width: '20px'}} src={avax} alt=''/>} header={'AVAX'} subheader={'AVAX'}/>
                <VerticalLine></VerticalLine>
                <BitcoinRight2divInner logoColor={'#FFAF2C'} icon={<BsCurrencyBitcoin />} header={'Ethereum'} subheader={'ETH'}/>
                <VerticalLine></VerticalLine>
                <BitcoinRight2divInner logoColor={'#FFAF2C'} icon={<BsCurrencyBitcoin />} header={'DAI'} subheader={'DAI'}/>
            </BitcoinRight2div>
        </BitcoinRighStyle>
    )
}

export default BitcoinRight;