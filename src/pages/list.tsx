import Head from 'next/head';
import { useRouter } from 'next/router';
import Template from '../components/template/index';
import { useEffect, useState } from 'react';

import MenuList from '../components/menuList';

const List = () => {
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
            <title>List page</title>
          </Head>
          <Template>
            <MenuList></MenuList>
          </Template>
        </>
      )}

      {showContent.loading && 'Carregando'}
    </>
  );
};

export default List;
