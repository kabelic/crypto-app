import styled from "styled-components"

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #191B1F;
    padding: 10px 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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
    color: #FFFFFF;
`

export const SearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px ;
    background-color: #2C2F36;
    margin-right: 5px;
    padding: 0 10px ;

    input{
       background-color: transparent;
       color: #FFFFFF;
       border-style: none;
       text-decoration: none;
       border: none;

       ::placeholder{
        color: #FFFFFF;
        
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
    color: #FFFFFF;
    font-size: 15px ;
    padding: 0 15px;
    margin-right: 10px;

    :Link{
        text-decoration: none;
    }
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
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 10px; 
    width: 30px;
    background-color: #2C2F36;
`

export const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    color: #FFFFFF; 
    margin-right: 5px;
`
