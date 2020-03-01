import {ILibraryBook} from "../../models/interfaces";
import {Image} from "react-bootstrap";
import BookDetailRow from "../atoms/BookDetailRow";
import * as React from "react";


interface IProps {
    libraryBook: ILibraryBook;
}

const BookDetailCardBody = ({libraryBook}: IProps) => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 2, minHeight: '250px', maxHeight: '250px'}}>
            <Image src={libraryBook ? libraryBook.image : null} fluid style={{width: '100%', height: '100%'}}/>
        </div>
        <div style={{flex: 9, padding: '12px', display: 'flex', flexDirection: 'column'}}>
            <BookDetailRow title="제목">{libraryBook ? libraryBook.title : ''}</BookDetailRow>
            <BookDetailRow title="저자">{libraryBook ? libraryBook.author : ''}</BookDetailRow>
            <BookDetailRow title="출판사">{libraryBook ? libraryBook.publisher : ''}</BookDetailRow>
            <BookDetailRow title="ISBN">{libraryBook ? libraryBook.isbn : ''}</BookDetailRow>
            <BookDetailRow title="상세정보">{libraryBook ? libraryBook.description : ''}</BookDetailRow>
        </div>
    </div>
);

export default BookDetailCardBody;