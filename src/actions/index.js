const actionTypes = {
    NOTES_LOADED: 'NOTES_LOADED',
    DATE_SORTED: 'DATE_SORTED',
    ACTIVE_SWITCHER: 'ACTIVE_SWITCHER',
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SUBMIT_NOTE: 'SUBMIT_NOTE',
};

const notesLoaded = (newNotes) => {
    return {
        type: actionTypes.NOTES_LOADED,
        payload: newNotes,
    };
};

const onDateSort = () => {
    return {
        type: actionTypes.DATE_SORTED,
    };
};

const activeSwitcher = (filter) => {
    return {
        type: actionTypes.ACTIVE_SWITCHER,
        payload: filter,
    };
};

const openModal = (note) => {
    return {
        type: actionTypes.OPEN_MODAL,
        payload: note,
    };
};

const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL,
    };
};

const submitNote = (note) => {
    return {
        type: actionTypes.SUBMIT_NOTE,
        payload: note,
    };
};

export {
    actionTypes,
    notesLoaded,
    onDateSort,
    activeSwitcher,
    openModal,
    closeModal,
    submitNote,
};
