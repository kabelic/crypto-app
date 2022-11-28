import { LinkWrapper } from "./styles/Nav.styled"

const LinkComponent = ({src, children}) => {
    return(
        <LinkWrapper to={src}>{children}</LinkWrapper>
    )
}

export default LinkComponent;