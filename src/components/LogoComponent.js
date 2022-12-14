import { LogoStyle, LogoTitle, LogoDescription } from '../components/styles/Body.styled'

const Logo = ({ logoIcon, description, title }) => {
    return(
        <LogoStyle>
            <div>{logoIcon}</div>
            <LogoTitle>{title}</LogoTitle>
            <LogoDescription>{description}</LogoDescription>
        </LogoStyle>
    )
}

export default Logo;