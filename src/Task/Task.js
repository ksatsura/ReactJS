//imports
import React, {PureComponent} from 'react';
import '../style.css';

class Task extends PureComponent{
    render() {
        return <li className='task'>{this.props.text}</li>
    }
}

export default Task;