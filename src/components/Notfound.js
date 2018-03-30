import React, { Component } from 'react';
import '../style/Notfound.css';
import { Row , Col } from 'antd';
import nofound from '../images/Notfound.svg';

export default class Notfound extends Component {
    render() {
        return(
            <div className="notFound">
                <Row type="flex" justify="center">
                    <Col span={12}>Sorry,this planet no longer exist</Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={10}>Please press the F5 to get it back!</Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col><img src={nofound} alt=" " /></Col>
                </Row>
            </div>
        )
    }
}