  
import React, { Component } from 'react'
import {AppContext} from './AppContext';

export default class QuickForm extends Component {
  static contextType = AppContext;



  render() {    
    console.log(this.context);
    return (
      <div className='QuickForm'>

    <p>Total Flavors: {this.context.flavors.length}</p>
      </div>
    )
  }
}