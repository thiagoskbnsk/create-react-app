import React from 'react';
import { Row } from 'design-system/grid';
import { P } from 'design-system/typography';
import LoginForm from './LoginForm';
import * as S from './styled';

import data from './data';

const Header = () => (
  <S.Header>
    <a href="https://www.bcredi.com.br">
      <S.HeaderLogo src={data.headerLogo} width="91" />
    </a>
  </S.Header>
);

const ImageBackgroundText = () => {
  const { text, author, company } = data.imageBackground.testimonial;

  return (
    <S.ImageBackground image={data.imageBackground.image} medium={4} fullhd={3}>
      <S.Text>
        <P color="white" textAlign="right" size="20px" weight="light" margin={{ t: 0, b: 6 }}>
          {`"${text}"`}
        </P>
        <P color="white" textAlign="right" weight="semibold" margin="0">{`${author},`}</P>
        <P color="white" textAlign="right" margin="0">
          {company}
        </P>
      </S.Text>
    </S.ImageBackground>
  );
};

const Login = () => (
  <S.Section>
    <Row>
      <ImageBackgroundText />
      <S.WhiteBackground medium={4} fullhd={5} alignItems="center" justify="center">
        <Header />
        <LoginForm />
      </S.WhiteBackground>
    </Row>
  </S.Section>
);

export default Login;
