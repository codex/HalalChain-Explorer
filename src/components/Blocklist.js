import React, { Component } from 'react';
import '../style/Blocklist.css';
import { Table, Layout, Row, Col, Input } from 'antd';
import { Pagination } from 'antd';
import fetchUtil from '../utils/fetch';
import tokenUtil from '../utils/token';
import * as global from '../utils/global';
const { Content } = Layout;
const Search = Input.Search;
const columns = [
  {
    title: 'Block',
    dataIndex: 'number',
    // width:'80px',
    width:'104px',
    key: 'block',
    className: 'blockNumber',
    render(text, row, index) {
      return <a href="#jiake">{text}</a>;
    }
  },
  {
    title: 'TXs',
    // width:'100px',
    width:'86px',
    dataIndex: 'tx_count',
    key: 'transactions',
    className: 'transactions'
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    // width:'130px',
    width:'15%',
    key: 'timestamp',
    className: 'timestamp'
  },
  {
    title: 'Previous_hash',
    dataIndex: 'previous_hash',
    // width:'160px',
    key: 'previousHash',
    className: 'previousHash'
  },
  {
    title: 'Data_hash',
    dataIndex: 'data_hash',
    key: 'dataHash',
    className: 'dataHash'
  }
];
let datas;

export default class Blocklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  FormatDate(strTime) {
    var date = new Date(strTime);
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    );
  }
  async componentDidMount() {
    let that = this;
    await fetchUtil.postOther('block-list', 'GET', res => {
      if (res.success) {
        datas = res.list;
        for (let i = 0; i < datas.length; i++) {
          datas[i].timestamp = this.FormatDate(datas[i].timestamp);
        }

        that.setState({
          dataSource: datas
        });
      }
    });
    // this.setState({
    //     dataSource:res
    // })

    // fetchUtil.post(' ',(res)=>{
    //     this.setState({
    //         dataSource:res
    //     })
    // })
  }
  onRowClick(record, index) {
    const type = 1; // 1:blockId,2:txtId,3:eId
    if (this.props.handleSearchClick) {
      this.props.handleSearchClick(datas[index].number, type);
    }
  }
  handleSearchClick(value) {
    const type = 1; // 1:blockId,2:txtId,3:eId
    this.props.handleSearchClick(value, type, () => {
      window.location.href = '#jiake';
    });
  }
  render() {
    return (
      <div className="blockList">        
        <Table
          scroll={{x:'600px'}}
          onRowClick={this.onRowClick.bind(this)}
          columns={columns}
          dataSource={this.state.dataSource}
          pagination={false}
          bordered={false}
        />
      </div>
    );
  }
}
