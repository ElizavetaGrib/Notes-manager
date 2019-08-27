import React from 'react';
import {connect} from 'react-redux';

import {onDateSort} from '../../actions';
import {ReactComponent as SortDown} from './sort-down-solid.svg';
import {ReactComponent as SortUp} from './sort-up-solid.svg';

import './sort-button.css';

const SortButton = ({sort, onDateSort}) => {
    const sortIcon = sort === 'desc' ? <SortDown width="1em" height="1em"/> : <SortUp width="1em" height="1em"/>;
    return (
        <button className='sort-button'
                onClick={onDateSort}>
            {sortIcon}
        </button>
    );
};

const mapStateToProps = ({sort}) => {
    return {
        sort,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDateSort: () => dispatch(onDateSort()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortButton);
