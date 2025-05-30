// External Libraries
import { useState } from 'react';
import { Alert, View } from 'react-native';

// Components
import SelectableBox from '../../components/SelectableBox';
import Text from '../../components/Text';
import Button from '../../components/Button';

// Context
import { useCategoriesContext } from '../../contexts/CategoriesContext';

// Constants
import { newsCategories } from '../../constants/categories';

// Styles
import { Container, Content, ContentButton, StyledLogo } from './styles';

const FavoriteCategories = (): React.JSX.Element => {
  const { saveCategories } = useCategoriesContext();
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);

  const handleCategoryPress = (category: string) => {
    if (categoriesSelected.includes(category)) {
      setCategoriesSelected(categoriesSelected.filter(item => item !== category));
    } else if (categoriesSelected.length >= 1) {
      Alert.alert('Hey,', 'You can only select up to 1 category');
    } else if (categoriesSelected.length < 1) {
      setCategoriesSelected([...categoriesSelected, category]);
    }
  };

  const handleSaveCategories = async () => {
    try {
      await saveCategories(categoriesSelected);
    } catch (err: any) {
      Alert.alert('Oops!', 'Try later');
    }
  };

  return (
    <Container>
      <View>
        <StyledLogo />
        <Text textType="titleLarge">Choose your favorite category</Text>
        <Content>
          {newsCategories.map((item, index) => {
            return (
              <SelectableBox
                key={index}
                label={item}
                onToggle={handleCategoryPress}
                categoriesSelected={categoriesSelected}
              />
            );
          })}
        </Content>
      </View>
      <ContentButton>
        <Button onPress={() => handleSaveCategories()} typeButton="text">
          <Text textType="bodyMedium">Save</Text>
        </Button>
      </ContentButton>
    </Container>
  );
};

export default FavoriteCategories;
