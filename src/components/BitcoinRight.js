import { Header, SubHeader, TextStyle } from "./styles/Body.styled";
import { BitcoinRighStyle } from "./styles/coinpage.styled";

const BitcoinRight = () => {
    return(
        <BitcoinRighStyle>
            <TextStyle margin={0}>
                    <Header weight={400} size={15}>Other Coins</Header>
                    <SubHeader weight={200} size={8}>Learn about projects and status</SubHeader>
            </TextStyle>
        </BitcoinRighStyle>
    )
}

export default BitcoinRight;