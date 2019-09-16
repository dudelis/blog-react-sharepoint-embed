import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { Web } from '@pnp/sp';


const web = new Web("https://dudelisdev.sharepoint.com/sites/teamclassic");

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 600 } }
  };

  export type MainFormProps = {
      
  }

  export type MainFormState = {
      isCheckboxChecked: boolean,
      items: any[]
  }

class MainForm extends React.Component<any, MainFormState>{
    constructor(props: any){
        super(props);
        this.state = {items: [], isCheckboxChecked: false}
    }
    async componentDidMount(){
        var listItems: any[] = await web.lists.getByTitle("ReactEnabledList").items.getAll();
        this.setState({items: listItems});
    }
    public render(){
        return (
            <Stack tokens={columnProps.tokens} styles={columnProps.styles}>
                <TextField label="Title" />
               
                <TextField label="Title2" />
                <TextField label="Title3" />
                <ul>
                    {this.state.items.map(x => (<li>{x.Title}</li>))}
                </ul>
            </Stack>
        );
    }
}

export default MainForm;