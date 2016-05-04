import React from 'react';

export default class Header extends React.Component{
  constructor(){
    super();
    this.name = 'Universe';
    name = this.name;
  }
  render(){
    return(
      <header>
        <h1>Greetings, {name}. I am glad to be here with you</h1>
      </header>
    );
  }
}
