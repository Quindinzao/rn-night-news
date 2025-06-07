// External Libraries
import { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';

// Components
import SelectableBox from '../../components/SelectableBox';
import Text from '../../components/Text';
import Button from '../../components/Button';

// Context
import { useCategoryContext } from '../../contexts/CategoryContext';

// Constants
import { newsCategories } from '../../constants/categories';

// Styles
import { Container, Content, ContentButton, StyledLogo } from './styles';

const FavoriteCategories = (): React.JSX.Element => {
  const { saveCategory, selectedCategory } = useCategoryContext();
  const [categorySelected, setCategorySelected] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      setCategorySelected(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryPress = (category: string) => {
    if (categorySelected === category) {
      setCategorySelected(null); // desmarca se já está selecionada
    } else {
      setCategorySelected(category);
    }
  };

  const handleSaveCategory = async () => {
    if (!categorySelected) {
      Alert.alert('Hey,', 'You must select a category before saving');
      return;
    }

    const success = await saveCategory(categorySelected);
    if (!success) {
      Alert.alert('Oops!', 'Error saving category. Try again later.');
    }
  };

  return (
    <Container>
      <View>
        <StyledLogo />
        <Text textType="titleLarge">Choose your favorite category</Text>
        <Content>
          {newsCategories.map((item, index) => (
            <SelectableBox
              key={index}
              label={item}
              onToggle={handleCategoryPress}
              categoriesSelected={categorySelected ? [categorySelected] : []}
            />
          ))}
        </Content>
      </View>
      <ContentButton>
        <Button onPress={handleSaveCategory} typeButton="text">
          <Text textType="bodyMedium">Save</Text>
        </Button>
      </ContentButton>
    </Container>
  );
};

export default FavoriteCategories;
