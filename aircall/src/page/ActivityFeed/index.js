import React, { Component } from 'react';
import ActivityDetail from '../ActivityDetail';
import { Container } from '../ActivityFeed/style';
import { Card, Row, Col, Modal, Button } from 'antd';

import axios from 'axios';

import '../../App.css'




class ActivityFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            numberObj: {
                date: "",
                number: "",
                to: "",
                isArchived: false,
                missed: false
            },
            isLoaded: false,
            reset: false,
            detail: [],
            detailIndex: [],
            isModalVisible: false
        }

        this.fetchData();
        this.resetAllCalls = this.resetAllCalls.bind(this);
        this.archiveCall = this.archiveCall.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <Container>Loading</Container>
            )
        } else {
            return (

                <Container>
                    <Row className="card">
                        <Col offset={2}>
                            <Card onClick={this.resetAllCalls} size="small" title="Reset!!!" extra={<a href="/">More</a>} style={{ width: 300 }}>
                                <Button onClick={this.resetAllCalls}>Click Me</Button>
                            </Card>
                        </Col>
                    </Row>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <Row className="card">
                                    <Col offset={2}>
                                        <Card size="small" title={item.created_at} extra={<><a onClick={() => this.archiveCall(index)}>Archive </a>
                                             <a onClick={() => this.showModal(index)}>More</a></>} style={{ width: 300 }}>
                                            <p1>{item.from}</p1>
                                        </Card>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <ActivityDetail cont={this.state.detail}/>
                    </Modal>
                </Container>
            )
        }
    }
    async fetchData() {
        await axios.get('https://aircall-job.herokuapp.com/activities').then((res) => {
            this.setState({
                data: res.data,
                isLoaded: true
            })
        }).catch(() => {
            console.log('error')
        })
    };
    resetAllCalls() {
        axios.get('https://aircall-job.herokuapp.com/reset').then((res) => {
            this.setState({
                reset: true
            })
        }).catch(() => {
            console.log('error')
        })
    };
    archiveCall(index) {
        const id = this.state.data[index].id;
        axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
            is_archived: true
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    showModal(index) {
        this.setState({
            isModalVisible: true,
            detailIndex:index
        })
        const id = this.state.data[index].id;
        axios.get(`https://aircall-job.herokuapp.com/activities/${id}`).then((res) => {
            this.setState({
                detail:res.data,
                detialLoaded:true
            })
        }).catch(() => {
            console.log('error')
        })
    }
    handleOk() {
        this.setState({
            isModalVisible: false
        })
    };
    handleCancel() {
        this.setState({
            isModalVisible: false
        })
    };
}


export default ActivityFeed;