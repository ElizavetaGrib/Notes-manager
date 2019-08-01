import React, {Component} from 'react';
import {connect} from 'react-redux';

import {activeSwitcher} from '../../actions';

import './filter.css';

class Filter extends Component {

    state = {
        tag: this.props.tag,
        active: false,
    };

    onFilterClick = () => {
        const {activeSwitcher} = this.props;
        const {tag, active} = this.state;
        activeSwitcher(tag, !active);
        this.setState((state) => {
            return {
                active: !state.active
            }
        });
    };

    render() {
        const {tag, active} = this.state;
        const className = active ? 'filter-tag active' : 'filter-tag';
        return (
            <div className={className} onClick={this.onFilterClick}>
                {tag}
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        activeSwitcher: (tag, active) => {
            dispatch(activeSwitcher({tag, active}));
        }
    }
};

export default connect(null, mapDispatchToProps)(Filter)
