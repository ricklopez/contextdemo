  
import React, { Component } from 'react'
import {AppContext} from './AppContext';

export default class QuickForm extends Component {

  static context = AppContext.consumer;
  handleSubmit = (ev) => {
    ev.preventDefault()
    
    this.context.addFlavor(ev.target.flavor);
   
  }

  render() {
    return (
      <div className='QuickForm'>
        <h3>Add flavor</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='flavor'>Flavor:</label>
            <input type='text' id='flavor' />
          </div>
          
          <button type='submit'>
            Add Flavor
          </button>
        </form>
      </div>
    )
  }
}
