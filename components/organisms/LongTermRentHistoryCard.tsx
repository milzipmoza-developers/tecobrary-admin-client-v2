import {Card} from "react-bootstrap";
import RentHistoryList from "./RentHistoryList";
import * as React from "react";
import {IHistory} from "../../pages/dashboard";
import {useRouter} from "next/router";

interface IProps {
    histories: IHistory[];
}

const LongTermRentHistoryCard = ({histories}: IProps) => {
    const router = useRouter();

    const titleClickHandler = () => {
        router.push('/histories')
    };

    return (
        <Card style={{height: '270px'}}>
            <Card.Header as="h5" onClick={titleClickHandler} style={{cursor: 'pointer'}}>장기 대여자</Card.Header>
            <div style={{overflow: 'scroll'}}>
                <RentHistoryList histories={histories}/>
            </div>
        </Card>
    );
};

export default LongTermRentHistoryCard;