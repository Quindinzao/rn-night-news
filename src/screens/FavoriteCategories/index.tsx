import { Container } from './styles';
import Header from '../../components/Header';

const FavoriteCategories = (): React.JSX.Element => {
  return (
    <Container>
      <Header
        title={'News for your\nInsomnia'}
        imageStr={require('../../assets/images/imgScreen1.png')} />
    </Container>
  );
};

export default FavoriteCategories;
