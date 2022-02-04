import'./css/Schedule.css';
import React from 'react';
import WorkDaily from './WorkDaily.js';

class Schedule extends React.Component{
    constructor(props)
    {
        super(props);
        let me = this;
        let now = new Date();
        let year = now.getFullYear(); 
        let month = now.getMonth(); 
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        this.state = {
            now: now,
            monthNow: now.getMonth(),
            yearNow: now.getFullYear(),
            dateArray: days
        };

        me.getData = me.getData.bind(this);
        me.nextMonth = me.nextMonth.bind(this);
        me.prevMonth = me.prevMonth.bind(this);
    }

    componentDidMount()
    {
        let me = this;
    }

    nextMonth()
    {
        let me = this;
        let currentMonth = me.state.now.getMonth()+1+1;
        let currentYear = me.state.now.getFullYear();
        if(currentMonth > 12)
        {
            currentMonth = 1;
            currentYear++;
        }
        let stringDate = currentYear + "-" + currentMonth + "-" + "1";
        let now = new Date(Date.parse(stringDate));
        this.setState({
            now: now,
            monthNow: now.getMonth(),
            yearNow: now.getFullYear(),
        },() => {me.getData()});
    }

    prevMonth()
    {
        let me = this;
        let currentMonth = me.state.now.getMonth()-1;
        let currentYear = me.state.now.getFullYear();
        let stringDate;
        if(currentMonth < 0)
        {
            currentMonth = 12;
            currentYear--;
            stringDate = currentYear + "-" + currentMonth + "-" + "1";
        }
        else if(currentMonth === 0)
            stringDate = currentYear + "-" + 1 + "-" + "1";
        else
            stringDate = currentYear + "-" + (currentMonth+1) + "-" + "1";
        let now = new Date(Date.parse(stringDate));
        
        this.setState({
            now: now,
            monthNow: now.getMonth(),
            yearNow: now.getFullYear(),
        },()=>{me.getData()});
    }

    getData()
    {
        let me = this;
        let now = me.state.now;
        let year = now.getFullYear(); 
        let month = now.getMonth(); 
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        this.setState({
            dateArray: days
        }, ()=>{});
    }

    toDateString(date)
    {
        return date.getDate();
    }

    render(){

        let me  = this;
        let index = 0;
        let listRender = [];
        let keyAutoIncre = 0;
        if(me.state.dateArray.length > 0)
        {
            for(let i = 0; i < 6 ;i++)
            {
                let eleRow = [];
                let j = 0;
                for(; j < 7;j++)
                {
                    keyAutoIncre++;
                    if(me.state.dateArray[index] && me.state.dateArray[index].getDay() === j)
                    {
                        eleRow.push(<td><WorkDaily functionApp={this.props} key={keyAutoIncre.toString()} date={me.state.dateArray[index].getDate()}></WorkDaily></td>);
                        index++;
                    }
                    else
                        eleRow.push(<td><WorkDaily functionApp={this.props} key={keyAutoIncre.toString()}></WorkDaily></td>);

                }
                let keyTr = (i+1)*100+keyAutoIncre*50;
                listRender.push(<tr key={keyTr.toString()}>{eleRow}</tr>);
            }
        }

       return(
           <div className='schedule'>
               <div className='header-schedule'>
                    <div className='title-schedule'>Lịch {this.state.now.getFullYear()}</div>
                    <div>
                        <span>Tháng</span>
                        <span className='inp-month'>
                            <span><i className="fas fa-caret-left" onClick={this.prevMonth}></i></span>
                            {this.state.monthNow+1}
                            <span><i className="fas fa-caret-right" onClick={this.nextMonth}></i></span>
                        </span>
                    </div>    
               </div>
               <div className='content-schedule'>
                   <table>
                        <thead>
                            <tr>
                                <th>Thứ 2</th>
                                <th>Thứ 3</th>
                                <th>Thứ 4</th>
                                <th>Thứ 5</th>
                                <th>Thứ 6</th>
                                <th>Thứ 7</th>
                                <th>Chủ Nhật</th>
                            </tr>
                        </thead>
                        <tbody>
                            {true && listRender}
                        </tbody>                       
                   </table>
               </div>
           </div>
       );
    }


}

export default Schedule;