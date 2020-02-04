import * as React from "react";
import AppBarLayout from "../../components/templates/AppBarLayout";
import ContentLayout from "../../components/templates/ContentLayout";
import {Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import RentHistoryItem from "../../components/atoms/RentHistoryItem";
import LongTermRentHistories from "../../components/templates/LongTermRentHistories";
import ProfileCardHeader from "../../components/molecules/ProfileCardHeader";
import LoginUserProfileCard from "../../components/organisms/LoginUserProfileCard";

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
                        <LoginUserProfileCard userName="루피" userEmail="thedevluffy@gmail.com"/>
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