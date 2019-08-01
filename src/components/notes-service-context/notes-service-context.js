import React from 'react';

const {
    Provider: NotesServiceProvider,
    Consumer: NotesServiceConsumer
} = React.createContext();

export {
    NotesServiceProvider,
    NotesServiceConsumer
};
