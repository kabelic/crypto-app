import styled from "styled-components";

 export const Body = styled.div`
    display: flex;
    background: ${(props) => props.theme.secondary};
    padding: 0 30px;
    color: ${(props) => props.theme.main};
    /* width: 100%; */
 `
 export const Wrapper = styled.div`
  width: 100%;
 `
 export const PriceVolumeStyle = styled.div`
   display: flex;
   margin-bottom: 20px ;
   margin-top: 20px;
   width: 100%;
 `
 export const TextStyle = styled.div`
   margin-top: ${({ margin }) => margin }px;
 `
 export const Header = styled.div`
   display: flex;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: ${({ weight }) => weight};
   font-size: ${({ size }) => size}px;
   align-items: center;
   color: ${(props) => props.theme.main};
 `
 export const SubHeader = styled.div`
   display: flex;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: ${({ weight }) => weight};
   font-size: ${({ size }) => size}px;
   align-items: center;
   color: ${(props) => props.theme.main};
   opacity: 0.6;
 `
 export const Bitcoin = styled.div`
   display: flex;
   width: 70%;
   box-sizing: border-box;
   left: 6.15%;
   right: 29.53%;
   top: 13.45%;
   bottom: 52.67%;
   border: 1px solid #272727;
   border-radius: 6px;
   margin-right: 10px ;
   padding: 10px 10px;
 `
 export const GreedIndicator = styled.div`
 display: flex;
 background-color: ${(props) => props.theme.third};
 width: 30%;
 left: 72.55%;
 right: 2.14%;
 top: 13.45%;
 bottom: 52.67%;
 border: 1px solid #272727;
 border-radius: 6px;
`
export const BitcoinTop = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
`
export const BitcoinTopLeft = styled.div`
   display: flex;
   flex-direction: row;
   width: 50%;
`
export const BitcoinTopRight = styled.div`
   display: flex;
   justify-content: end;
   flex-direction: row;
   width: 50%;
`
export const BitcoinIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   left: 7.71%;
   right: 90%;
   top: 15.66%;
   bottom: 81.21%;
   background: ${(props) => props.bgColor ? props.bgColor : 'transparent'};
   color: ${(props) => props.logoColor ? props.logoColor : 'white'};
   border-radius: 4px;
   width: 20px;
   padding: 10px;
   margin-right: 10px;
`
export const DropDownIcon = styled.div`
   display: flex;
   justify-content: center;
   color: #FFAF2C;
   margin-left: 5px;
   padding: 5px 0;
`
export const DataType = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: row;
   background: ${(props) => props.bg ? props.bg : 'transparent'};
   border: 1px solid #272727;
   border-radius: 6px;
   padding: 0px 10px;
   margin-right: 10px;
`
export const Text = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 10px;
   padding: 5px 0;
   margin-right: ${(props) => props.margin ? props.margin : 0}px ;
   opacity: ${(props) => props.opacity ? 1 : 0.5};
`
export const LeftSide = styled.div`
   display: flex;
   flex-direction: column;
   background: #111111;
`
export const RightSide = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`
export const LogoStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: white;
   margin: 20px 15px;
`
export const LogoTitle = styled.div`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 8px;
`
export const LogoDescription = styled.div`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 3px;
   line-height: 4px;
   opacity: 0.5;
`