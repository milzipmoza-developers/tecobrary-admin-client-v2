import * as React from "react";
import BookRentStatusBadge from "../atoms/BookRentStatusBadge";
import {Button} from "react-bootstrap";
import Divider from "../atoms/Divider";
import {CSSProperties} from "react";

interface IProps {
    serialNumber: number;
    rentStatus: boolean;
    rentUser: string;
}

const itemStyle: CSSProperties = {
    flex: 1,
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

const BookSerialElement = ({serialNumber, rentStatus, rentUser}: IProps) => (
    <div>
        <div style={{height: '50px', display: 'flex', flexDirection: 'row', padding: '4px'}}>
            <div style={itemStyle}>
                <div>{serialNumber}</div>
            </div>
            <div style={{flex: 2, padding: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <BookRentStatusBadge rentStatus={rentStatus}/>
            </div>
            <div style={itemStyle}>
                <div>{rentUser ? rentUser : ''}</div>
            </div>
            <div style={itemStyle}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button variant="primary" size="sm" style={{width: '71.25px'}} disabled={!rentStatus}>반납 요청</Button>
                    <div style={{width: '16px'}}/>
                    <Button variant="primary" size="sm" style={{width: '71.25px'}}>삭제</Button>
                </div>
            </div>
        </div>
        <Divider/>
    </div>
);

export default BookSerialElement;