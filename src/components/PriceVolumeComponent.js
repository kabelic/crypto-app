import { Price, PriceVolumeStyle } from "./styles/Body.styled"

const PriceVolume = ({price}) => {
    return (
        <PriceVolumeStyle>
            <Price>Price</Price>
            <Price>Volume</Price>
        </PriceVolumeStyle>
    )
}

export default PriceVolume