import {Col} from "react-bootstrap";
import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    sm: number;
    children: any;
}

const childrenWrapper: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
};

const RentHistoryItem = ({sm, children}: IProps) => (
    <Col sm={sm} style={{textAlign: 'center'}}>
        <div style={childrenWrapper}>
            {children}
        </div>
    </Col>
);

export default RentHistoryItem;