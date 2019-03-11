//imports
import React, { Component } from 'react';
import Task from '../Task/Task';
import '../style.css';

//constants
const keys = ['qwert1','asdfg2','zxcvb3','tyuio5'];

class Message extends Component {
    constructor(props){
        super();
        this.state = {
            tasks: props.tasksList
        }
    }

    render() {
        return (
            <ol className='message'>
                {this.state.tasks.map((task, i) => <Task key={keys[i]} text={task}/>)}
            </ol>);
    }
}

export default Message;