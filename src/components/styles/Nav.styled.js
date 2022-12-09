import styled from "styled-components"
import { Link } from "react-router-dom"

export const Nav = styled.div`
    display: flex;
    justify-content: row;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.main};
    padding: 10px 30px;
`
export const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
`
export const LinkStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.main};
`
export const SearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 6px ;
    background-color: transparent;
    padding: 0 10px ;
    border: 1px solid #272727; 
    width: 80%;

    input{
       background-color: transparent;
       color: #FFFFFF;
       border-style: none;
       text-decoration: none;
       border: none;

       ::placeholder{
        color: #FFFFFF;
        opacity: 0.5;
        }
    }
    input:focus{
            outline-style: none;
            box-shadow: none;
        }
    
`
export const CoinStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #2C2F36;
    color: ${(props) => props.theme.main};
    font-size: 15px ;
    padding: 0 15px;
    margin-right: 10px;
`
export const Currency = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px 10px;
    background-color: #2C2F36;
    font-size: 10px; 
    color: #FFFFFF;
    border-radius: 4px;
    margin-right: 10px;
`
export const MoneyIcon = styled.div`
    display: flex;
    justify-content: center;
    width: 15px;
    border-radius: 60px ;
    background-color: #191B1F;
    color: #00FC2A;
    margin-right: 5px ;
`
export const RightCornerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.main};
    border-radius: 5px;
    font-size: 10px; 
    width: 30px;
    background-color: #2C2F36;
`
export const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    color: ${(props) => props.theme.main}; 
    margin-right: 5px;
`
export const LinkWrapper = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.main}; 
`
export const Notification = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid #FFAF2C;
    border-radius: 6px;
`
export const NewAccount = styled.div`
    display: flex;
    justify-content: center;
    background: ${(props) => props.bg ? props.bg : 'transparent'};
    border: 1px solid #FFAF2C;
    margin: 0 10px;
    padding: 0 15px ;
    border-radius: 6px;
    color: ${(props) => props.textColor ? props.textColor : 'white'};
`