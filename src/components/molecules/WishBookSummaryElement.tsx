import RentHistoryItem from "../atoms/RentHistoryItem";
import {Button, Row} from "react-bootstrap";
import * as React from "react";
import {IWishBook} from "../../models/interfaces";

interface IProps {
    wishBook: IWishBook;
}

const WishBookSummaryElement = ({wishBook}: IProps) => {
    const buyLinkButtonHandler = (buyLink: string) => () => {
        const newWindow = window.open(buyLink, '_blank')
        newWindow.focus();
    };

    const enrollButtonHandler = (id: string) => () => {
        console.log(id, '등록 되었습니다.');
    };

    return (
        <Row>
            <RentHistoryItem sm={4}>{wishBook.title}</RentHistoryItem>
            <RentHistoryItem sm={3}>{wishBook.createTime}</RentHistoryItem>
            <RentHistoryItem sm={3}>{wishBook.userName}</RentHistoryItem>
            <RentHistoryItem sm={1}>
                <Button variant="dark" onClick={buyLinkButtonHandler(wishBook.buyLink)}>구매</Button>
            </RentHistoryItem>
            <RentHistoryItem sm={1}>
                <Button variant="dark" onClick={enrollButtonHandler(wishBook.id)}>등록</Button>
            </RentHistoryItem>
        </Row>
    );
};

export default WishBookSummaryElement;