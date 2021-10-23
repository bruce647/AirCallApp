import React,{Component} from 'react';
import { Container } from '../ArchivedList/style';
import { Row, Col, Card } from 'antd';
import axios from 'axios';


class ArchivedList extends Component{
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
            isLoaded: false
        }
        this.fetchData();
    }
    
    render() {
        if (!this.state.isLoaded) {
            return (
            <Container>Loading</Container>
            )
        } else {
            return (

                <Container>
                    {
                        this.state.data.map((item, index) => {
                            if(item.is_archived){
                            return( 
                                <Row className="card">
                                <Col offset={2}>
                                    <Card size="small" title={item.created_at} extra={<><a href="/">Archive</a> <a href="/">More</a></>} style={{ width: 300 }}>
                                        <p1>{item.from}</p1>
                                    </Card>
                                </Col>
                            </Row>
                            )
                        }else{
                            return null
                        }
                        })
                    }
                    
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
        console.log("local:", this.state.data);
    }
}

export default ArchivedList;