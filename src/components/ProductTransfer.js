import React, { Component } from 'react';
import '../style/ProductTransfer.css';
import { Table, Row, Col, Input } from 'antd';
import fetchUtil from '../utils/fetch';
import moment from 'moment';
const Search = Input.Search;
const columns = [
  {
    title: 'TxID',
    width: '200px',
    dataIndex: 'txId'
  },
  {
    title: 'Timestamp',
    width: '130px',
    dataIndex: 'txTime',
    render: (text, record, index) => {
      return moment.unix(parseInt(record.txTime)).format('YYYY-MM-DD HH:mm ss');
    }
  },
  {
    title: 'Operation',
    width: '120px',
    dataIndex: 'operation'
  },
  {
    title: 'PreOwner',
    width: '120px',
    dataIndex: 'preOwner'
  },
  {
    title: 'CurrentOwner',
    dataIndex: 'currentOwner'
  }
];
const data = [
  {
    TxID: '1',
    Timestamp: 'Timestamp',
    Operation: 'Operation',
    PreOwner: 'PreOwner',
    CurrentOwner: 'CurrentOwner'
  },
  {
    TxID: '1',
    Timestamp: 'Timestamp',
    Operation: 'Operation',
    PreOwner: 'PreOwner',
    CurrentOwner: 'CurrentOwner'
  },
  {
    TxID: '1',
    Timestamp: 'Timestamp',
    Operation: 'Operation',
    PreOwner: 'PreOwner',
    CurrentOwner: 'CurrentOwner'
  },
  {
    TxID: '1',
    Timestamp: 'Timestamp',
    Operation: 'Operation',
    PreOwner: 'PreOwner',
    CurrentOwner: 'CurrentOwner'
  }
];

export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  async componentDidMount() {}
  handleSearchClick(value) {
    const type = 3;
    this.props.handleSearchClick(value, type, () => {
      window.location.href = '#productTransfer';
    });
  }
  render() {
    const { productDataSource = [], productDetail } = this.props;
    return (
      <div id="productTransfer" className="product-transfer">
        {/* <Row>
          <Col className="input-search" span={10}>
            <Search
              placeholder="input search AnimalID"
              enterButton="Search"
              size="large"
              onSearch={this.handleSearchClick.bind(this)}
            />
          </Col>
        </Row> */}
        {!productDataSource.length ? (
          <p
            style={{
              textAlign: 'center',
              fontSize: '14px',
              color: 'rgba(0, 0, 0, 0.45)',
              lineHeight: '60px'
            }}
          >
            No Data
          </p>
        ) : (
          <Row>
            <Col>
              <Row>
                <Col span={16}>
                  <Table
                    columns={columns}
                    scroll={{ x: '730px' }}
                    dataSource={productDataSource}
                    pagination={false}
                    bordered={false}
                  />
                </Col>
                <Col span={8}>
                  <div className="product-detail">
                    <div className="product-detail-t">
                      <p className="title">BatchID:</p>
                      <p className="content">{productDetail.inModule}</p>
                    </div>
                    <div className="product-detail-t">
                      <p className="title">Kind:</p>
                      <p className="content">{productDetail.kind}</p>
                    </div>
                    <div className="product-detail-t">
                      <p className="title">Type:</p>
                      <p className="content">{productDetail.type}</p>
                    </div>
                    <div className="product-detail-t">
                      <p className="title">Position:</p>
                      <p className="content">{productDetail.mapPosition}</p>
                    </div>
                    <div className="product-detail-t">
                      <p className="title">Status:</p>
                      <p className="content">{productDetail.comment}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
