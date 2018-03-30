import React, { Component } from 'react';
import '../style/Peerlist.css';
import { Table,Layout,Row,Col } from 'antd';
//import { Pagination } from 'antd';
import fetchUtil from '../utils/fetch';
import tokenUtil from '../utils/token';
import * as global from '../utils/global';
const {Content} = Layout;
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key:"name",
    // render: text => <a href="#">{text}</a>,
  },  {
    title: 'Request',
    dataIndex: 'request',
    key:"request"
  },
  {
    title: 'Hostname',
    className: 'hostname',
    dataIndex: 'hostname',
    key:"hostname"
  },
  {
    title: 'Organization',
    className: 'organization',
    dataIndex: 'organization',
    key:"organization"
  }];
  
export default class Peerlist extends Component {
    constructor(props){
        super(props)
        this.state={
            dataSource:[]
        }
    }
  async  componentDidMount(){
      let that = this;
         await  fetchUtil.postOther("peer-list","GET",(res)=>{
            //console.log(res)
            if(res.success){
                console.log(res.list)
            that.setState({
                dataSource:res.list
            })
            }
            
        })
    }
    render() {
        //console.log(this.state.dataSource)
        return(
            <div className="peerlist">
                <Table
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={false}
                />
            </div>
        )
    }
}
