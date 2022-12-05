import styled from "styled-components";
import backCard from '../../assets/ImgCarrosel/backCard.png'

import { motion } from "framer-motion";

export const Container = styled.section`
        
    .slider{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 35px auto;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .link-repo{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 15px;
        gap: 20px;
        
        a{
            font-family: ${({theme})=> theme.font[0]};
            font-weight: bold;
            border-radius:5px;

            display: flex;
            justify-content: center;
            align-items: center;
            
            width: 100%;
            padding: 10px;
            color:#fff;

            background-color: #1B3B68;
            transition: all 0.3s ease; 
            
            &:hover{
                transition: all 0.3s ease; 
                background-color: #4771AC;
            }
        }
    }

        @media(max-width: 691px){
            position: relative;
            top:0;
            z-index: 9999;  
        }

`

export const Cards = styled(motion.section)`
        background-image:url(${backCard});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;

        max-width:330px;
        height: 460px;
        padding:20px;
        transition: all 0.3s ease; 

        &:hover{
            transition: all 0.3s ease; 
            border: 2px solid #4D9B88;
            scale: 1.03;
        }
        
        @media(max-width: 420px){
            max-width:300px;
            scale: 1.01;
        }

        .description-box{
            background-color: rgba(000, 000, 000, 0.5);
            border-radius: 10px;
            
            p{
                height: 150px;
                font-family: ${({theme})=> theme.font[0]};
                font-size: 0.9375rem;
                padding-top: 20px;
            }
            .tecnologi{
                display: flex;
                width: 100%;
                font-family: ${({theme})=> theme.font[1]};
                
                font-size: 0.75rem;
                color:aqua;
                border-radius: 5px;
            }
        }

        img{
            object-fit: cover;
            border-radius: 5px;
            width: 100%;
            height: 200px;            
        }
`