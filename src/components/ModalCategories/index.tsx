// External Libraries
import { Modal as RNModal } from 'react-native';

// Components
import Text from '../Text';
import SelectableBox from '../SelectableBox';

// Interfaces
import { ModalCategoriesProps } from '../../interfaces/ModalCategoriesProps';

// Assets
import Close from '../../assets/svg/Close';

// Styles
import {
  CategoriesMosaic,
  CloseButton,
  ModalContent,
  Row,
} from './styles';

const ModalCategories = (props: ModalCategoriesProps): React.JSX.Element => {

  const closeModal = () => props.setIsModalVisible(false);

  return (
    <RNModal
        animationType="slide"
        transparent
        visible={props.isModalVisible}
        onRequestClose={closeModal}
      >
        <ModalContent>
          <Row>
            <Text textType="titleLarge">Filter by categories</Text>
            <CloseButton onPress={closeModal}>
              <Close />
            </CloseButton>
          </Row>
          <CategoriesMosaic>
            {props.newsCategories.map((item, index) => {
              return (
                <SelectableBox
                  key={index}
                  label={item}
                  onToggle={props.handleCategoryPress}
                  selectedCategory={props.selectedCategory}
                />
              );
            })}
          </CategoriesMosaic>
        </ModalContent>
      </RNModal>
  );
};

export default ModalCategories;
