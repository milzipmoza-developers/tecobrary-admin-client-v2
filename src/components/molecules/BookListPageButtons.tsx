import BookListPageContext from "../../contexts/BookListPageContext";
import {Button, ButtonGroup} from "react-bootstrap";
import * as React from "react";

const BookListPageButtons = () => {
    return (
        <BookListPageContext.Consumer>
            {({page, onPageDown, onPageUp}) => (
                <div style={{height: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" onClick={onPageDown}>이전</Button>
                        <Button disabled>{page}</Button>
                        <Button variant="primary" onClick={onPageUp}>다음</Button>
                    </ButtonGroup>
                </div>
            )}
        </BookListPageContext.Consumer>
    )
};

export default BookListPageButtons;