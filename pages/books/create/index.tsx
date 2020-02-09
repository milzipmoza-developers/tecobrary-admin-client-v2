import * as React from "react";
import AppBarContainer from "../../../src/components/organisms/containers/AppBarContainer";
import ContentContainer from "../../../src/components/organisms/containers/ContentContainer";
import {Col, Row} from "react-bootstrap";
import SearchBookCard from "../../../src/components/organisms/SearchBookCard";

const Index = () => {
    return (
        <AppBarContainer isLoggedIn={true}>
            <ContentContainer>
                <Row>
                    <Col sm={12}>
                        <SearchBookCard/>
                    </Col>
                </Row>
            </ContentContainer>
        </AppBarContainer>
    );
};

export default Index;