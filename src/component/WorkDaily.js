import React from "react";
import './css/workDaily.css';
import Popup from './popup.js';
import ReactDOM from "react-dom";
import Work from './work.js'

class WorkDaily extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isDisabled: this.props.date? false:true,
            isOpenExtensions: false,
            optionsPopup: {
                title: `Công việc ngày ${this.props.date}`,
                width: '900px',
                height: '800px',
            },
            workData: [
                
            ]
        };

        this.$el = React.createRef();

        this.openBoxExtensions = this.openBoxExtensions.bind(this);
        this.seeDetail = this.seeDetail.bind(this);
        this.addEvent = this.addEvent.bind(this);
    }

    componentDidMount()
    {
        let me = this;
        document.addEventListener('click', function(e){
            let root_Dom = me.$el.current;
            if( root_Dom && !root_Dom.querySelector('.fa-ellipsis-v').contains(e.target))
            {
                me.openBoxExtensions(false);
            }
        }); 
    }

    static getDerivedStateFromProps(props,currentState)
    {
        return{
            isDisabled: props.date? false:true,
            optionsPopup: {
                title: `Công việc ngày ${props.date}`,
                width: '900px',
                height: '800px',
            }
        };
    }

    renderDetail()
    {
        return (
            <div></div>
        );
    }

    renderAddEvent()
    {
        return (
            <div></div>
        );
    }

    render(){
        let me = this;
        return (
            <div ref={this.$el} className={`work-daily ${this.state.isDisabled? 'work-daily-disable':''}`}>
                <div className="date-now">{this.props.date}</div>
                <div className="extensions-work-daily" >
                    <i className="fas fa-ellipsis-v" onClick={this.openBoxExtensions}></i>
                    <ul className="item-extensions display-hover" style={{display: this.state.isOpenExtensions? 'block':'none'}}>
                        <li onClick={()=>this.props.functionApp.openPopup(this.state.optionsPopup,this.renderDetail)}>Xem chi tiết</li>
                        <li onClick={()=>this.props.functionApp.openPopup(this.state.optionsPopup,this.renderAddEvent)}>Thêm sự kiện</li>
                    </ul>
                </div>
                <div className="list-work">
                    {
                        true && this.state.workData.length > 0 && 
                        <Work workInfo={
                            this.state.workData[0]
                        } />
                    }
                </div> 
            </div>
        );
    }

    seeDetail(){
       
    }

    addEvent(){

    }

    openBoxExtensions(isCustomState)
    {
        let me = this;
        if(me.state.isDisabled)
            return;

        let isOpenExtensions = me.state.isOpenExtensions;
        me.setState(
            {
                isOpenExtensions:  typeof(isCustomState) == "boolean"? isCustomState:!isOpenExtensions,
            }
        );
    }
}

export default WorkDaily;