import Header from '../header';
import Footer from '../footer';
import { ContentHeader, Content } from './styles';

type DefaultTemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: DefaultTemplateProps) => {
  return (
    <>
      <ContentHeader>
        <Header />
      </ContentHeader>
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Template;
