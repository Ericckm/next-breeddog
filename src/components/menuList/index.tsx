import Head from 'next/head';
import { Container, Paragraph } from './styles';

const MenuList = () => {
  return (
    <>
      <Head>
        <title>Breed Dog</title>
      </Head>
      <Container>
        <h1>Seja bem vindo!</h1>
        <Paragraph>Para começar, selecione uma raça que gostaria de ver fotos!</Paragraph>
      </Container>
    </>
  );
};

export default MenuList;
