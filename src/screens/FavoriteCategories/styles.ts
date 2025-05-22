import styled from 'styled-components/native';
import Logo from '../../assets/svg/Logo';

export const Container = styled.ScrollView`
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
