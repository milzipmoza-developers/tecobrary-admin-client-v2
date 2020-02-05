import * as React from "react";
import AppBarLayout from "../../components/templates/AppBarLayout";
import ContentLayout from "../../components/templates/ContentLayout";
import {Col, Row} from "react-bootstrap";
import LongTermRentHistories from "../../components/templates/LongTermRentHistories";
import LoginUserProfileCard from "../../components/organisms/LoginUserProfileCard";
import WishBookSummaryCard from "../../components/organisms/WishBookSummaryCard";

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

const wishBooks: IWishBook[] = [
    {
        id: '1',
        title: '세븐 데이터베이스',
        userName: '루피',
        buyLink: 'http://www.yes24.com/Product/Goods/8595403?Acode=101',
        createTime: '2020-01-01T13:13:13.000',
    },
    {
        id: '2',
        title: '시작하세요! 도커/쿠버네티스',
        userName: '루피',
        buyLink: 'http://www.yes24.com/Product/Goods/84927385?Acode=101',
        createTime: '2020-01-01T13:13:13.000',
    },
    {
        id: '2',
        title: '시작하세요! 도커/쿠버네티스',
        userName: '루피',
        buyLink: 'http://www.yes24.com/Product/Goods/84927385?Acode=101',
        createTime: '2020-01-01T13:13:13.000',
    },
    {
        id: '2',
        title: '시작하세요! 도커/쿠버네티스',
        userName: '루피',
        buyLink: 'http://www.yes24.com/Product/Goods/84927385?Acode=101',
        createTime: '2020-01-01T13:13:13.000',
    },
    {
        id: '2',
        title: '시작하세요! 도커/쿠버네티스',
        userName: '루피',
        buyLink: 'http://www.yes24.com/Product/Goods/84927385?Acode=101',
        createTime: '2020-01-01T13:13:13.000',
    },
    {
        id: '2',
        title: '시작하세요! 도커/쿠버네티스',
        userName: '루피',
        buyLink: 'http://www.yes24.com/Product/Goods/84927385?Acode=101',
        createTime: '2020-01-01T13:13:13.000',
    },
    {
        id: '2',
        title: '시작하세요! 도커/쿠버네티스',
        userName: '루피',
        buyLink: 'http://www.yes24.com/Product/Goods/84927385?Acode=101',
        createTime: '2020-01-01T13:13:13.000',
    },
];

export interface IHistory {
    rentDate: string;
    title: string;
    serialNumber: string;
    userName: string;
}

export interface IWishBook {
    id: string;
    title: string;
    userName: string;
    buyLink: string;
    createTime: string;
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
                        <WishBookSummaryCard wishBooks={wishBooks}/>
                    </Col>
                </Row>
            </ContentLayout>
        </AppBarLayout>
    );
};

export default Index;