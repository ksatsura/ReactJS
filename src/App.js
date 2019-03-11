//imports
import React from 'react';
import Title from './Title/Title';
import Message from './Message/Message';
import Conclusion from './Conclusion/Conclusion';
import './style.css';

//constants
const tasks = [
    'Create React component using React.createElement',
    'Create React component using React.Component',
    'Create React component using React.PureComponen',
    'Cretae React component using functional components'
];
const deadLine = "The deadline of this task is March 11, 2019";

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