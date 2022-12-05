import styled from "styled-components";
import onda_sobre from '../../assets/onda-de-fundo.png'

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    background-image:url(${onda_sobre});
    background-repeat: no-repeat;
    background-size: cover;

    height: calc(100vh - 71px);
    color:#fff;

    @media(max-width: 691px){  
        height: calc(100vh - 30px);
    }
`
export const Row = styled.div`
    width:87%;
    margin:0 auto;
    min-height:80vh;
`