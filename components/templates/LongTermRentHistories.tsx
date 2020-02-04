import {Card} from "react-bootstrap";
import RentHistoryList from "../organisms/RentHistoryList";
import * as React from "react";
import {IHistory} from "../../pages/dashboard";

interface IProps {
    histories: IHistory[];
}

const LongTermRentHistories = ({histories}: IProps) => (
    <Card style={{height: '270px'}}>
        <Card.Header as="h5">장기 대여자</Card.Header>
        <div style={{overflow: 'scroll'}}>
            <RentHistoryList histories={histories}/>
        </div>
    </Card>
);

export default LongTermRentHistories;