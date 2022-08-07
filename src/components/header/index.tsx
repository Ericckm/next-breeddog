import Link from 'next/link';
import { Container, WrapperUl } from './styles';

const Header = () => {
  return (
    <>
      <Container>
        <p>Ericckm</p>
        <WrapperUl>
          <li>
            <Link href='/breed/chihuahua'>Chihuahua</Link>
          </li>
          <li>
            <Link href='/breed/husky'>Husky</Link>
          </li>
          <li>
            <Link href='/breed/pug'>Pug</Link>
          </li>
          <li>
            <Link href='/breed/labrador'>Labrador</Link>
          </li>
        </WrapperUl>
      </Container>
    </>
  );
};

export default Header;
