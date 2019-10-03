import * as React from 'react';
import { sp, ItemAddResult } from "@pnp/sp";
import {
    Dropdown,
    IDropdownOption} from 'office-ui-fabric-react/lib/index';
 
export interface IChoiceColumnProps {
    listName: string,
    label: string,
    placeholder: string,
    onChange: (column: string, value: string)=> void
}

type State = {
    options: IDropdownOption[]
}

const initialState: State = {
    options: []
}

export class ChoiceColumn extends React.Component<IChoiceColumnProps, State>{
    constructor(props:IChoiceColumnProps){
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        sp.web.lists.getByTitle(this.props.listName).fields.getByInternalNameOrTitle("ChoiceColumn").select('Choices').get().then(options => {
            let optionResults = options.Choices.map((value:string) => {
                return {key: value, text: value}
            }) as IDropdownOption[];
            this.setState({options: optionResults})
        });
    }
    private _onChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption) => {
        if (item){
            this.props.onChange('ChoiceColumn', item.text);
        }
        else{
            this.props.onChange('ChoiceColumn', '');
        }
      };

    render(){
        return (
            <Dropdown
                
                        label="ChoiceColumn"
                        placeholder="Select or type an option"
                        options={this.state.options}
                        onChange = {this._onChange}
                    />
        );
    }
    

    
};