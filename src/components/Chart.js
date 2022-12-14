import { useState } from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { ChartType, ChartTop, ChartTopLeft, ChartTopRight, ChartTopLeftInner, ButtonText, ChartBottom } from "./styles/coinpage.styled"
import { TextStyle, Header, SubHeader, BitcoinIcon } from "./styles/Body.styled"
import BarChart from './Charts/BarChart'
import LineChart from './Charts/LineChart'
import { UserData } from '../utils/Data'

const Chart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: '#FFAF2C',
                borderColor: '#FFAF2C',
            },
            {
                label: "Users Lost",
                data: UserData.map((data) => data.userLost),
                backgroundColor: '#4688E4',
                borderColor: '#4688E4',
            },
        ],
    })

    return(
        <ChartType>
            <ChartTop>
                <ChartTopLeft>
                    <BitcoinIcon logoColor={'#FFAF2C'} bgColor={'#272727'}><BsCurrencyBitcoin/></BitcoinIcon>
                    <TextStyle margin={10}>
                        <Header weight={200} size={12}>Overview</Header>
                        <SubHeader weight={100} size={7}>Overview of your selected coin</SubHeader>
                    </TextStyle>
                    <ChartTopLeftInner>
                        <ButtonText>Price</ButtonText>
                        <ButtonText>Market Cap</ButtonText>
                    </ChartTopLeftInner>
                </ChartTopLeft>
                <ChartTopRight>
                    <ButtonText>Last Day</ButtonText>
                    <ButtonText>Last Week</ButtonText>
                    <ButtonText>Last Month</ButtonText>
                    <ButtonText>Last 3 Months</ButtonText>
                    <ButtonText>Last Year</ButtonText>
                </ChartTopRight>
            </ChartTop>
            <ChartBottom>
                <LineChart chartData={userData}/>
            </ChartBottom>
        </ChartType>
    )
}

export default Chart