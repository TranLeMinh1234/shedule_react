import './css/popup.css';
import React from 'react';

class Popup extends React.Component
{
    constructor(props)
    {
        super(props);
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
                            true && me.props.renderCustom()
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Popup;