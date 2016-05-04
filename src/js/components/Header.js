import React from 'react';

import Title from "./Header/Title";

export default class Header extends React.Component{
  constructor(){
    super();
    this.name = 'Universe';
    name = this.name;
  }
  handleChange(e){
    const title = e.target.value;
    //don't forget to add the prop in the change method --duhhh
    this.props.changeTitle(title);
    console.log(title);
  }
  render(){
    console.log(this.props);
    return(
      <header>
        <Title title={this.props.title}/>
        <input onChange={this.handleChange.bind(this)} />
        <h2>Greetings, {name}. I am glad to be here with you</h2>
      </header>
    );
  }
}
