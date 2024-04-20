import { PropsWithChildren } from 'react';

import * as S from './styles';

interface HeaderProps {
  title?: string;
}

export const Header = ({ children, title }: PropsWithChildren<HeaderProps>) => (
  <S.HeaderContainer>
    <h1 style={{ marginLeft: '5px' }}>{title}</h1>
    {children}
  </S.HeaderContainer>
);
