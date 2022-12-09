import { BsCurrencyBitcoin } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { 
    GreedIndicator, 
    PriceVolumeStyle, 
    Bitcoin, 
    BitcoinTop,
    DataType,
    BitcoinTopLeft, BitcoinTopRight, BitcoinIcon, Header, SubHeader, TextStyle, DropDownIcon } from "./styles/Body.styled";
import DataTypeComponent from './DataTpeComponent'

const PriceVolume = ({price}) => {
    return (
        <PriceVolumeStyle>
            <Bitcoin>
                <BitcoinTop>
                    <BitcoinTopLeft>
                        <BitcoinIcon logoColor={'#FFAF2C'}><BsCurrencyBitcoin/></BitcoinIcon>
                        <TextStyle margin={0}>
                            <Header width={300} size={12}>Bitcoin</Header>
                            <SubHeader width={170} size={7}>Select your coin</SubHeader>
                        </TextStyle>
                        <DropDownIcon>
                            <RiArrowDropDownLine/>
                        </DropDownIcon>
                    </BitcoinTopLeft>
                    <BitcoinTopRight>
                        <DataTypeComponent text='Data Type' bgColor={'#272727'} opacity={1}/>
                        <DataTypeComponent text='Weekly'/>
                    </BitcoinTopRight>
                </BitcoinTop>
                <div></div>
            </Bitcoin>
            <GreedIndicator>Volume</GreedIndicator>
        </PriceVolumeStyle>
    )
}

export default PriceVolume