import React, { Component } from 'react';
import './App.css';
import TechSpecs from './TechSpecs/TechSpecs';
import PriceSummary from './PriceSummary/PriceSummary';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Bodhi Linux',
            cost: 300
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  // The previous version of this function, forked from
  // its repo on thinkful github. This worked fine when
  // the entire App.js was a single component. 
  // this is the update state function
  // updateFeature(feature, newValue) {
  //   const selected = Object.assign({}, this.state.selected);
  //   selected[feature] = newValue;
  //   this.setState({
  //     selected
  //   });
  // }
  // !!!
  // We can't use this.state.selected in the above function
  // The app thinks we want to get the state of ListItem,
  // the nested component that updateFeature bubbles up
  // from.
  // 
  // What we need is the state that lives in App.js. To
  // get that, we just give updateFeature a param named
  // selectedState. Then we pass this.state.selected to
  // the updateFeature function as selectedState in the
  // TechSpecs props on line 81. This stuff is convoluted
  // and might not be the best practice, but it works.
  // 
  // this is the update state function
  updateFeature(feature, newValue, selectedState) {
    const selected = Object.assign({}, selectedState);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>
        </header>      
        <main>
          <TechSpecs 
            features={this.props.features}
            selected={this.state.selected} 
            handleUpdate={(feat, val)=>this.updateFeature(feat, val, this.state.selected)}
            // handleUpdate={this.updateFeature} // OLD VERSION (does not work)
          />
          <PriceSummary selected={this.state.selected} />
        </main>
      </div>
    );
  }
}
