import './css/popup.css';
import React from 'react';

class Popup extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            renderCustom: this.props.renderCustom
        }
    }

    static getDerivedStateFromProps(props,currentState)
    {
        console.log(props.renderCustom)
        return{
            renderCustom: props.renderCustom
        };
    }

    render()
    {
        let me = this;
        return (
            this.props.isOpeningPopup && <div className='bg-dark'>
                <div 
                className='popup' 
                style={
                    {
                        width: me.props.options.width, 
                        height: me.props.options.height
                    }
                }
                >
                    <div className='header-popup'>  
                        <div className='title-poppup'>{me.props.options.title}</div>
                        <img className='esc-btn' src={require('../img/x.png')} alt="" onClick={this.props.closePopup} />
                    </div> 
                    <div className='body-popup'>
                        {
                            true && typeof this.state.renderCustom === "function" && this.state.renderCustom()
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Popup;