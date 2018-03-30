import React, { Component } from 'react';
import '../style/Blockinfo.css';
import {Layout,Row,Col,Table} from 'antd';
import blockInfo from '../images/9.svg';
const {Content} = Layout;
const columns = [{
    title: 'NO.',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
  },
  {
    title: 'Timestamp',
    className: 'column-money',
    dataIndex: 'money',
  }]

export default class Blockinfo extends Component {
    constructor(props) {
        super(props)
        this.state={
            dataSource:[]
        }
    }
    render() {
        return(
            <div className="blockinfo">
                <Layout>
                    <Content>
                        <Row className="blockinfoHead" type="flex" justify="start">
                            <img className="blockImage" src={blockInfo} alt=" " />
                            <Col className="Blockinfo" span={11}><span>|</span>&nbsp;&nbsp;Block info</Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col className="selectHead" span={5}><span className="blockHash">Block Hash :</span></Col>
                            <Col span={17}></Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col className="selectInformation" span={23}>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>NO.:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Prev Block Hash:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Height:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Block Size:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Timestamp:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                            </Col>
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