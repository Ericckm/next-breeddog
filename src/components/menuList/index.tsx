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
        <Paragraph>
          Selecione uma das raças no menu para visualizar as imagens
        </Paragraph>
      </Container>
    </>
  );
};

export default MenuList;
