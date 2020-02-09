import {Row} from "react-bootstrap";
import SearchBookCardInput from "../organisms/SearchBookCardInput";
import SearchBookCardButton from "../organisms/SearchBookCardButton";
import * as React from "react";

const SearchBookCardHeader = () => {
    return (
        <div style={{margin: '16px'}}>
            <Row style={{justifyContent: 'center'}}>
                <SearchBookCardInput/>
                <SearchBookCardButton/>
            </Row>
        </div>
    );
};

export default SearchBookCardHeader;