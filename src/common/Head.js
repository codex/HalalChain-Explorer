import React, { Component } from 'react';
import '../style/Head.css';
import {Layout,Input} from 'antd';
import logo from '../images/logo.png';
import refresh from '../images/refresh.png';
const Search = Input.Search;
const { Header } = Layout;

export default class Head extends Component {
    constructor() {
        super()
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        window.location.reload();
    }
    render() {
        return(
            <div className='header-wrap'>
                <Layout>
                    <Header>
                        <img className="LOGO" src={logo} alt=" " />
                        <span>HalalChain Explorer</span>
                        {/* <Search
                            placeholder="BlockHash / TxID"
                            onSearch={value => console.log(value)}
                        /> */}
                        <img className="refresh" src={refresh} alt=" " onClick={this.handleClick} /> 
                    </Header>
                </Layout>
            </div>
        )
    }
}