import React, { useState } from 'react';
import { Container, Content, ContentButton, StyledLogo } from './styles';
import Text from '../../components/Text';
import SelectableBox from '../../components/SelectableBox';
import { Alert, View } from 'react-native';
import Button from '../../components/Button';

const FavoriteCategories = (): React.JSX.Element => {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);

  const handleCategoryPress = (category: string) => {
    if (categoriesSelected.includes(category)) {
      setCategoriesSelected(categoriesSelected.filter(item => item !== category));
    } else if (categoriesSelected.length >= 3) {
      Alert.alert('Hey,', 'You can only select up to 3 categories');
    } else if (categoriesSelected.length < 3) {
      setCategoriesSelected([...categoriesSelected, category]);
    }
  };

  const newsCategories = [
    'World',
    'Politics',
    'Business',
    'Technology',
    'Science',
    'Health',
    'Sports',
    'Entertainment',
    'Lifestyle',
    'Travel',
    'Environment',
    'Education',
    'Crime',
    'Opinion',
    'Food',
    'Fashion',
    'Real Estate',
    'Weather',
    'Culture',
    'Economy',
  ];

  return (
    <Container>
      <View>
        <StyledLogo />
        <Text type="titleLarge">Choose your three favorite categories</Text>
        <Content>
          {newsCategories.map((item, index) => {
            return <SelectableBox key={index} label={item} onToggle={handleCategoryPress} categoriesSelected={categoriesSelected} />;
          })}
        </Content>
      </View>
      <ContentButton>
        <Button onPress={() => console.log('Button')}>Save</Button>
      </ContentButton>
    </Container>
  );
};

export default FavoriteCategories;
