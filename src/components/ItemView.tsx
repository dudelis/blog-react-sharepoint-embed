import * as React from 'react';
import { sp, ItemAddResult } from "@pnp/sp";
import {
    DefaultButton,
    PrimaryButton,
    DatePicker,
    TextField,
    Toggle,
    BaseButton,
    Button
    } from 'office-ui-fabric-react/lib/index';

import {ChoiceColumn, IChoiceColumnProps} from './Columns/ChoiceColumn';
import {LookupColumn} from './Columns/LookupColumn';
import IMainList from '../interfaces/IMainList';


type handleInputChangeType = (column: string, value: any) => void;
const listName = 'MainList';
export default class ItemView extends React.Component<any, IMainList >{
    constructor(props: any){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount(){
        let items = await sp.web.lists.getByTitle(listName).items.getAll();
        console.log(items);
    }

    public render(): JSX.Element{
        return (
            <form>
                <TextField
                    id="titleColumn"
                    label="Title"
                    required
                    onChange={(ev: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>, newValue?: string|undefined)=> {this.handleInputChange("Title", newValue)}}
                />
                <TextField
                    id="multipleLineColumn"
                    multiline
                    rows={3}
                    label="MultipleLineColumn"
                    onChange={(ev: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>, newValue?: string|undefined)=> {this.handleInputChange("MultipleLineColumn", newValue)}}
                />
                <ChoiceColumn
                    listName={listName}
                    label="ChoiceColumn"
                    placeholder="Select or type an option"
                    onChange={this.handleInputChange}
                />
                <DatePicker
                    label="DateColumn"
                    placeholder="Select a date..."
                    ariaLabel="Select a date"
                    allowTextInput={true}
                    onSelectDate={(date: Date|null|undefined) => {this.handleInputChange("DateColumn", date)}}
                    />
                <LookupColumn
                    lookupListName={"LookupList"}
                    label="LookupColumn"
                    placeholder="Select an option"
                    onChange={this.handleInputChange}
                />
                <Toggle
                    label="YesNoColumn"
                    defaultChecked
                    onText="Yes"
                    offText="No"
                    onChange={(ev: React.MouseEvent<HTMLElement>, checked?: boolean) => {this.handleInputChange("YesNoColumn", checked)}}
                />
                <PrimaryButton
                    text="Save"
                    onClick={this.handleSubmit}
                />
            </form>
        )
    }

    handleInputChange:handleInputChangeType = (column, value) => {
        let stateInstance = {[column]: value} as IMainList; 
        this.setState(stateInstance);
    }
    handleSubmit = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | BaseButton | Button | HTMLSpanElement>)  =>{
        event.preventDefault();
        console.log(this.state);
        let addedItem = {
            Title: this.state.Title,
            MultipleLine: this.state.MultipleLineColumn,
            ChoiceColumn: this.state.ChoiceColumn,
            LookupColumnId: this.state.LookupColumn,
            DateColumn: this.state.DateColumn.toISOString(),
            YesNoColumn: this.state.YesNoColumn
        }
        sp.web.lists.getByTitle(listName).items.add(addedItem).then((iar: ItemAddResult) => {
            console.log(iar);
        });
    }
}