import React from 'react';
import './navigationbar.styles.scss';
import logo from '../../logo.png';
import {
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage
} from 'react-switch-lang';

setDefaultLanguage('en');
setLanguageCookie();

class NavBar extends React.Component{
    handleSetLanguage = (key) => () => {
        setLanguage(key);
    };

    render(){
        const language = this.props.language;
        return(
            <div className="row">
        <div className="d-flex x-bg-dark text-white p-2 x-width-max x-h-max pl-md-5 pr-md-5">
            <div className="mr-auto pl-md-5 ml-md-5" >
                <img src={logo} alt="" height="100%" />
            </div>
            <div className="p-2 mr-md-5">
                <div className='btn-group'>
                    <button type='button' className={(language== 'en') ? "btn btn-info text-white" : 'btn btn-light text-black'} id='en' onClick={this.handleSetLanguage('en')}>EN</button>
                    <button type='button' className={(language == 'si') ? "btn btn-info text-white" : 'btn btn-light text-black'} id='si'  onClick={this.handleSetLanguage('si')}>සිං</button>
                    <button type='button' className={(language == 'ta') ? "btn btn-info text-white" : 'btn btn-light text-black'} id='ta'  onClick={this.handleSetLanguage('ta')}>த</button>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
    
export default NavBar;