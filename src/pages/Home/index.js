 import React from "react"
 import axios from 'axios'

 class Home extends React.Component{
    state={
        list: null,
        isLoading: false
    }

    getData = async () => {
        this.setState({isLoading: true})
        const response = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
        const data = response.data
        this.setState({list: data, isLoading: false})
    }

    componentDidMount(){
        this.getData()
    }

    render (){
        return(
            <div>
                {this.state.isLoading && <p>Loading...</p>}
                <ul>
                    {this.state.list && this.state.list.map(item => <li>{item.name}</li>)}
                </ul>
            </div>
        )
    }
    
 }

 export default Home