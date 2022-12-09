import { NewAccount } from "./styles/Nav.styled"
import { Text } from './styles/Body.styled'

const CreateAccount = ({ bg, textColor, text }) => {
    return(
        <NewAccount bg={bg} textColor={textColor}>
            <Text opacity={1} >{text}</Text>
        </NewAccount>
    )
}

export default CreateAccount;