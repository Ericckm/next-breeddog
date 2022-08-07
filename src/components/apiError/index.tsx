import {
  Container,
  RedirectSpan,
} from './styles';

const ApiError = () => {
  return (
    <>
      <Container>
        <RedirectSpan>
          Estamos enfrentando algum problema<br /> tente novamente mais tarde.
        </RedirectSpan>
      </Container>
    </>
  );
};

export default ApiError;
