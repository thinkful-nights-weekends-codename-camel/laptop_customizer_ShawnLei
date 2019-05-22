import React, { Component } from 'react';

export default class Price extends Component {
    static defaultProps = {
        total: 0
    }

    render () {
        return (
        <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.total) }
            </div>
        </div>
        );
    }
}