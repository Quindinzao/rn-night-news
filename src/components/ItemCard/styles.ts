import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const RNItemCard = styled.View`
  height: 405px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
`;

export const HeaderCard = styled.View`
  height: 256px;
`;

export const HeaderImageCard = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;

  border-top-right-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.lg}px;
`;

export const Overlay = styled(LinearGradient).attrs({
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const HeaderTitleCard = styled.View`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Body = styled.View`
  width: 100%;
  height: 100%;

  padding-top: ${({ theme }) => theme.spacing.lg}px;
  padding-right: ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
`;
