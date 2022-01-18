import React from "react";
import Header from "../../components/Header";
import { KeyboardView, Container, Title, Input, ButtonSubmit, TextSubmit } from "./styles";

const Signin = () => {
    return (
        <KeyboardView>
            <Header />
            <Container>
                <Title> Login</Title>
                <Input 
                placeholder="E-mail"
                />
                <Input 
                placeholder="Senha"
                secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit> Entrar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    );
};

export default Signin;
