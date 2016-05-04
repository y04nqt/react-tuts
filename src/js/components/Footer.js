import React from 'react';
import Time from 'react-time';
import Moment from 'moment'
export default class Footer extends React.Component{
  constructor(){
    super();
    this.copyright = "Copyright © "
    this.name = " AKR "
    this.rightsClause = " All rights reserved"
    name = this.name;
  }
  render(){
    let d = new Date();
    let y = d.getFullYear();
    return(
      <footer>
        <h1>{this.copyright}{y}{name}{this.rightsClause}</h1>
      </footer>
    );
  }
}
