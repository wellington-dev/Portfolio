import styled from "styled-components";

export const ContainerLogo = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    
    height:0px;
    margin-top: 0px;
    font-size:2.1875rem;
    z-index: 99;
        
    span{
        border-radius: 20px;
        font-family: ${({theme})=>theme.font[2]};
        color:aqua;
    }

    @media(max-width: 621px){
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:1.875rem;
        
        width: 88%;
        position: absolute;
        top:30;
        height:30px; 
    }
`