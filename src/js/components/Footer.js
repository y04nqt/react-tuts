import React from 'react';

export default class Footer extends React.Component{
  constructor(){
    super();
    this.state = {
      name : " AKR",
      clause : " All Rights Reserved"
    }
    this.copyright = "Copyright © "
    name = this.state.name;
  }
  render(){
    let d = new Date();
    let y = d.getFullYear();

    return(
      <footer>
        <h1>{this.copyright+y}{name}{this.state.clause}</h1>
      </footer>
    );
  }
}
