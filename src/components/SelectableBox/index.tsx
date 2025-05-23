/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import { RNSelectableBox, Container } from './styles';
import Text from '../Text';
import { Animated } from 'react-native';

type SelectableBoxProps = {
  label: string;
  categoriesSelected: string[];
  onToggle: (item: string) => void;
};

const SelectableBox = ({ label, categoriesSelected, onToggle }: SelectableBoxProps): React.JSX.Element => {
  const isSelected = categoriesSelected.includes(label);
  const theme = useTheme();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isSelected ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [categoriesSelected]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.primaryColor, theme.colors.textColor],
  });

  const handleToggle = () => {
    onToggle(label);
  };

  return (
    <RNSelectableBox style={{ backgroundColor }}>
      <Container onPress={handleToggle}>
        <Text
          textType="bodyMedium"
          style={{
            color: isSelected
              ? theme.colors.backgroundAppColor
              : theme.colors.textColor,
          }}
        >
          {label}
        </Text>
      </Container>
    </RNSelectableBox>
  );
};

export default SelectableBox;
