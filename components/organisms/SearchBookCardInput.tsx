import SearchBookInputContext from "../../src/contexts/SearchBookInputContext";
import {Col, FormControl, InputGroup} from "react-bootstrap";
import * as React from "react";

const SearchBookCardInput = () => (
    <SearchBookInputContext.Consumer>
        {({onInputChange, onKeyUp}) => (
            <Col md={{span: 5}} style={{height: 'fit-content'}}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="검색어를 입력하세요"
                        aria-describedby="search-keyword"
                        onChange={onInputChange}
                        onKeyUp={onKeyUp}
                    />
                </InputGroup>
            </Col>)
        }
    </SearchBookInputContext.Consumer>
);

export default SearchBookCardInput;