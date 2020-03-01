import {Badge} from "react-bootstrap";
import * as React from "react";

const BookRentStatusBadge = ({rentStatus}: any) => (
    <div style={{fontSize: '24px', lineHeight: '24px'}}>
        {rentStatus
            ? <Badge variant="warning">대여중</Badge>
            : <Badge variant="success">비치중</Badge>}
    </div>
);

export default BookRentStatusBadge;