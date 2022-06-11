

import styled from 'styled-components';

const UpdateCandidateWrapper = styled.div`
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
    width:100% ;
    display: flex;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    .candidate-form{
        width:70% ;
        display:flex;
        flex-direction:row ;
        flex-wrap:wrap ;
        @media only screen and (max-width: 600px) {
            display:flex;
        flex-direction:column ;
}
    }
    .wrap-div{
        width:50% ;
        display:flex ;
        flex-direction:column ;
        margin:10px 0px ;
        @media only screen and (max-width: 600px) {
            
            width:100% ;
}
        input , label{
            margin:5px 0px;
            width:80% ;
        }
        input{
            border-radius:5px ;
        border:1px solid #43B0EF;
        height:30px ;
        padding:5px ;
        &:focus{
            border:1px solid #43B0EF;
            outline:none ;
            
        }
        input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

        }
    }
    .age{
        appearance: none;
        -webkit-appearance: none;
    }
    .btn-wrapper{
        width:100% ;
        text-align:right ;
        margin-right:8% ;
        display:flex ;
        flex-direction:row-reverse ;
        margin-top: 30px;
        margin-bottom:50px ;
        @media only screen and (max-width: 600px) {
            width:83% ;

}
    }
    .btn-add{
        width:100px ;
        height:50px ;
        background: #43B0EF;
        border:none ;
        border-radius:5px ;
        margin-top:30px ;
        margin-bottom:20px ;
        color:#fff ;
        font-size:16px ;
        cursor: pointer;
        margin-left:50px ;
    }
    .cancel-add{
        width:100px;
        height:50px ;
        font-size:16px ;
        border:1px solid #43B0EF ;
        background:transparent ;
        border-radius:5px ;
        margin-top:30px ;
        cursor: pointer;
    }
    .cancel-add:hover{
        background-color:#43B0EF ;
        color:#fff ;
    }
`;

export default UpdateCandidateWrapper;