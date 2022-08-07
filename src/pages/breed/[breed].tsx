import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Template from '../../components/template/index';
import BreedDog from '../../components/breed';

type BreedTypes = {
  breed: string;
};

const Breed = ({ breed }: BreedTypes) => {
  const router = useRouter();
  const [showContent, setShowContent] = useState({
    loading: true,
  });
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setShowContent({
        loading: false,
      });
    } else {
      router.push('/register');
    }
  }, []);
  return (
    <>
      {!showContent.loading && (
        <>
          <Head>
            <title>{breed}</title>
          </Head>
          <Template>
            <BreedDog breed={breed}></BreedDog>
          </Template>
        </>
      )}
    </>
  );
};

Breed.getInitialProps = async ({ query }: any) => {
  return {
    breed: query.breed,
  };
};

export default Breed;
