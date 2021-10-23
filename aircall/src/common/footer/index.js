import React, { Component } from 'react';
import { FooterWrapper } from './style';
import { Menu, Avatar, Typography, Row, Col, Badge } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import call from '../../img/telephone-call.png';
import menu from '../../img/menu.png';
import video from '../../img/video-camera.png';
import star from '../../img/star.png'

import "../../App.css"

class FooterDiv extends Component {
    render() {
        return (
            <FooterWrapper>
                
                <Row className="footer">
                    <Menu onClick={this.handleClick} className="footerbar" mode="horizontal">
                        <Col span={6} offset={1}>
                            <Menu.Item key="mail" >
                            <a href="/"><Badge count={5} className="badge"><img className="bar-img" src={call}/></Badge></a>
                            </Menu.Item>
                        </Col>
                        <Col span={6}>
                            <Menu.Item key="mail" >
                            <a href="/"><img className="bar-img" src={menu}/></a>
                            </Menu.Item>
                        </Col>
                        <Col span={6}>
                            <Menu.Item key="mail" >
                            <a href="/"><img className="bar-img" src={video}/></a>
                            </Menu.Item>
                        </Col>
                        <Col span={6}>
                            <Menu.Item key="alipay">
                            <a href="/"><img className="bar-img" src={star}/></a>
                            </Menu.Item>
                        </Col>
                    </Menu>
                </Row>
            </FooterWrapper>
        )
    }
}

export default FooterDiv;