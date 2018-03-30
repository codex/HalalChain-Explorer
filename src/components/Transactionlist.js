import React, { Component } from 'react';
import '../style/Transactionlist.css';
import { Table,Layout,Row,Col } from 'antd';
import fetchUtil from '../utils/fetch';

const {Content} = Layout;
const columns = [{
    title: 'NO.',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
    className:'Number'
  },  {
    title: 'Hash',
    dataIndex: 'address',
  },
  {
    title: 'Timestamp',
    className: 'column-money',
    dataIndex: 'money',
  }];

export default class Transactionlist extends Component {
    constructor(props) {
        super(props)
        this.state={
            dataSource:[]
        }
    }
    // onShowSizeChange(current,pageSize) {
    //     console.log(current,pageSize);
    // }
    render() {
        return(
            <div className="transactionlist">
                <Layout>
                    <Content>
                        <Row className="BlockInformation" type="flex" justify="start">
                            <Col span={9}><span className="blocklistHead">Transactionlist</span></Col>
                        </Row>
                        <Table
                            columns={columns}
                            dataSource={this.state.dataSource}
                            pagination={false}
                        />
                    </Content>
                </Layout>
            </div>
        )
    }
}