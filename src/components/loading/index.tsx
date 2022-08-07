import {
  Container,
  RedirectSpan,
  Spinner,
  Title,
  Wrapper,
  WrapperSpinner,
} from './styles';

const Loading = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Carregando</Title>
          <WrapperSpinner>
            <RedirectSpan>
              Aguarde, enquanto estamos carrengando o conteúdo
            </RedirectSpan>
            <br />
            <Spinner />
          </WrapperSpinner>
        </Wrapper>
      </Container>
    </>
  );
};

export default Loading;
