import React from 'react';
import './notfound.styles.scss';
import Character from './character.svg'

class NotFound extends React.Component{
    render(){
        const error = this.props.error;
    
        return(      
    <main className="mt-md-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 align-self-center">
        <img src={Character}></img>
        </div>
        <div className="col-md-6 align-self-center">
          <h2>Hello We couldn't able to load data please try again</h2>
          <h2>UH OH! You're lost.</h2>
          <p>The page you are looking for does not exist.
            How you got here is a mystery. But you can click the button below
            to go back to the homepage.
          </p>
          <button className="btn btn-green" onClick="http://betterlk.com">HOME</button>
        </div>
      </div>
      </div>
  </main>
  
        )
    }
}

export default NotFound;