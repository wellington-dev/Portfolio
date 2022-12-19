import styled from "styled-components";

export const Navigation = styled.div`

    @media(max-width: 691px){
        display:flex;
        justify-content: center;
        align-items: flex-end;
        
        position: fixed;
        top:0;
        left:0;
   
        width: 100%;
        height: 97vh;    
        /* z-index: 5; */
    }

    a{
        color:#fff;
            &:hover{
            color:aqua;
            }
    }

    a.active{
        /* opacity: 0.7; */
        /* background: #ffb703; */
        /* background: #02FFB3; */
        background-clip: text;
        -webkit-background-clip: text;
        /* color: transparent; */
        color: #ffb703;

        &:hover{
            color: #02FFB3;
        }
    }
`


export const MenuContainer = styled.ul`
    display:flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap:2rem; //mude no media para menor


    img{
        width:20px;
        height:18px;
        margin: -3px 5px;
        filter: invert(1);
        
        @media(max-width: 691px){
            margin: 0px 11px;
        }
    }
   
    @media(max-width: 691px){  
        border-radius: 10px;
        background: #ffffff20;
        gap:1px; 
    }
`

export const MenuItem = styled.li`
    
    @media(max-width: 691px){
        margin:0 ;
        height: 70px;
        z-index: 1;
        flex-direction: column;
        
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            
            font-family: ${({theme})=> theme.font[1]};
            margin-top: 5px;
            font-size:0.9375rem ;
        }
    }
        
    display: flex;
    align-items: center;
    justify-content: space-between;
        
    padding: 10px 15px;
    font-family: ${({theme})=> theme.font[1]};
    font-weight:100;

    font-size: 0.9375rem;
    background: transparent;
    border: none;

    position: relative;
    z-index: 1;
    
    &:hover{
        color:aqua;
        cursor: pointer;
    }
    
    &::after,
    &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all .4s;
   
    }


    &::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;

    background: #4771AC;
    border-radius: 50px;
      
        @media(max-width: 691px){
            background: none;
        }
    }
 

    &::after {
    transform: translate(0px, 0px);
    width: 10px;
    height: 10px; 
    
    background: #ffffff15;
    backdrop-filter: blur(5px);
    border-radius: 50px;

   
    @media(max-width: 691px){
            background: none;
            backdrop-filter:none;
        }
    }

    &:hover::before {
    transform: translate(5%, 20%);
    width: 10px;
    height: 10px;
    }

    &:hover::after {
    border-radius: 50px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;

    }

    &:active::after {
    transition: 0s;
    transform: translate(0, 5%);
    }
    
`