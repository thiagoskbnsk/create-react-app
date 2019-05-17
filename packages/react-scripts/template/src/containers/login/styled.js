import styled, { css } from 'styled-components';
import { Col, AddPaddingByScreenSize } from 'design-system/grid';
import { media } from 'design-system/helpers';
import { colors } from 'design-system/constants';

export const Section = styled.section`
  height: 100vh;
  min-width: 100%;
  background: ${colors.white};

  ${AddPaddingByScreenSize()}
`;

export const ImageBackground = styled(Col)`
  display: none;

  ${media.medium`
    ${props => props.image
      && css`
        background: url(${props.image}) no-repeat;
      `}
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;

    &:after {
      content: '';
      background-image: linear-gradient(123deg, rgb(51, 0, 255), rgb(247, 107, 28));
      opacity: .2;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `}
`;

export const Text = styled.div`
  padding: 64px 40px;
  z-index: 1;
`;

export const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 32px;
  justify-content: flex-end;
`;

export const HeaderLogo = styled.img``;

export const LoginForm = styled.div`
  margin: 0 16px;
  max-width: 320px;
  text-align: center;
`;

export const WhiteBackground = styled(Col)`
  background: ${colors.white};
`;

export const ErrorAuth = styled.p`
  align-items: center;
  background-color: #feecf0;
  border-radius: 4px;
  color: #c82f3e;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  margin: 32px 0 32px;
`;