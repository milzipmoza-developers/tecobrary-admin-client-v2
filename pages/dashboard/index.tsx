import * as React from "react";
import AppBarContainer from "../../components/organisms/containers/AppBarContainer";
import DashBoardTemplate from "../../components/templates/DashBoardTemplate";
import {IHistory, IWishBook} from "../../models/interfaces";

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

const Index = () => {
    return (
        <AppBarContainer isLoggedIn={true}>
            <DashBoardTemplate histories={longTerms} wishBooks={wishBooks}/>
        </AppBarContainer>
    );
};

export default Index;