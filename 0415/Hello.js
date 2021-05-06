import React from 'react';
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: new Date()};
    }
    tick(){
        this.setState({
            data:new Date()
        });
    }
    componentDidMount(){
    this.timerID = setInterval(
        ()=>this.tick(),1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){
        return (
        <div>
            <h1>Hello XD</h1>
            <h1>Is is {this.state.data.toLocaleTimeString()}</h1>
        </div>)}
}
export default Clock;