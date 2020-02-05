import {Card, ListGroup} from "react-bootstrap";
import WishBookSummaryElement from "../molecules/WishBookSummaryElement";
import * as React from "react";
import {IWishBook} from "../../pages/dashboard";

interface IProps {
    wishBooks: IWishBook[];
}

const WishBookSummaryCardBody = ({wishBooks}: IProps) => (
    <div style={{overflow: 'scroll'}}>
        <ListGroup variant="flush">
            {wishBooks.map((wishBook: IWishBook, i: number) => (
                <ListGroup.Item key={i}>
                    <WishBookSummaryElement wishBook={wishBook}/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
);

const WishBookSummaryCard = ({wishBooks}: IProps) => (
    <Card style={{width: '100%', maxHeight: '435px'}}>
        <Card.Header as="h5">희망도서</Card.Header>
        <WishBookSummaryCardBody wishBooks={wishBooks}/>
    </Card>
);

export default WishBookSummaryCard;