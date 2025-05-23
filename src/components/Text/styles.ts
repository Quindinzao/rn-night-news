import styled from 'styled-components/native';
import { getTextVariants, TextVariant } from '../../styles/textVariantes';

type TextProps = {
  textType: TextVariant;
};

export const RNText = styled.Text<TextProps>`
  ${({ textType: type, theme }) => {
    const variant = getTextVariants(theme)[type];

    return `
      color: ${variant.color};
      font-size: ${variant.fontSize}px;
      font-family: ${variant.fontFamily};
    `;
  }}
`;
