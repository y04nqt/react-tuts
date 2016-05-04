import React from 'react';

import Title from "./Header/Title";

export default class Header extends React.Component{
  constructor(){
    super();
    this.name = 'Universe';
    name = this.name;
  }
  render(){
    console.log(this.props);
    return(
      <header>
        <Title title={this.props.title}/>
        <h2>Greetings, {name}. I am glad to be here with you</h2>
      </header>
    );
  }
}
