import AppBarLayout from "../components/templates/AppBarLayout";
import ContentLayout from "../components/templates/ContentLayout";
import * as React from "react";
import {Col, Row} from "react-bootstrap";

const Index = () => {
    return (
        <AppBarLayout isLoggedIn={false}>
            <ContentLayout>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </ContentLayout>
        </AppBarLayout>
    );
};

export default Index;