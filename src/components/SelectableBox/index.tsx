/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import { RNSelectableBox, Container } from './styles';
import Text from '../Text';
import { Animated } from 'react-native';
import { SelectableBoxProps } from '../../interfaces/SelectableBox';

const SelectableBox = (props: SelectableBoxProps): React.JSX.Element => {
  const isSelected = props.categoriesSelected.includes(props.label);
  const theme = useTheme();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isSelected ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [props.categoriesSelected]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.primaryColor, theme.colors.gray],
  });

  const handleToggle = () => {
    props.onToggle(props.label);
  };

  return (
    <RNSelectableBox style={{ backgroundColor }}>
      <Container onPress={handleToggle}>
        <Text
          textType="bodyMedium"
          style={{
            color: isSelected
              ? theme.colors.secondaryColor
              : theme.colors.gray,
          }}
        >
          {props.label}
        </Text>
      </Container>
    </RNSelectableBox>
  );
};

export default SelectableBox;
