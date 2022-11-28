import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdLock, MdMail, MdPerson } from 'react-icons/md';
import { Container, Column, Title, Wrapper, SubtitleCadastro, TitleCadastro, Row, CriarText, TenhoConta } from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from '../../components/Button';

const Cadastro = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (data.nome && data.email && data.password) {
      console.log('Cadastrado com Sucesso');
      navigate('/feed')
    } else {
      console.log(watch(errors));
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua Conta e make change_</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input type='text' placeholder="Nome Completo" leftIcon={<MdPerson />} backgroundColor="blue" name="nome" control={control} required />
              <Input type='email' placeholder="E-mail" leftIcon={<MdMail />} name="email" control={control} />
              <Input type='password' placeholder="Password" leftIcon={<MdLock />} name="password" control={control} />
              <Button title="Criar Minha Conta" variant='secondary' type="submit" />
            </form>
            <Row>
              <SubtitleCadastro>
                Ao clicar em "criar minha conta grátis",
                declaro que aceito as Politicas de
                Privacidade e os Termos de Uso da DIO.
              </SubtitleCadastro>
            </Row>
            <Row>
              <TenhoConta>
                já tenho conta.
              </TenhoConta>
              <CriarText>
                Fazer Login
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

export { Cadastro };