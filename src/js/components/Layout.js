import React from 'react';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.name = 'Universe';
    name = this.name;
  }
  render(){
    return(
        <h1>Greetings, {name}. I am glad to be here with you</h1>
    );
  }
}
