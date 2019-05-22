import React, { Component } from 'react';
import './TechSpecs.css';
import ListItem from '../ListItem/ListItem';

export default class TechSpecs extends Component {
    static defaultProps = {
        features: [],
        selected: {}
    }

    render() {
        const features = Object.keys(this.props.features)
            .map(key => {
                const options = this.props.features[key].map((item, index) => {
                    const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
                    const featureClass = 'feature__option ' + selectedClass;

                    console.log(featureClass);
                    return <ListItem 
                        item={item}
                        key={index} 
                        divClassName={featureClass} 
                        handleUpdate={this.props.updateFeature}
                        />
                });

                return <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <ul className="feature__list">
                        {options}
                    </ul>
                </div>
            });

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {/* {this.props.features} */}
                {features}
            </section>
        );
    }
}