import React, { Component } from 'react';
import '../style/Transaction.css';
import { Table, Row, Col,Input } from 'antd';
import fetchUtil from '../utils/fetch';

const Search = Input.Search;
const columns = [
  {
    title: 'TxID',
    dataIndex: 'txid',
    key: 'txid',
    width: '300px',
    className: 'txId'
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    width:'130px',
    key: 'timestamp'
  },
  {
    title: 'AnimalID',
    className: 'column-money',
    width:'130px',
    dataIndex: 'earid',
    key: 'earid',
    render: (text, record) => <a href="###">{text}</a>
  },
  {
    title: 'TxType',
    className: 'column-money',
    dataIndex: 'txtype',
    width:'130px',
    key: 'txtype'
  },
  {
    title: 'Function Name',
    className: 'column-money',
    dataIndex: 'functionname',
    width:'140px',
    key: 'functionname'
  },
  {
    title: 'Endorser',
    className: 'column-money',
    dataIndex: 'endorser',
    key: 'endorser'
  }
];

export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.handleSearch || []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.handleSearch
    });
  }
  componentDidMount() {
    // fetchUtil.post('uri',(res)=>{
    //   this.setState({
    //     dataSource:res
    //   })
    // })
  }
  handleSearchClick(value) {
    const type = 2;
    this.props.handleSearchClick(value,type,()=>{
      window.location.href = '#jiake';
    });
  }
  onRowClick(record, index) {
    if (this.props.handleClickEarid) {
      this.props.handleClickEarid(record.earid);
    }
  }
  render() {
    console.log(this.state.dataSource);
    return (
      <div id="jiake" className="Transaction">
        {/* <Row>
          <Col className="input-search" span={14}>
            <Search
              placeholder="input search TxID"
              enterButton="Search"
              size="large"
              onSearch={this.handleSearchClick.bind(this)}
            />
          </Col>
        </Row> */}
        <Table
          columns={columns}
          scroll={{x:'980px'}}
          onRowClick={this.onRowClick.bind(this)}
          dataSource={this.state.dataSource}
          pagination={false}
          bordered={false}
        />
      </div>
    );
  }
}
