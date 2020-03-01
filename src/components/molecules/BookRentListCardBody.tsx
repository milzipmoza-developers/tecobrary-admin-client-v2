import {ISerialInfo} from "../../models/interfaces";
import BookSerialElement from "./BookSerialElement";
import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    serials: ISerialInfo[]
}

const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '250px',
    maxHeight: '350px',
    height: 'fill-content',
    textAlign: 'center',
    overflow: 'scroll'
};

const BookRentListCardBody = ({serials}: IProps) => (
    <div style={style}>
        {serials.map((serial: ISerialInfo, i: number) => (
            <BookSerialElement
                key={i}
                serialNumber={serial.serialNumber}
                rentStatus={serial.rentStatus}
                rentUser={serial.rentUser}/>
        ))}
    </div>
);

export default BookRentListCardBody;