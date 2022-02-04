import React from "react";


class ArrayTest extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {data: [], tlminh: 123};
    }

    componentDidMount()
    {
        let me = this;
        me.intervalId = setInterval(() => {
           me.state.data.push({name: 'tlminh', age: 22}); 
           me.setState({
               data: me.state.data
           })
        }, 1000);
    }

    componentWillUnmount()
    {
        let me = this;
        clearInterval(me.intervalId);
    }

    render()
    {
        let me = this;
        return (
            <div>{me.state.data.length}</div>                                
        );
    }
}

export default ArrayTest;