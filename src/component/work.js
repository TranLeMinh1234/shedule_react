import React from 'react';
import './css/work.css';

class Work extends React.Component{
    constructor(props)
    {
        super(props);
        let me = this;
    }

    render()
    {
        return (
            <div className='Work'>
                <span className='time-work'>{this.props.workInfo.time}</span>
                <span className='title-work'>{this.props.workInfo.title}</span>
            </div>
        );
    }
}

export default Work;