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
  const [mySelectedCategory, setMySelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      setMySelectedCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryPress = (category: string) => {
    if (mySelectedCategory === category) {
      setMySelectedCategory(null);
    } else {
      setMySelectedCategory(category);
    }
  };

  const handleSaveCategory = async () => {
    if (!mySelectedCategory) {
      Alert.alert('Hey,', 'You must select a category before saving');
      return;
    }

    const success = await saveCategory(mySelectedCategory);
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
              selectedCategory={mySelectedCategory ? mySelectedCategory : ''}
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
