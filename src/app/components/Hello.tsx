import * as React from 'react'
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import {Button, ButtonType} from 'office-ui-fabric-react/lib/Button'
import {Dialog, DialogType, DialogFooter} from 'office-ui-fabric-react/lib/Dialog'

export type IComponentProps = {

}
class Hello extends React.Component<IComponentProps, any> {
  constructor(props: IComponentProps) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  open = () => this.setState({isOpen: true})

  close = () => this.setState({isOpen: false})

  render() {
    return (
      <div className="App">
        <div style={{margin: '5em'}}>
          <Button onClick={this.open}>I am a button.</Button>
        </div>
        <Dialog
          isOpen={this.state.isOpen}
          type={DialogType.close}
          onDismiss={this.close.bind(this)}
          title='Dialog title'
          subText='Dialog subText'
          isBlocking={false}
          closeButtonAriaLabel='Close'
        >
          <h1>Hello, World!</h1>
          <DialogFooter>
            <Button buttonType={ButtonType.primary} onClick={this.close}>OK</Button>
          </DialogFooter>
        </Dialog>
      </div>  
    )
  }
}

export default Hello;