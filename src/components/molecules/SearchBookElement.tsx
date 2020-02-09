import {Button, Col, Row} from "react-bootstrap";
import SearchBookItem from "./SearchBookItem";
import * as React from "react";

const SearchBookElement = ({searchBook, enrollButtonClickHandler}) => (
    <Row>
        <SearchBookItem sm={4}>{searchBook.title}</SearchBookItem>
        <SearchBookItem sm={2}>{searchBook.author}</SearchBookItem>
        <SearchBookItem sm={2}>{searchBook.publisher}</SearchBookItem>
        <SearchBookItem sm={2}>{searchBook.price}</SearchBookItem>
        <Col sm={2} style={{justifyContent: 'center'}}>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Button onClick={enrollButtonClickHandler(searchBook)}>한 권씩 등록</Button>
            </div>
        </Col>
    </Row>
);

export default SearchBookElement;