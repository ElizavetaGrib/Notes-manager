import React from 'react';

import {NotesServiceConsumer} from '../notes-service-context';

const withNotesService = () => (Wrapped) => {
    return (props) => {
        return (
            <NotesServiceConsumer>
                {
                    (notesService) => {
                        return (
                            <Wrapped {...props}
                                     notesService={notesService}/>
                        );
                    }
                }
            </NotesServiceConsumer>
        );
    };
};

export default withNotesService;
