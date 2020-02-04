import {Col} from "react-bootstrap";
import * as React from "react";

interface IProps {
    sm: number;
    children: string;
    i?: number;
}

const RentHistoryItem = ({sm, i, children}: IProps) => (
    <Col id={`history-item-${i}`} sm={sm} style={{textAlign: 'center'}}>
        {children}
    </Col>
);

export default RentHistoryItem;