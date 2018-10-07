import React, {Component} from 'react';
import homebgimage from '../assets/homebg.jpg';
export default class Home extends Component {
    
    render(){
        var sectionStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: `${homebgimage}`
          };
        return <div className='homePage' style={sectionStyle}>
            <h1>THIS IS HOME</h1>
            <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
    }
}