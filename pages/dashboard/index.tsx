import * as React from "react";
import AppBarLayout from "../../components/templates/AppBarLayout";
import ContentLayout from "../../components/templates/ContentLayout";
import {Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import RentHistoryItem from "../../components/atoms/RentHistoryItem";
import LongTermRentHistories from "../../components/templates/LongTermRentHistories";

const longTerms: IHistory[] = [
    {
        rentDate: '1980-01-01T01:01:00.000',
        title: '객체지향의 사실과 오해',
        serialNumber: '1',
        userName: '루피'
    },
    {
        rentDate: '2000-01-01T01:01:00.000',
        title: '오브젝트',
        serialNumber: '132',
        userName: '루피'
    },
];

export interface IHistory {
    rentDate: string;
    title: string;
    serialNumber: string;
    userName: string;
}

const Index = () => {
    return (
        <AppBarLayout isLoggedIn={true}>
            <ContentLayout>
                <Row>
                    <Col sm={8}>
                        <LongTermRentHistories histories={longTerms}/>
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
                                    관리자 모드
                                </Card.Text>
                                <Row style={{alignSelf: 'flex-end'}}>
                                    <Card.Link href="#">로그아웃</Card.Link>
                                    <Card.Link href="#">내 정보 관리</Card.Link>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop: '24px'}}>
                    <Col sm={12}>
                        <Card style={{width: '100%'}}>
                            <Card.Header as="h5">희망도서</Card.Header>
                            <div style={{overflow: 'scroll'}}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <RentHistoryItem sm={4}>도서 제목 - "도서"</RentHistoryItem>
                                            <RentHistoryItem sm={3}>신청 일시 - "대여 기간"</RentHistoryItem>
                                            <RentHistoryItem sm={3}>신청자</RentHistoryItem>
                                            <RentHistoryItem sm={1}>구매링크</RentHistoryItem>
                                            <RentHistoryItem sm={1}>처리완료</RentHistoryItem>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </ContentLayout>
        </AppBarLayout>
    );
};

export default Index;