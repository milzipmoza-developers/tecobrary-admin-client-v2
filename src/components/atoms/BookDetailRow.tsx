import * as React from "react";

interface IProps {
    title: string;
    children: string;
}

const BookDetailRow = ({title, children}: IProps) => (
    <div style={{display: 'flex', flexDirection: 'row', fontSize: '18px', padding: '4px'}}>
        <div style={{flex: 2, textAlign: 'center', fontWeight: 'bold'}}>{title}</div>
        <div style={{flex: 10}}>{children}</div>
    </div>
);

export default BookDetailRow;