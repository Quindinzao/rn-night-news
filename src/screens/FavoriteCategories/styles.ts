import styled from 'styled-components/native';
import Logo from '../../assets/svg/Logo';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
}))`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundAppColor};
  padding-left: ${props => props.theme.spacing.md}px;
  padding-right: ${props => props.theme.spacing.md}px;
`;

export const StyledLogo = styled(Logo).attrs({
  width: 64,
  height: 64,
})`
  margin-top: ${props => props.theme.spacing.xxl}px;
  margin-bottom: ${props => props.theme.spacing.lg}px;
  align-self: center;
`;

export const Content = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-top: ${props => props.theme.spacing.xl}px;
`;

export const ContentButton = styled.View`
  height: 86px;
  width: 100%;
  align-items: flex-start;
`;
