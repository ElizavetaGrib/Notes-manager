const notesLoaded = (newNotes) => {
    return {
        type: 'NOTES_LOADED',
        payload: newNotes
    };
};

const onDateSort = () => {
    return {
        type: 'DATE_SORTED'
    };
};

const activeSwitcher = (filter) => {
    return {
        type: 'ACTIVE_SWITCHER',
        payload: filter,
    };
};

const openModal = (note) => {
    return {
        type: 'OPEN_MODAL',
        payload: note,
    };
};

const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    };
};

const submitNote = (note) => {
    return {
        type: 'SUBMIT_NOTE',
        payload: note
    };
};

export {
    notesLoaded,
    onDateSort,
    activeSwitcher,
    openModal,
    closeModal,
    submitNote
};
