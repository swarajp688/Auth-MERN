import styled from 'styled-components';

const LoginWrapper = styled.div`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
    width:100% ;
    display: flex;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    h1{
        text-align:center ;
    }
    .container{
        width:60% ;
        background-color:#fff ;
        display:flex ;
        flex-direction:column ;
        justify-content:center ;
        align-items:center ;
        padding:0px 50px ;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        @media only screen and (max-width: 600px) {
            width:100% ;
}
    }
    .form{
        display: flex;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
        width:100% ;
        padding:0px 50px ;
    input{
        width:90%;
        height:30px ;
        padding:5px ;
        border-radius:5px ;
        border:1px solid #43B0EF;
        @media only screen and (min-width: 1000px) {
            width:70% ;
        }
        &:focus{
            border:1px solid #43B0EF;
            outline:none ;
        }
    }

}
    .label{
        margin:10px ;
        width:90%;
        font-size:14px ;
        font-weight:600 ;
        @media only screen and (min-width: 1000px) {
            width:70% ;
}
    }
    .btn{
        width:200px ;
        height:50px ;
        background: #43B0EF;
        border:none ;
        border-radius:5px ;
        margin-top:30px ;
        margin-bottom:20px ;
        color:#fff ;
        font-size:16px ;
        cursor: pointer;
    }
    .signup{
        width:200px;
        height:50px ;
        font-size:16px ;
        border:1px solid #43B0EF ;
        background:transparent ;
        border-radius:5px ;
        margin-bottom:30px ;
        .link{
            text-decoration:none ;
            color: #43B0EF;
        }
    }
    .disabled{
        width:200px ;
        height:50px ;
        background: grey;
        border:none ;
        border-radius:5px ;
        margin-top:30px ;
        margin-bottom:20px ;
        color:#fff ;
        font-size:16px ;
        cursor: no-drop;
    }
    .msg{
        width:92% ;
        text-align:right ;
        @media only screen and (min-width: 1000px) {
            width:72% ;
}
        p{
            font-size:14 ;
            margin:2px ;
            font-weight:800px ;
        }
    }
    .color-blue{
        color: #43B0EF;
    }
`;

export default LoginWrapper;