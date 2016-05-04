import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component{
  render(){
    const title = "React Love";

    return(
      <div>
        <Header title={title} />
        <Footer/>
      </div>
    );
  }
}
