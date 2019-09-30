import * as React from 'react';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import ItemView from './ItemView';
import IMainList from '../interfaces/IMainList';

const containerStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10
  };

  const FormComponent: React.FunctionComponent = () => {
    return (
      <Stack tokens={containerStackTokens}>
        <ItemView/>
      </Stack>
    );
  };

  export default FormComponent;