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
        <ItemCard
          itemCardType={'verticalList'}
          urlToImage={'https://gizmodo.com/app/uploads/2024/12/Tile.jpg'}
          title={'Tile’s 4-Pack Bluetooth Trackers Now Beat Apple’s AirTags on Price and Function, Shape Variety Included'}
          description={'For a limited time, you can get this four-pack of Tile trackers at all-time low price on Amazon.'}
          sourceName={'Gizmodo.com'}
          publishedAt={'2025-05-21T12:14:49Z'}
          isFavorite={false}
        />
      </Body>
    </Container>
  );
};

export default Home;
