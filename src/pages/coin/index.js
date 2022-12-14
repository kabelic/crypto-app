import { TextStyle, Header,SubHeader } from "../../components/styles/Body.styled"
import { Numbers } from "../../components/styles/coinpage.styled"
import NumberComponent from '../../components/NumberComponent'
import BitcoinLeft from "../../components/BitcoinLeft"
import BitcoinComponent from '../../components/BitcoinComponent'

const Coin = () => {
    return(
        <div style={{width: '100%'}}>
            <TextStyle margin={10}>
                    <Header weight={500} size={20}>Coin Summary</Header>
                    <SubHeader weight={300} size={10}>Learn about project and status</SubHeader>
            </TextStyle>
            <Numbers>
                <NumberComponent title={'Market cap'} value={7}/>
                <NumberComponent title={'Fully Diluted Market Cap'} value={7}/>
                <NumberComponent title={'Volume 24h'} value={7}/>
                <NumberComponent title={'Circulating Supply'} value={7}/>
                <NumberComponent title={'Average Price'} value={7}/>
            </Numbers>
            <BitcoinComponent/>
        </div>
    )
}

export default Coin