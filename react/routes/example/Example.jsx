import React from "react";

var Example = React.createClass({
  getInitialState(){
    return {
      example: "example"
    };
  },
  render(){
    return (
      <div>
        {this.state.example}
      </div>
    );
  }
});

export { Example };
