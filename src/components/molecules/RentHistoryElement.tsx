import {Row} from "react-bootstrap";
import RentHistoryItem from "../atoms/RentHistoryItem";
import * as React from "react";
import {IHistory} from "../../models/interfaces";

const RentHistoryElement = (history: IHistory) => {

    const formatDate = (rentDate: string) => {
        const date = new Date(rentDate);
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    };

    const calculateTerm = (criteria: string) => {
        const now = new Date();
        const past = new Date(criteria);
        const diff = Math.abs(now.getTime() - past.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24)).toString();
    };

    return (
        <Row className="rent-history-element">
            <RentHistoryItem sm={3}>{`${formatDate(history.rentDate)}`}</RentHistoryItem>
            <RentHistoryItem sm={2}>{`${calculateTerm(history.rentDate)} 일 전`}</RentHistoryItem>
            <RentHistoryItem sm={4}>{history.title}</RentHistoryItem>
            <RentHistoryItem sm={1}>{history.serialNumber}</RentHistoryItem>
            <RentHistoryItem sm={2}>{history.userName}</RentHistoryItem>
        </Row>
    );
};

export default RentHistoryElement