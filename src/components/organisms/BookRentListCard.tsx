import {Card} from "react-bootstrap";
import CardButtonHeader from "../molecules/CardButtonHeader";
import BookRentListCardBody from "../molecules/BookRentListCardBody";
import * as React from "react";
import {ISerialInfo} from "../../models/interfaces";
import {useState} from "react";
import BookListCardFooter from "./BookListCardFooter";
import Divider from "../atoms/Divider";

interface IProps {
    bookId: string | string[];
    onClick?: any;
}

const mockSerials: ISerialInfo[] = [
    {serialNumber: 1, rentStatus: true, rentUser: '루피'},
    {serialNumber: 2, rentStatus: false, rentUser: null},
    {serialNumber: 3, rentStatus: true, rentUser: '루피'},
];

const BookRentListCard = ({bookId, onClick}: IProps) => {

    const [page, setPage] = useState(1);
    const [serials, setSerials] = useState<ISerialInfo[]>(mockSerials);

    const onPageDown = () => {
        if (page <= 1) {
            return;
        }
        setPage(page - 1);
        console.log('on Page Down');
    };

    const onPageUp = () => {
        console.log('on page up');
    };

    return (
        <Card style={{marginTop: '20px'}}>
            <CardButtonHeader title="시리얼 정보" buttonName="추가" buttonOnClick={onClick}/>
            <BookRentListCardBody serials={serials}/>
            <Divider/>
            <BookListCardFooter page={page} onPageDown={onPageDown} onPageUp={onPageUp}/>
        </Card>
    );
};

export default BookRentListCard;