import styled from 'styled-components';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    function completeRegistry(e) {
        e.preventDefault();
        setIsDisabled(true);
        const body = {
            name,
            email,
            password,
            confirmPassword
        }
        console.log(body);
        //setIsDisabled(false);
    }

    return (
        <Container>
            <ContentHolder>
                <h1>MyWallet</h1>
                <form onSubmit={completeRegistry}>
                    <Input
                        placeholder="Nome"
                        disabled={isDisabled}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="E-mail"
                        disabled={isDisabled}
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Senha"
                        disabled={isDisabled}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        placeholder="Confirme a senha"
                        disabled={isDisabled}
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        disabled={isDisabled}
                        type="submit"
                    >
                        {isDisabled ? <Loader
                            type="Watch"
                            color="#FFFFFF"
                            height={45}
                            width={100}
                        /> : "Cadastrar"}
                    </Button>
                </form>
            </ContentHolder>
        </Container>
    )

}

const Container = styled.div`
    width:100%;
    min-height:100vh;
    box-sizing: border-box;
    display:flex;
    background-color: #8C11BE;
`;

const ContentHolder = styled.div`
    margin:auto auto;
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;

    h1{
        font-family: 'Saira Stencil One';
        font-size:32px;
        color:#FFFFFF;
    }

    form{
        display:flex;
        flex-direction:column;
        width:90%;
        margin-top:28px;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    margin-top:13px;
    height:58px;
    border-radius: 5px;
    border:none;
    outline:none;
    padding: 19px 0 17px 15px;
    font-family: 'Raleway';
    color: #000000;
    font-size:20px;

    ::-webkit-input-placeholder  { 
        font-family: 'Raleway';
        color: #000000;
        font-size:20px;
    }
    :disabled{
        opacity:0.7;
    }
`;

const Button = styled.button`
    box-sizing:border-box;
    background-color: #A328D6;
    border-radius: 5px;
    margin-top:13px;
    border:none;
    outline:none;
    height:46px;
    font-family:'Raleway';
    color:#FFFFFF;
    font-size:20px;
    font-weight:700;
    :disabled{
        opacity:0.7;
    }
`;