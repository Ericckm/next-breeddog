import axios from 'axios';

type handleListApiCallTypes = {
  status: number;
  data: any;
};

export async function handleListApiCall(
  token,
  breed
): Promise<handleListApiCallTypes> {
  try {
    const request = await axios.get(
      `https://dogbreed-api.q9.com.br/list/?breed=${breed} `,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    );
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
