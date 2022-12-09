import { NumbeComponentStyle, NumberTitle, NumberValue  } from "./styles/coinpage.styled"

const NumberComponent = ({ title, value }) => {
    return (
        <NumbeComponentStyle>
            <NumberTitle>{title}</NumberTitle>
            <NumberValue>{value}</NumberValue>
        </NumbeComponentStyle>
    )
}

export default NumberComponent;