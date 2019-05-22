import React, { Component } from 'react';
import './PriceSummary.css';
import Price from '../Price/Price';

export default class PriceSummary extends Component {
    static defaultProps = {
        summary: []
    }

    render () {
    //     const summary = Object.keys(this.state.selected)
    //     .map(key => <div className="summary__option" key={key}>
    //       <div className="summary__option__label">{key}  </div>
    //       <div className="summary__option__value">{this.state.selected[key].name}</div>
    //       <div className="summary__option__cost">
    //         { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //             .format(this.state.selected[key].cost) }
    //       </div>
    //   </div>)

    //     const total = Object.keys(this.state.selected)
    //         .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 

        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
                {/* {summary} */}
                <Price total={1000} />
            </section>
        );

    }
}