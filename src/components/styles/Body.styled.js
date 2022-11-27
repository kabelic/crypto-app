import styled from "styled-components";

 export const Body = styled.div`
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme.secondary};
    border:  1px solid ${(props) => props.theme.main};
 `