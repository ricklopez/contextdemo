  
import React from 'react';

export const AppContext = React.createContext();




class AppProvider extends React.Component {
  
 constructor(props){
   super(props);
   this.state = {
     flavors: [],
     addFlavor: this.addFlavor.bind(this),
   };
   
 }
addFlavor(flavor){
      const newFlavors = [...this.state.flavors, flavor];
      this.setState({flavors:newFlavors})
    
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
