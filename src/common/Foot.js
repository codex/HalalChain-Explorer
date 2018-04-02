import React, { Component } from 'react';
import '../style/Foot.css';
import { Layout,Row,Col } from 'antd';
const { Footer } = Layout;

export default class Foot extends Component {
    render() {
        return(
            <div className='footer-wrap'>
                        <p><span>Copyright©️2018 | HLC Foundation Ltd.</span> <span style={{marginLeft:'20px'}}>Contact Email:support@HLC.com</span></p>
                  
            </div>
        )
    }
}
