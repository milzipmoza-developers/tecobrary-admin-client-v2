import * as React from "react";
import AppBarLayout from "../../components/templates/AppBarLayout";
import ContentLayout from "../../components/templates/ContentLayout";
import {Card, Col, Row, Image, ListGroup} from "react-bootstrap";
import HistoryItem from "../../components/atoms/HistoryItem";

const Index = () => {
    return (
        <AppBarLayout isLoggedIn={true}>
            <ContentLayout>
                <Row>
                    <Col sm={8}>
                        <Card style={{height: '270px'}}>
                            <Card.Header as="h5">장기 대여자</Card.Header>
                            <div style={{overflow: 'scroll'}}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <HistoryItem sm={3}>대여일 - "대여일"</HistoryItem>
                                            <HistoryItem sm={3}>대여 기간 - "대여 기간"</HistoryItem>
                                            <HistoryItem sm={3}>"제목"</HistoryItem>
                                            <HistoryItem sm={3}>"대여자"</HistoryItem>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <HistoryItem sm={3}>대여일 - "대여일"</HistoryItem>
                                            <HistoryItem sm={3}>대여 기간 - "대여 기간"</HistoryItem>
                                            <HistoryItem sm={3}>"제목"</HistoryItem>
                                            <HistoryItem sm={3}>"대여자"</HistoryItem>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card body style={{height: '270px'}}>
                            <Card.Body>
                                <Row>
                                    <Col sm={4}>
                                        <Image src="https://avatars0.githubusercontent.com/u/52121827?s=460&v=4"
                                               style={{width: 'inherit', border: '1px solid gray'}}
                                               roundedCircle/>
                                    </Col>
                                    <Col sm={8}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            justifyContent: 'center'
                                        }}>
                                            <Card.Title>"ㅇㅇ"님 환영합니다.</Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 text-muted">thedevluffy@gmail.com</Card.Subtitle>
                                        </div>
                                    </Col>
                                </Row>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">로그아웃</Card.Link>
                                <Card.Link href="#">내 정보 관리</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        대시보드
                        <div>1. 어드민 회원 정보</div>
                        <div>2. 희망 도서 정보</div>
                        <div>3. 장기 대여자 정보</div>
                        <div>4. 관련 사이트 링크</div>
                    </Col>
                </Row>
            </ContentLayout>
        </AppBarLayout>
    );
};

export default Index;