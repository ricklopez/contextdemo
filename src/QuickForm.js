  
import React, { Component } from 'react'

export default class QuickForm extends Component {


  handleSubmit = (ev) => {
    const data = ev.target.flavor;
    ev.preventDefault()
    

   
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
