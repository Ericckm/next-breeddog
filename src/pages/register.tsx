import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Register from '../components/register';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      router.push('list');
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!loading && (
        <>
          <Head>
            <title>Register User</title>
          </Head>
          <Register />
        </>
      )}
    </>
  );
};

export default Home;
