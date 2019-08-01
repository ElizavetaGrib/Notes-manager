import {idGenerator} from '../utils';

export default class NotesService {

    _apiUrl = 'data.json';

    getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getNotes = async () => {
        const res = await this.getResource(this._apiUrl);
        return res.notes.map(this._transformNotes);
    };

    _transformNotes = (note) => {
        return {
            id: idGenerator(),
            header: note.header,
            text: note.text,
            strDate: new Date(note.date).toLocaleDateString(),
            numDate: note.date,
            tags: note.text.match(/(#[a-zA-Z\d][\w-]*)/gm)
        }
    };

}
