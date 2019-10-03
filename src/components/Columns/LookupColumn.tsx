import * as React from 'react';
import { sp, ItemAddResult } from "@pnp/sp";
import {
    Dropdown,
    IDropdownOption} from 'office-ui-fabric-react/lib/index';
 
export interface ILookupColumnProps {
    lookupListName: string,
    label: string,
    placeholder: string,
    onChange: (column: string, value: any)=> void
}

type State = {
    options: IDropdownOption[]
}

const initialState: State = {
    options: []
}

export class LookupColumn extends React.Component<ILookupColumnProps, State>{
    constructor(props:ILookupColumnProps){
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        let optionResults: IDropdownOption[] = [{key: "", text: "None"}]
        sp.web.lists.getByTitle(this.props.lookupListName).items.getAll().then(options => {
            let newOptions = options.map((obj:any) => {
                return {key: obj.ID, text: obj.Title}
            }) as IDropdownOption[];
            let fullOptionList = optionResults.concat(newOptions);
            this.setState({options: fullOptionList})
        });
    }
    private _onChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption) => {
        if (item){
            this.props.onChange('LookupColumn', item.key);
        }
        else{
            this.props.onChange('LookupColumn', '');
        }
      };

    render(){
        return (
            <Dropdown
                label={this.props.label}
                placeholder={this.props.placeholder}
                options={this.state.options}
                onChange = {this._onChange}
            />
        );
    }    
};