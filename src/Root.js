import React, {Component, Fragment} from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from './pages/home';  
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import "./styles/index.css";

export default class Root extends Component {
    state({})
    changeBackGround(){

    }
    render(){
        return  <HashRouter>
                    <Fragment>
                        <div className='header'>
                            <h1>Jebbena</h1>
                            <ul className='navbar'>
                                <li className='NavBtn homeBtn'><NavLink to='/' replace>Home</NavLink></li>
                                <li className='NavBtn pricingBtn'><NavLink to='/pricing' replace>Pricing</NavLink></li>
                                <li className='NavBtn contactBtn'><NavLink to='/contact' replace>Contact</NavLink></li>
                                <li className='NavBtn loginBtn'><NavLink to='/auth' replace>Log in</NavLink></li>
                            </ul>
                        </div>
                        <div className='BodyContent'>
                            <Route exact path="/" component={Home}/>
                            <Route path="/pricing" component={Pricing}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </Fragment>
                </HashRouter>
}
}
