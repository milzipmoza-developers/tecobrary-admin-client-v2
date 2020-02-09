import * as React from "react";
import {Col, Row} from "react-bootstrap";

interface IProps {
    children: any;
}

const ContentContainer = ({children}: IProps) => (
    <Row style={{justifyContent: 'center', width: '100%'}}>
        <Col lg={11} xl={8} style={{padding: '4px', minWidth: '1080px', marginTop: '28px', marginBottom: '28px'}}>
            {children}
        </Col>
    </Row>
);

export default ContentContainer;