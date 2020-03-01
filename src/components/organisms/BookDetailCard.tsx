import {ILibraryBook} from "../../models/interfaces";
import {Card} from "react-bootstrap";
import CardButtonHeader from "../molecules/CardButtonHeader";
import BookDetailCardBody from "../molecules/BookDetailCardBody";
import * as React from "react";

interface IProps {
    libraryBook: ILibraryBook;
}

const BookDetailCard = ({libraryBook}: IProps) => (
    <Card>
        <CardButtonHeader title="장서 상세 정보" buttonName="정보 수정" disabled={true}/>
        <BookDetailCardBody libraryBook={libraryBook}/>
    </Card>
);

export default BookDetailCard;