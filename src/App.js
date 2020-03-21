import React from 'react';
import NotFound from './components/notfound/notfound.component';
import Main from './components/main/main.component';
import Loader from './components/loader/loader.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null,
      datas: [],
      language: 'en',
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch("http://hpb.health.gov.lk/api/get-current-statistical")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            
            datas: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, datas, language, isLoaded } = this.state;
    if (error) {
      return <NotFound error={error}></NotFound>;
    } else if (!isLoaded) {
      return <div className="container mt-5">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
  </div>;
    } else {
      return (
        <Main datas={datas} lang={language} key={"main"}>

         </Main>
        
        
      );
    }
  }
}



export default App;
