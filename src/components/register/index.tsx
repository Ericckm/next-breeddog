import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { handleSubmitApiCall } from '../../services/handleSubmitApiCall';
import { validateEmail } from '../../utils/validateEmail';
import ApiError from '../apiError';
import {
  Button,
  Container,
  FormWrapper,
  FullContainer,
  Input,
  Title,
  Wrapper,
} from './styles';

const Register = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [apiError, setApiError] = useState(false);
  const router = useRouter();

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    const verifyEmail = validateEmail(e.target.value);
    if (!verifyEmail) {
      setError('Informe um email válido');
    } else {
      setError('');
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    const verifyEmail = validateEmail(email);
    if (!verifyEmail) {
      setError('Informe um email válido');
    } else {
      const responseApi = await handleSubmitApiCall(email);
      if (responseApi.status !== 500) {
        const token = sessionStorage.getItem('token');
        if (token) router.push('list');
      } else {
        setApiError(true);
      }
    }
  }

  return (
    <>
      {!apiError ? (
        <FullContainer>
          <Container>
            <Wrapper>
              <Title>Se registre para ver alguns doguinhos</Title>
              <p>Só precisamos do seu email para prosseguir</p>
              <FormWrapper>
                <Input
                  placeholder='E-mail'
                  type='email'
                  onChange={handleEmail}
                  onBlur={handleEmail}
                />
                {error && <span>{error}</span>}
                <Button onClick={handleSubmit}>Login</Button>
              </FormWrapper>
            </Wrapper>
          </Container>
        </FullContainer>
      ) : (
        <ApiError />
      )}
    </>
  );
};

export default Register;
