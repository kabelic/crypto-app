 import React from "react"
 import axios from "axios"
 import PriceVolume from "../../components/PriceVolumeComponent"

 class Home extends React.Component{
    state={
        list: null,
        isLoading: false,
        priceVolume: null,
    }

    getData = async () => {
        this.setState({ isLoading: true })
        const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
        this.setState({list: data, isLoading: false})
    }

    getPriceVolumeData = async () => {
        this.setState({ isLoading: true })
        const {data} = await axios('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily')
        this.setState({ priceVolume: data, isLoading: false })
    }

    componentDidMount(){
        this.getData()
        this.getPriceVolumeData()
    }

    render(){
        return(
            <div>
                {this.state.isLoading && <p>Loading...</p>}
                <p>Your overview</p>
                <PriceVolume price={this.state.priceVolume}/>
                <p>Your overview</p>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>1h%</th>
                            <th>24h%</th>
                            <th>7d%</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.list && this.state.list.map(item => {
                        
                            return(  
                            <tr>
                                <td></td>
                                <td>{item.name}</td>
                                <td>${item.current_price}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            )
                    }
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
    
 }

 export default Home