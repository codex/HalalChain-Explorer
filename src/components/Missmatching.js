import React, { Component } from 'react';
//import '../style/Missmatching.css';
import { Row, Col } from 'antd';
import missmatching from '../images/Missmatching.svg';

export default class Missmatching extends Component {
    render() {
        return(
            <div className="missmatching">
                <Row type="flex" justify="center">
                    <Col span={12}>Do not find the data to meet the query</Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={10}>please replace the keyword and try again!</Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col><img src={missmatching} alt="" /></Col>
                </Row>
            </div>
        )
    }
}