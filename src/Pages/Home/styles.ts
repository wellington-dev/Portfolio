import styled from "styled-components";

import { motion } from "framer-motion";

import Home from '../../assets/Home-img-de-fundo.png'
import IconsGitHub from "../../assets/IconsGithub";
import IconsLinkedin from "../../assets/IconsLinkedin";

export const Container = styled.div`
    background-image:url(${Home});
    background-repeat: no-repeat;
    background-size: cover;

    height: calc(100vh - 80px);
    background-color: #050505 ;
    color:#fff;     
    
    @media(max-width: 691px){  
        height: calc(100vh - 40px);
    }
`


export const GitHubSVG = styled(IconsGitHub)`      
`
export const LinkedinSVG = styled(IconsLinkedin)`
`

export const LinkWeb = styled(motion.section)`
        z-index:900;
        position:relative;
        
        width:87%;
        margin:10px auto;        
        
        @media(max-width: 620px){
            margin-bottom: 0px;
            padding-top: 30px;
            z-index:900;
        }
        
        span{
            width:100%;
            @media(max-width: 620px){
                flex-direction:row;
            }   
        }
        
        svg{

                stroke: #14DEEB;
                width: 36px;
                height: 36px;
                transition: all 0.5s ease; 

                &:hover{
                    stroke: none;
                    fill:#12F8DD;
                    transition: all 0.5s ease; 
                }
            }
        
`

export const Row = styled.div`
    width:87%;
    margin:60px auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 620px){
        margin:30px auto;
    }
`
export const MiddleBox = styled.div`
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 750px){  
        flex-direction:column-reverse;
        
            &>*:first-child{
                margin-top:0.625rem;
            }
    }

`
export const BoxText = styled(motion.div)`
        display: flex;
        justify-content: center;
        flex-direction: column;
        
        width:50%;
        height:50%;
        font-size: 1.3125rem;
        
        padding: 15px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: rgba(255, 255, 255, 0.1);
   
        border:1px solid #186EBD;
        border-radius:20px ;
           
        @media(max-width: 750px){
            font-size: 0.875rem;
            width:100%;
            padding: 10px;
        }

        span{
            background-image: linear-gradient(to right, #14DEEB 40%, #A32A9E 60%, #3F1D61 200%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        p{
            margin-top: 1.25rem;
            font-family: ${({ theme }) => theme.font[0]};
            
            @media(max-width: 498px){
                    margin-top: 0.625rem;
                    font-size: 1.0625rem;
                    font-weight:700;
                    color:#ddd;
                }
        }
`

export const BoxImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width:450px;
            @media(max-width: 968px){
                max-width:300px;
            }
            @media(max-width: 750px){
                display: none;
            }
    }
`