// Interfaces
import { ErrorProps } from '../../interfaces/ErrorProps';

// Styles
import { ErrorText } from './styles';

const Error = ({err}: ErrorProps): React.JSX.Element => {
  return (
    <ErrorText textType={'titleRegular'}>
      {err}
    </ErrorText>
  );
};

export default Error;
