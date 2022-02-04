import logo from './logo.svg';
import './App.css';
import React from 'react';
import Popup from './component/popup';
import Schedule from './component/Schedule';

class App extends React.Component{
  
  constructor(props)
  {
    super(props);
    let me = this;
    me.state = {
      isOpeningPopup: false,
      optionsPopup: {
        width: '0px',
        height: '0px',
      },
      renderCustom: ()=>{}
    };

    me.openPopup = this.openPopup.bind(this);
    me.closePopup = this.closePopup.bind(this);
  }

  openPopup(options, customRenderPopup){
    let me = this;
    this.setState({
      isOpeningPopup: true,
      optionsPopup: options,
      customRenderPopup: customRenderPopup
    })
  }

  closePopup(){
    let me = this;
    this.setState({
      isOpeningPopup: false
    })
  }

  render(){
      return(
      <div className='App bg-primary bg-lunar' id='App'>
        <Schedule openPopup={this.openPopup} />
        <Popup 
          options={this.state.optionsPopup}  
          isOpeningPopup={this.state.isOpeningPopup} 
          closePopup={this.closePopup}
          renderCustom={this.state.customRenderPopup}
        />
      </div>
    );
  }
}



export default App;
