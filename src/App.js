//imports
import React from 'react';
import Title from './Title/Title';
import Message from './Message/Message';
import Conclusion from './Conclusion/Conclusion';
import './style.css';

//constants
const tasks = [
    'Install React, Redux, React-Redux, React-Router, Jest',
    'Configure webpack',
    'Configure babel, configure tests script',
    'Have dev and prod build commands (use evn variables)'
];
const deadLine = "The deadline of this task is March 18, 2019";

const app = () => {
    return (
        <div className='app'>
            <Title/>
            <Message tasksList={tasks}/>
            <Conclusion>{deadLine}</Conclusion>
        </div>
    );
}

export default app;