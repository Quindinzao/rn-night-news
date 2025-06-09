// External libraries
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

// Interfaces
import { ListFooterComponentProps } from '../../interfaces/ListFooterComponentProps';

const ListFooterComponent = (props: ListFooterComponentProps) => {
  const theme = useTheme();
  if (props.error) {
    props.setError(props.error);
  }

  if (!props.selectedCategory) {
    return props.isLoadingMore && (
      <ActivityIndicator size="large" color={theme.colors.primaryColor} />
    );
  }
};

export default ListFooterComponent;
