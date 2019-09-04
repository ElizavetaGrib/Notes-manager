import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import {idGenerator} from '../../utils'
import {closeModal, submitNote} from '../../actions';

import './pop-up.css';

class PopUp extends Component {

    state = {
        id: null,
        header: '',
        text: '',
        numDate: null,
    };

    componentDidUpdate() {
        if (this.props.mutableNote) {
            const {id, header, text, numDate} = this.props.mutableNote;
            if (this.state.id !== id) {
                this.setState({id, header, text, numDate});
            }
        }
    };

    changeHeader = (e) => {
        this.setState({
            header: e.target.value,
        });
    };

    changeText = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    onPopUpSubmit = (e) => {
        e.preventDefault();
        let numDate;
        let id;
        if (this.state.id === '') {
            id = idGenerator();
            numDate = new Date().getTime();
        } else {
            id = this.state.id;
            numDate = this.state.numDate;
        }
        this.props.onPopUpSubmit({
            id,
            header: this.state.header,
            text: this.state.text,
            numDate,
        });
        this.setState({
            id: null,
            header: '',
            text: '',
            numDate: null,
        });
    };

    onClosePopUp = () => {
        this.setState({
            id: null,
            header: '',
            text: '',
            numDate: null,
        });
        this.props.onClosePopUp();
    };

    render() {
        const {modalON} = this.props;
        const {header, text} = this.state;
        return (
            <Modal isOpen={modalON}
                   ariaHideApp={false}
                   style={{
                       content: {
                           background: 'transparent',
                           border: 'none',
                           width: '50%',
                           marginLeft: 'auto',
                           marginRight: 'auto',
                       }
                   }}>
                <form className='form'
                      onSubmit={this.onPopUpSubmit}>
                    <input className='header-input'
                           placeholder='title'
                           pattern='[^а-яА-ЯЁё]+'
                           type='text'
                           value={header}
                           onChange={this.changeHeader}
                           required/>
                    <input className='text-input'
                           placeholder='note'
                           pattern='[^а-яА-ЯЁё]+'
                           type='text'
                           value={text}
                           onChange={this.changeText}
                           required/>
                    <input className='submit'
                           type='submit'
                           value='Save'/>
                    <button className='cancel'
                            onClick={this.onClosePopUp}>
                        Cancel
                    </button>
                </form>
            </Modal>
        );
    };

}

const mapStateToProps = ({modalON, mutableNote}) => {
    return {
        modalON,
        mutableNote,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClosePopUp: () => dispatch(closeModal()),
        onPopUpSubmit: (note) => dispatch(submitNote(note)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
