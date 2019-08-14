import React from 'react';
import {connect} from 'react-redux';

import {openModal} from '../../actions';

import './add-button.css';

const AddButton = ({openModal}) => {
    return (
        <button className='add-button'
                onClick={openModal}>
            Add note
        </button>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal({
            id: '',
            header: '',
            text: '',
            numDate: null
        }))
    };
};

export default connect(null, mapDispatchToProps)(AddButton);
