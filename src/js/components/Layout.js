import React from 'react';

import Header from './Header';

export default class Layout extends React.Component{
  render(){
    var hList = [
      <Header />,
      <Header />,
      <Header />
    ];
    return(
      <div>
        <Header />
      //or
        {hList}
      </div>
    );
  }
}
