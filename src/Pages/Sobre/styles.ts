import styled from "styled-components";
import { keyframes } from "styled-components";

import sobre from '../../assets/sobre-background.png'
import sobreBackground from '../../assets/IconsSvg/background-avatar-sobre.svg'

import { motion } from "framer-motion";

export const About = styled(motion.div)`
    background-image:url(${sobre});
    background-repeat: no-repeat;
    background-size: cover;

    height: calc(100vh - 70px);
    color:#fff ;

    @media screen and (min-width: 1025px) and (max-width: 1280px) {  
        height: calc(100vh - 30px);
    }
    
    @media screen and (max-width: 1240px) {    
        height:100% ;
        padding:10px; 
    }
   
    @media screen and (min-width: 730px) and (max-width:884px){  
        height: calc(100vh - 30px)
    }
     
`

export const AboutRow = styled.div`
    width:87%;
    margin:0 auto;
    min-height:70vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const Details = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        @media(max-width: 750px){  
            flex-direction: column;
        }
        `

export const StyleAvatar = styled.div`
    width: 508px;
    height: 578px;
    margin: 0px;
    
    background-image:url(${sobreBackground});
    background-repeat: no-repeat;
    background-size: contain;
        

    @media(max-width: 968px){
        display: flex;
        justify-content: center;
        align-items: center;
                
                max-width:300px;
                max-height: 338px;
                
            }
            @media(max-width: 498px){
                display: flex;
                justify-content: center;
                align-items: center;
                max-width:220px;
            }
    
    img{
        width:430px;
        
        @media(max-width: 968px){
                max-width:250px;
            }
            @media(max-width: 498px){
                max-width:180px;
                margin-bottom:55px ;
            }
    }

    @media(max-width: 750px){
                display: none;
            }
`

export const Formation = styled(motion.div)`
        position: relative;
        top:0;
        left: 0;

        display: flex;
        justify-content: center;
        flex-direction: column;
        
        width:50%;
        height:50%;
        padding: 2px;

        border-radius: 15px;
        background: linear-gradient(to right, #01FBEC , #6F01FB );
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
        @media(max-width: 750px){
            width:100%;
            padding: 1px;
            margin-bottom: 50px;
        }

       span{
            background-image: linear-gradient(to right, #14DEEB 50%,#AFABE1);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .first-box{
            background: #040312;         
            z-index: 2;

            border-radius: 15px;
            padding: 15px;
           
            p{
                font-size: 1rem;
                font-family:${({ theme }) => theme.font[1]};

                @media(max-width: 750px){
                    font-size: 0.875rem;
                 
                }
            }
            
        }
     
        .second-box{
            position: absolute;
            top:0;
            left: 0; 

            margin: 15px 20px;
            width:100%;
            height:100%;

            border-radius: 15px;
            border: 3px solid #8F36C6;

            @media(max-width: 750px){
                margin: 12px 5px;
                border: 1px solid #8F36C6;
            }
        }
`

export const Ability = styled.div`
            display: flex;
            justify-content:center;
            align-items: center;

        .skills{
            font-size: 1.875rem;
            padding: 10px;
            background: linear-gradient(90deg, rgba(73, 15, 131, 0.86) 0%, rgba(24, 110, 189, 0.69) 100%);
            border-radius: 0px 8px 0px 8px;
        }
`

const rotate = keyframes`
       to{
        filter: hue-rotate(1turn);
    }
`

export const SkillClass = styled(motion.section)`
    width:87%;
    margin:0 auto;
    margin-top: 30px;
    
    ul{ 
        gap: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        

        li{
            width:200px;
            background: linear-gradient(90deg, #8F36C6 10%, #14DEEB 100%);
            padding:1px;
            border-radius: 5px ;
            
            &:hover{
                    background:linear-gradient(80deg, red, orange);
                    animation: ${rotate} 900ms linear infinite;
                    
                }   

            div{
                height:100px;
                display: flex;
                justify-content: center;

                align-items: center;
                flex-direction: column;
                padding:5px;

                border-radius: 10px ;
                background-color: #050505;
                font-family: ${({theme})=>theme.font[1]};
               
                img{
                    width: 50px;
                }
            }
        }

        @media(max-width: 658px){
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom:110px;

        li{
            width:90px;

            div{
                height:80px;
                border-radius: 5px;
                font-size: 0.8125rem;
                
                    img{
                        width: 30px;
                        
                    }
                }
            }

        }
    }
`