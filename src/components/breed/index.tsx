import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { handleListApiCall } from '../../services/handleListApiCall';
import ApiError from '../apiError';
import Loading from '../loading';
import { UlLIst } from './styles';

type BreedTypes = {
  breed: string;
};

const BreedDog = ({ breed }: BreedTypes) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  const possibleBreeds = ['chihuahua', 'husky', 'pug', 'labrador'];

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    async function getData() {
      if (possibleBreeds.indexOf(breed) === -1) {
        breed = 'chihuahua';
        router.push('/breed/chihuahua');
      }
      const responseApi = await handleListApiCall(token, breed);
      if (responseApi.status !== 500) {
        const response = responseApi.data.list;
        setData(response);
        setLoading(false);
        setError(false);
      } else {
        setError(true);
      }
    }
    getData();
  }, [breed]);

  return (
    <>
      {!loading && (
        <UlLIst>
          {data?.map((data, i) => (
            <li key={i}>
              <img src={data} />
            </li>
          ))}
        </UlLIst>
      )}
      {loading && !error && <Loading />}
      {error && <ApiError />}
    </>
  );
};

export default BreedDog;
