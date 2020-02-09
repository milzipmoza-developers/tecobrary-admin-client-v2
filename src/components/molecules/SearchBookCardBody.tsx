import {ListGroup} from "react-bootstrap";
import SearchBookResultContext from "../../contexts/SearchBookResultContext";
import SearchBookElement from "./SearchBookElement";
import * as React from "react";
import {ISearchBook} from "../../models/interfaces";

const SearchBookCardBody = () => {
    return (
        <div>
            <div style={{width: '100%', borderTop: '1px solid #DFDFDF'}}>
                <div style={{overflow: 'scroll'}}>
                    <ListGroup variant="flush" style={{maxHeight: '65vh'}}>
                        <SearchBookResultContext.Consumer>
                            {({searchBooks, enrollButtonClickHandler}) => (
                                searchBooks.map((searchBook: ISearchBook, i: number) => (
                                    <ListGroup.Item key={i} style={{height: '70px'}}>
                                        <SearchBookElement
                                            searchBook={searchBook}
                                            enrollButtonClickHandler={enrollButtonClickHandler}/>
                                    </ListGroup.Item>)
                                )
                            )}
                        </SearchBookResultContext.Consumer>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default SearchBookCardBody;