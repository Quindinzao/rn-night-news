import { Body, Container } from './styles';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';

const Home = (): React.JSX.Element => {
  return (
    <Container>
      <Header
        title={'News for your\nInsomnia'}
        imageStr={require('../../assets/images/imgScreen1.png')}
      />
      <Body>
        <ItemCard />
      </Body>
    </Container>
  );
};

export default Home;
