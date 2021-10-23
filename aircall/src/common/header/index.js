import React, { Component } from 'react';
import { HeaderWrapper } from './style';
import { Menu, Avatar, Typography, Row, Col } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import logo from '../../img/callLogo.png'
import '../../App.css'

class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <HeaderWrapper>
                <Row>
                    <Col span={3} className="logo">
                        <Avatar align="center" src={logo} size="large" />
                    </Col>
                    <Col span={3}>
                        <Typography.Title level={4} className="logo-name">
                            <a href="/">Air Call</a>
                        </Typography.Title></Col>
                    <Col span={18}>
                        <Menu onClick={this.handleClick} selectedKeys={this.state.current} className="navbar" mode="horizontal">
                            <Menu.Item key="mail" icon={<MailOutlined />}>
                                <a href="/">Missedcalls</a>
                            </Menu.Item>
                            <Menu.Item key="alipay">
                                <a href="/archived">
                                    Archivedcalls
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </HeaderWrapper>
        )
    }
    handleClick(e) {
     this.setState({
         current:e.key
     })  
    };
}

export default HeaderContent;