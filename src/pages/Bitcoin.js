import React from "react"
import axios from "axios"
import { TextStyle, Header,SubHeader } from "../../src/components/styles/Body.styled"
import { Numbers } from "../../src/components/styles/coinpage.styled"
import NumberComponent from '../../src/components/NumberComponent'
import BitcoinComponent from '../../src/components/BitcoinComponent'
import Feedback from "../../src/components/Feedback"
import Chart from "../../src/components/Chart"

class Bitcoin extends React.Component{

    state={
        list: null,
        isLoading: false,
    }

    getData = async () => {
        try{
            this.setState({ isLoading: true })
            const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
            this.setState({list: data, isLoading: false})
        } catch(error){
            console.log('Error: ', error)
        }
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        return(
            <div style={{width: '100%'}}>
                {this.state.isLoading ? 'Loading...' : null}
                <TextStyle margin={10}>
                        <Header weight={500} size={20}>Coin Summary</Header>
                        <SubHeader weight={300} size={10}>Learn about project and status</SubHeader>
                </TextStyle>
                    {this.state.list && this.state.list.map((item) => {
                        if(item.name === 'Bitcoin'){
                            return(
                                <Numbers key={item.id}>
                                    <NumberComponent title={'Market cap'} value={item.market_cap}/>
                                    <NumberComponent title={'Fully Diluted Market Cap'} value={item.fully_diluted_valuation}/>
                                    <NumberComponent title={'Volume 24h'} value={item.total_volume}/>
                                    <NumberComponent title={'Circulating Supply'} value={item.circulating_supply}/>
                                    <NumberComponent title={'Average Price'} value={item.current_price}/>
                                </Numbers>
                            )
                        }
                    })}
                <BitcoinComponent name='Bitcoin' data={this.state.list}/>
                <Feedback/>
                <Chart/>
            </div>
        )
    }
}

export default Bitcoin;