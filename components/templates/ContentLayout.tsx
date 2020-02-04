import * as React from "react";
import {Col, Row} from "react-bootstrap";

interface IProps {
    children: any;
}

const ContentLayout = ({children}: IProps) => (
    <Row style={{justifyContent: 'center'}}>
        <Col lg={11} xl={8} style={{padding: '4px', minWidth: '1120px', marginTop: '28px', marginBottom: '28px'}}>
            {children}
        </Col>
    </Row>
);

export default ContentLayout;