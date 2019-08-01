const initialState = {
    notes: [],
    tags: [],
    loading: true,
    filters: [],
    sort: 'desc',
    mutableNote: null,
    modalON: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTES_LOADED':
            const notes = action.payload;
            const tags = new Set();
            notes.forEach((note) => {
                note.tags.forEach((tag) => tags.add(tag));
            });
            return {
                ...state,
                notes: action.payload,
                loading: false,
                tags: Array.from(tags)
            };
        case 'DATE_SORTED':
            const sortValue = (state.sort === 'asc') ? 'desc' : 'asc';
            return {
                ...state,
                sort: sortValue
            };
        case 'ACTIVE_SWITCHER':
            if (action.payload.active) {
                return {
                    ...state,
                    filters: [...state.filters, action.payload.tag]
                };
            } else {
                const idxFilter = state.filters.findIndex((tag) => tag === action.payload.tag);
                return {
                    ...state,
                    filters: [...state.filters.slice(0, idxFilter), ...state.filters.slice(idxFilter + 1)]
                };
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                modalON: true,
                mutableNote: {...action.payload}
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalON: false,
                mutableNote: null
            };
        case 'SUBMIT_NOTE':
            const {text, numDate} = action.payload;
            const note = {
                ...action.payload,
                strDate: new Date(numDate).toLocaleDateString(),
                tags: text.match(/(#[A-Za-z\d][\w-]*)/gm)
            };
            let idx = state.notes.findIndex((note) => note.id === action.payload.id);
            if (idx === -1) {
                idx = state.notes.length;
            }
            const newNotes = [
                ...state.notes.slice(0, idx),
                note,
                ...state.notes.slice(idx + 1)
            ];
            const newTags = new Set();
            newNotes.forEach((note) => {
                if (note.tags) {
                    note.tags.forEach((tag) => newTags.add(tag));
                }

            });
            return {
                ...state,
                notes: newNotes,
                tags: Array.from(newTags),
                modalON: false,
                mutableNote: null
            };
        default:
            return state;
    }
};

export default reducer;
