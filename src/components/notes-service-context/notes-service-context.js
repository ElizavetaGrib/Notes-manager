import {createContext} from 'react';

const {
    Provider: NotesServiceProvider,
    Consumer: NotesServiceConsumer
} = createContext();

export {
    NotesServiceProvider,
    NotesServiceConsumer,
};
