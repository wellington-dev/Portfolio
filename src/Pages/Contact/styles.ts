import styled from "styled-components";
import sobre from '../../assets/sobre-background.png'


import { LinkWeb } from "../Home/styles";

export const Container = styled.div`
    background-image:url(${sobre});
    background-repeat: no-repeat;
    background-size: cover;

    height: calc(100vh - 70px);
    color:#fff ;

    @media(max-width: 691px){  
        height: calc(100vh - 40px);
    }
         
    @media(max-width: 621px){  
        height: calc(100vh - 30px);
    }
`

export const ContactMiddle = styled.div`
    width:87%;
    margin:0 auto;
    min-height:70vh;

    display: flex;
    justify-content: center;
    align-items: center;    
`
export const Content = styled.section`
    display: flex;
    flex-direction:column;
    font-family: ${({theme})=>theme.font[0]};
    gap:30px;
`
export const InformationBox = styled.div`
        gap:50px;
        display: flex;
        align-items: center;
        justify-content:center;
        
        @media(max-width: 691px){  
            z-index: 100;   
         }

    .align-text{
        text-align:right;
    }
    .middle-line{
        width:1px;
        height: 100px;
        background: #ddd;
    }

    h1{
        display: flex;
        justify-content: column;
        flex-direction:column;
        font-size: 3rem;
    }
    
    h2{
        display: flex;
        justify-content: center;
        align-items: center;

        background-image: linear-gradient(to right, #14DEEB 40%, #A32A9E 60%, #3F1D61 200%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    @media(max-width: 530px){  
        display:flex;
        flex-direction:column ;
        margin-top:90px ;
        
        .align-text{
            text-align:center;
        }

        .middle-line{
            display: none;
        }
    }
`

export const LinkSocial = styled(LinkWeb)`
    margin-top:0 ;

    @media(max-width: 691px){  
        z-index: 100;  
    }
      
   ul{
        list-style:none;

    li{
        display: flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        margin-top:20px ;
    }
   }
`