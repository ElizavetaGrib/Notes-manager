import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import NotesService from './services/notes-service';
import ErrorBoundary from './components/error-boundary';
import {NotesServiceProvider} from './components/notes-service-context';
import App from './components/app';

const notesService = new NotesService();

render(
    <Provider store={store}>
        <ErrorBoundary>
            <NotesServiceProvider value={notesService}>
                <App/>
            </NotesServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
