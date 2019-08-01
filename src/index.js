import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import NotesService from './services/notes-service';
import ErrorBoundry from './components/error-boundry';
import {NotesServiceProvider} from './components/notes-service-context';
import App from './components/app';

const notesService = new NotesService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <NotesServiceProvider value={notesService}>
                <App/>
            </NotesServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
