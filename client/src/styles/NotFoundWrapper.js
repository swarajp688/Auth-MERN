import styled from "styled-components";
import image from "../assets/404.jpg";
const NotFoundWrapper = styled.div` 


        width:100vw ;
        margin:0px ;
        height:100vh ;
        background-color:#fff ;
        display:flex ;
        flex-direction:column ;
        justify-content:center ;
        align-items:center ;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.container,
.container > .row,
.container > .row > div {
    height: 100%;
}

#countUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    .number {
        font-size: 4rem;
        font-weight: 500;
        
        + .text {
            margin: 0 0 1rem;
        }
    }
    
    .text {
        font-weight: 300;
        text-align: center;
    }
}

`;

export default NotFoundWrapper;