import styled from "styled-components";

 export const Body = styled.div`
    display: flex;
    /* justify-content: center; */
    background: ${(props) => props.theme.secondary};
    border:  1px solid ${(props) => props.theme.main};
    padding: 0 30px;
    color: ${(props) => props.theme.main};
 `
 export const PriceVolumeStyle = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: row;
   margin-bottom: 40px ;
 `
 export const Price = styled.div`
   display: flex;
   border:  1px solid #191B1F;
   background-color: ${(props) => props.theme.third};
   border-radius: 5px;
   width: 50%;
   height: 100px;
   margin-right: 10px;
 `