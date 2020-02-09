import ContentContainer from "../organisms/containers/ContentContainer";
import {Col, Row} from "react-bootstrap";
import LongTermRentHistoryCard from "../organisms/LongTermRentHistoryCard";
import LoginUserProfileCard from "../organisms/LoginUserProfileCard";
import WishBookSummaryCard from "../organisms/WishBookSummaryCard";
import * as React from "react";
import {IHistory, IWishBook} from "../../models/interfaces";

interface IProps {
    histories: IHistory[];
    wishBooks: IWishBook[];
}

const DashBoardTemplate = ({histories, wishBooks}: IProps) => (
    <ContentContainer>
        <Row>
            <Col sm={8}>
                <LongTermRentHistoryCard histories={histories}/>
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
    </ContentContainer>
);

export default DashBoardTemplate;