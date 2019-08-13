import React from 'react';
import {connect} from 'react-redux';

import Filter from '../filter';
import Spinner from '../spinner';

import './filter-box.css';

const FilterBoxContainer = ({tags, loading}) => {
    const content = loading ? <Spinner/> : <FilterBox tags={tags}/>;
    return (
        <div className='filter-box'>
            {content}
        </div>
    );
};

const FilterBox = ({tags}) => {
    return (
        <ul>
            {
                tags.map((tag) => {
                    return (
                        <li className='filter'
                            key={tag}>
                            <Filter tag={tag}/>
                        </li>
                    );
                })
            }
        </ul>
    );
};

const mapStateToProps = ({tags, loading}) => {
    return {tags, loading};
};

export default connect(mapStateToProps, null)(FilterBoxContainer);
