import {ListGroup} from "react-bootstrap";
import {ILibraryBook} from "../../models/interfaces";
import LibraryBookElement from "../molecules/LibraryBookElement";
import * as React from "react";
import "./mouseover.css";

const LibraryBookCardBody = ({books, onClick}) => (
    <div style={{overflow: 'scroll'}}>
        <ListGroup variant="flush" style={{height: '700px'}}>
            {books.map((libraryBook: ILibraryBook, i: number) => (
                <ListGroup.Item className="library-book-item"
                                key={i} style={{height: '150px', cursor: 'pointer'}}
                                onClick={onClick(libraryBook.id)}>
                    <LibraryBookElement libraryBook={libraryBook}/>
                </ListGroup.Item>))}
        </ListGroup>
    </div>
);

export default LibraryBookCardBody;