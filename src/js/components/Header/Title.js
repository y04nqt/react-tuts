import React from 'react';

export default class Title extends React.Component{
  render(){
    console.log(this.props.title);
    return(
      <h1>{this.props.title}</h1>
    );
  }
}
