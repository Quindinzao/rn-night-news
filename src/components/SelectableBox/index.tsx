/* eslint-disable react-hooks/exhaustive-deps */
// External Libraries
import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { useTheme } from 'styled-components/native';

// Components
import Text from '../Text';

// Interfaces
import { SelectableBoxProps } from '../../interfaces/SelectableBoxProps';

// Styles
import { RNSelectableBox, Container } from './styles';

const SelectableBox = (props: SelectableBoxProps): React.JSX.Element => {
  const isSelected = props.selectedCategory === props.label;
  const theme = useTheme();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isSelected ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [props.selectedCategory]);

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
