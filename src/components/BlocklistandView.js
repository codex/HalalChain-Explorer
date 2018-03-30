import React, { Component } from 'react';
import '../style/BlocklistandView.css';
import { Layout, Row, Col, Radio, Input, Button } from 'antd';
import Blocklist from './Blocklist';
const RadioGroup = Radio.Group;
const { Header, Sider, Content } = Layout;
let numChange = ''; //输入框内容
let selectNum = 1; //radioGroup选项
export default class BlocklistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }
  numChange = e => {
    numChange = e.target.value;
  };
  handleSearchClick(value, type,cb) {
    this.props.handleSearchClick(value, type,cb);
    // console.log('value=' + value);
    // if (this.props.handleSearchClick) {
    //   if (value) {
    //     console.log('有value');
    //     this.props.handleSearchClick(value, this.state.value);
    //   } else if (numChange) {
    //     console.log('没有value');
    //     this.props.handleSearchClick(numChange, this.state.value);
    //   }
    // }
  }
  //   handleSearchForSub() {
  //     //Find搜索
  //     if (this.props.handleSearch) {
  //       if (numChange) {
  //         this.props.handleSearch(numChange, this.state.value, selectNum);
  //       }
  //     }
  //   }

  onChange = e => {
    console.log('radio checked', e.target.value);
    selectNum = e.target.value;
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };
    return (
      <div className="BlocklistandView">
        <Blocklist handleSearchClick={this.handleSearchClick.bind(this)} />{' '}
        {/* <Layout>
          <Row type="flex" justify="center">
            <Col span={14}>
              
            </Col>
            <Col span={6}>
              <div
                className="BlocklistRight"
                style={{
                  backgroundColor: '#f7fbff',
                  width: '100%',
                  height: '350px'
                }}
              >
                <Row type="flex">
                  <Col className="Identifier" span={22}>
                    Identifier&nbsp;[number,hash,tag]
                  </Col>
                </Row>
                <Row type="flex">
                  <Col span={1} />
                  <Col span={22}>
                    <Input
                      className="Input"
                      placeholder="Query  condition"
                      onChange={this.numChange}
                    />
                  </Col>
                </Row>

                <RadioGroup
                  className="RadioGroup"
                  onChange={this.onChange.bind(this)}
                  value={this.state.value}
                >
                  <Radio style={radioStyle} value={1}>
                    Block
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    TXs
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Product
                  </Radio>
                </RadioGroup>

                <a href="#jiake">
                  <Button
                    type="primary"
                    className="findButton"
                    onClick={this.handleSearchForSub.bind(this)}
                  >
                    Find
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Layout> */}
      </div>
    );
  }
}
