import React from 'react';

import './note.css';

const Note = ({note}) => {
    const {header, text, strDate} = note;
    return (
        <>
            <div className='header'>
                {header}
            </div>
            <div className='text'>
                {text}
            </div>
            <div className='date'>
                {strDate}
            </div>
        </>
    );
};

export default Note;
