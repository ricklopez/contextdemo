  
import React from 'react';

export const AppContext = React.createContext();




class AppProvider extends React.Component {
  
 constructor(props){
   super(props);
   this.state = {
     flavors: ['no flavors'],
   };
   
 }
  
  render(){
    return (
      <AppContext.Provider value={this.state}> 
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


export default AppProvider;
