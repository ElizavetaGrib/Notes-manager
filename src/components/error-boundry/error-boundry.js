import React, {Component} from 'react';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

    state = {
        hasError: false,
        error: null,
        info: null
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true, error, info});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator error={this.state.error} info={this.state.info}/>;
        }
        return this.props.children;
    }

}
