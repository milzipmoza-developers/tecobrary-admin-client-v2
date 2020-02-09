import {Col, Row} from "react-bootstrap";
import * as React from "react";

const UnFixedFrame = ({children}: any) => (
    <Row style={{justifyContent: 'center'}}>
        <Col xs={12} sm={10} md={8} lg={7} xl={6}>
            {children}
        </Col>
    </Row>
);

export default UnFixedFrame;