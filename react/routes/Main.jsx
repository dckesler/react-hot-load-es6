import React from 'react';
import { RouteHandler, Link } from "react-router";

class Main extends React.Component{
  constructor(){
    this.state = {
      currentUser: null
    };
  }

  setCurrentUser(user){
    this.setState({
      currentUser: user
    });
  }

  render(){
    return (
      <div>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
}

export { Main };
