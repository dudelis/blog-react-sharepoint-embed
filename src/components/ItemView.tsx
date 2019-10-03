import * as React from 'react';
import { sp, ItemAddResult } from "@pnp/sp";
import {
    Dropdown,
    Label,
    TextField,
    DropdownMenuItemType,
    IDropdownStyles,
    IDropdownOption} from 'office-ui-fabric-react/lib/index';

import IMainList from '../interfaces/IMainList';

//constants
const listName = "MainList";
export type State = {
    fields: IMainList,
    choiceOptions: IDropdownOption[]
}

export default class ItemView extends React.Component<any, State >{
    constructor(props: any){
        super(props);
        this.state = {} as State;
    }
    async componentDidMount(){
        let items = await sp.web.lists.getByTitle(listName).items.getAll();
        console.log(items);
        this.getChoiceOptions();
    }

    public render(): JSX.Element{
        return (
            <React.Fragment>
                <TextField id="titleColumn" label="Title" required/>
                <TextField id="multipleLineColumn" multiline rows={3} label="MultipleLineColumn"/>
                <Dropdown
                    label="ChoiceColumn"
                    placeholder="Select or type an option"
                    options={this.state.choiceOptions}
                />

            </React.Fragment>
        )
    }

    private async getChoiceOptions(){
        let column = await sp.web.lists.getByTitle(listName).fields.getByInternalNameOrTitle("ChoiceColumn");
        let options = await column.select('Choices').get();
        let results = options.Choices.map((value:string) => {
            return {key: value, text: value}
        }) as IDropdownOption[];
        this.setState({choiceOptions: results})
    } 
}