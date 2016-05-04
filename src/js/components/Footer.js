import React from 'react';

export default class Footer extends React.Component{
  constructor(){
    super();
    this.state = {
      name : " AKR",
      clause : " All Rights Reserved"
    }
    this.changeName = function(err){
      if(this.state.name == " AKR"){
        setTimeout(() => {
          this.setState({name : ' AARONI'})
          console.log('hit');
        }, 2000)
      }else if(this.state.name != " AKR"){
        console.log('passed');
      }else{
        console.log('error!');
      }
    };
    this.copyright = "Copyright © "
  }
  render(){
    let d = new Date();
    let y = d.getFullYear();
    this.changeName();
    // setTimeout(() => {
    //   this.setState({name : ' AARONI'})
    // }, 2000)
    return(
      <footer>
        <h2>{this.copyright+y}{this.state.name}{this.state.clause}</h2>
      </footer>
    );
  }
}
