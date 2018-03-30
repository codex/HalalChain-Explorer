import React, { Component } from 'react';
import '../style/Foot.css';
//import Logo from '../images/coin-02.png';
import { Layout,Row,Col } from 'antd';
const { Footer } = Layout;

export default class Foot extends Component {
    render() {
        return(
            <div className='footer-wrap'>
                {/* <Layout> */}
                    {/* <Footer> */}
                        <p><span>Copyright©️2018 | HLC Foundation Ltd.</span> <span style={{marginLeft:'20px'}}>Contact Email:support@HLC.com</span></p>
                    {/* </Footer> */}
                {/* </Layout> */}
            </div>
        )
    }
}