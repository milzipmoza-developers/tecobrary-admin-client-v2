import {ListGroup} from "react-bootstrap";
import RentHistoryElement from "../molecules/RentHistoryElement";
import * as React from "react";
import {IHistory} from "../../pages/dashboard";

interface IProps {
    histories: IHistory[];
}

const RentHistoryList = ({histories}: IProps) => (
    <ListGroup className="rent-history-list" variant="flush">
        {histories.map((history: IHistory, i: number) => (
            <ListGroup.Item key={i}>
                <RentHistoryElement rentDate={history.rentDate}
                                    title={history.title}
                                    serialNumber={history.serialNumber}
                                    userName={history.userName}/>
            </ListGroup.Item>
        ))}
    </ListGroup>
);

export default RentHistoryList;