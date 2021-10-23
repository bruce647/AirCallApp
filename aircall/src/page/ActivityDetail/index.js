import React, { Component } from 'react';
import { Container } from './style';
import { Descriptions } from 'antd';


class ActivityDetail extends Component {
    render() {
        const { cont } = this.props;
        return (
            <Container>
                <Descriptions title="User Info">
                    <Descriptions.Item label="Number ID">{cont.id}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{cont.from}</Descriptions.Item>
                    <Descriptions.Item label="To">{cont.to}</Descriptions.Item>
                    <Descriptions.Item label="via">{cont.via}</Descriptions.Item>
                    <Descriptions.Item label="Time">{cont.created_at}</Descriptions.Item>
                </Descriptions>
            </Container>
        )
    }
}

export default ActivityDetail;