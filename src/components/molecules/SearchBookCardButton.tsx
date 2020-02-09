import SearchBookInputContext from "../../contexts/SearchBookInputContext";
import {Button} from "react-bootstrap";
import * as React from "react";

const SearchBookCardButton = () => (
    <SearchBookInputContext.Consumer>
        {({onSearchButtonClickHandler}) => (
            <div style={{width: 'fit-content'}}>
                <Button variant="primary" onClick={onSearchButtonClickHandler}>검색</Button>
            </div>
        )}
    </SearchBookInputContext.Consumer>
);

export default SearchBookCardButton;