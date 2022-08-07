import axios from 'axios';

type handleSubmitApiCallTypes = {
  status: number;
  data: any;
};

export async function handleSubmitApiCall(
  email
): Promise<handleSubmitApiCallTypes> {
  try {
    const request = await axios.post(
      `https://dogbreed-api.q9.com.br/register`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = request.data.user.token;
    sessionStorage.setItem('token', data);
    return {
      status: request.status,
      data: request.data,
    };
  } catch {
    return {
      status: 500,
      data: {},
    };
  }
}
