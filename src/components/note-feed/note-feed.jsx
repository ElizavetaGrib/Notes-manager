import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import _ from 'lodash';

import {notesLoaded, openModal} from '../../actions';
import {withNotesService} from '../hoc';
import Spinner from '../spinner';
import SortButton from '../sort-button';
import Note from '../note';

import './note-feed.css';

class NoteFeedContainer extends Component {

    componentDidMount() {
        const {notesService, notesLoaded} = this.props;
        notesService.getNotes()
            .then((data) => notesLoaded(data));
    };

    render() {
        const {notes, loading, openModal} = this.props;
        const content = loading ? <Spinner/> : <NoteFeed openModal={openModal} notes={notes}/>;
        return (
            <div className='note-feed'>
                {content}
            </div>
        );
    };
}

const NoteFeed = ({notes, openModal}) => {
    return (
        <>
            <SortButton/>
            <ul>
                {
                    notes.map((note) => {
                        return (
                            <li className='note'
                                key={note.id}
                                onDoubleClick={() => openModal(note)}>
                                <Note note={note}/>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

const mapStateToProps = ({notes, loading, sort, filters}) => {
    return {
        notes: _.orderBy([...notes].filter((note) => {
            let filtered = true;
            filters.forEach((filter) => {
                if (!note.tags) {
                    filtered = false;
                } else if (!note.tags.includes(filter)) {
                    filtered = false;
                }
            });
            return filtered;
        }), ['numDate'], [sort]),
        loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        notesLoaded: (data) => dispatch(notesLoaded(data)),
        openModal: (note) => dispatch(openModal(note))
    };
};

export default compose(
    withNotesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(NoteFeedContainer);
