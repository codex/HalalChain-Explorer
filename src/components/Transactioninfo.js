import React, { Component } from 'react';
import '../style/Transactioninfo.css';
import {Layout,Row,Col,Timeline} from 'antd';
import transaction from '../images/10.svg';
const {Content} = Layout;

export default class Transactioninfo extends Component {
    render() {
        return(
            <div className="transactioninfo">
                <Layout>
                    <Content>
                        <Row className="transactionInfo" type="flex" justify="start">
                            <img className="blockImage" src={transaction} alt=" " />
                            <Col className="TransactionInfo" span={11}><span>|</span>&nbsp;&nbsp;Transaction Info</Col>
                        </Row>
                        
                        <Row type="flex" justify="start">
                            <Col className="transactionInformation" span={23}>
                                <Row type="flex" justify="start">
                                    <Col className="selectHead" span={5}>TxID:</Col>
                                    <Col className="selectResult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Name:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Type:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Status:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Args:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Block Hash:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Sender:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Fee:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col className="selection" span={5}>Timestamp:</Col>
                                    <Col className="selectionresult" span={17}></Col>
                                </Row>
                                
                            </Col>
                        </Row>
                        {/* <Table
                            columns={columns}
                            dataSource={data}
                            footer={() => ' '}
                            pagination={false}
                            /> */}
                        <Row type="flex" justify="start">
                            <Col className="endorser" span={24}><span>Endorser</span></Col>
                        </Row>
                        <Timeline>
                            <Timeline.Item color="green">Mspid:
                                <p className="recentresult">idbytes:
                                    <span>

                                    </span>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="green">Mspid:
                                <p className="recentresult">idbytes:
                                    <span>
                                        
                                    </span>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="red">Mspid:
                                <p className="recentresult">idbytes:
                                    <span>
                                        
                                    </span>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="red">Mspid:
                                <p className="recentresult">idbytes:
                                    <span>
                                        
                                    </span>
                                </p>
                            </Timeline.Item>
                        </Timeline>
                    </Content>
                </Layout>
            </div>
        )
    }
}