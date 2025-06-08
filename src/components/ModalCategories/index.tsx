import { Modal as RNModal } from 'react-native';
import { CategoriesMosaic, CloseButton, ModalContent, Row } from './styles';
import Text from '../Text';
import Close from '../../assets/svg/Close';
import SelectableBox from '../SelectableBox';

interface ModalCategories {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleCategoryPress: (category: string) => void;
  newsCategories: string[];
  categorySelected: string;
}

const ModalCategories = (props: ModalCategories): React.JSX.Element => {

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
                  categorySelected={props.categorySelected}
                />
              );
            })}
          </CategoriesMosaic>
        </ModalContent>
      </RNModal>
  );
};

export default ModalCategories;
