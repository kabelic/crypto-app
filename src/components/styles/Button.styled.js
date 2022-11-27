import styled from 'styled-components'

export const Button = styled.button`
    padding: 4px 8px;
    border-radius: 5px;
    border: none;
    border: 1px solid ${(props) => props.theme.main};
    background: ${(props) => props.theme.secondary};
    color: ${props => props.theme.main}
`