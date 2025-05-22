/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { AnimatedBox, Container } from './styles';
import Text from '../Text';
import { Animated } from 'react-native';

type SelectableBoxProps = {
  label: string;
};

const SelectableBox = ({ label }: SelectableBoxProps): React.JSX.Element => {
  const [selected, setSelected] = useState(false);
  const theme = useTheme();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: selected ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.primaryColor, theme.colors.textColor],
  });

  return (
    <AnimatedBox style={{ backgroundColor }}>
      <Container onPress={() => setSelected(!selected)}>
        <Text
          type="bodyMedium"
          style={{
            color: selected
              ? theme.colors.backgroundAppColor
              : theme.colors.textColor,
          }}
        >
          {label}
        </Text>
      </Container>
    </AnimatedBox>
  );
};

export default SelectableBox;
