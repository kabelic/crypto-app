import { RiArrowDropDownLine } from 'react-icons/ri';
import { DataType, DropDownIcon, Text } from "./styles/Body.styled";

const DataTypeComponent = ({ text, bgColor, opacity}) => {
    return(
        <DataType bg={ bgColor }>
            <Text opacity={opacity} margin={20}>{text}</Text>
            <DropDownIcon>
                <RiArrowDropDownLine/>
            </DropDownIcon>
        </DataType>
    )
}

export default DataTypeComponent;