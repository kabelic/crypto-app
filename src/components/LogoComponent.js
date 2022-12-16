import { LogoStyle, LogoTitle, LogoDescription } from '../components/styles/Body.styled'

const Logo = ({ logoIcon, description, title, size }) => {
    return(
        <LogoStyle>
            <div>{logoIcon}</div>
            <LogoTitle>{title}</LogoTitle>
            <LogoDescription size={size}>{description}</LogoDescription>
        </LogoStyle>
    )
}

export default Logo;