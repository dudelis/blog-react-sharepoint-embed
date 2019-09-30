import * as React from 'react';
import { sp, ItemAddResult } from "@pnp/sp";
import {
    ComboBox,
    Label,
    TextField} from 'office-ui-fabric-react/lib/index';

import IMainList from '../interfaces/IMainList';

//Get all column IDs


export default class ItemView extends React.Component<any, IMainList >{
    constructor(props: any){
        super(props);
        this.state = {} as IMainList;
    }
    async componentDidMount(){
        let items = await sp.web.lists.getByTitle("MainList").items.getAll();
        console.log(items);
    }

    public render(): JSX.Element{
        return (
            <React.Fragment>
                <TextField id="titleColumn" label="Title" required/>
                <TextField id="multipleLineColumn" multiline rows={3} label="MultipleLineColumn"/>
                <TextField id="choiceColumn"/>

            </React.Fragment>
        )
    }
}