import {Button, Card} from "react-bootstrap";
import * as React from "react";

interface IProps {
    title: string;
    buttonName: string;
    buttonOnClick?: any;
    disabled?: boolean;
}

const CardButtonHeader = ({title, buttonName, buttonOnClick, disabled}: IProps) => (
    <Card.Header as="h5">
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 13, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{width: 'fit-content'}}>{title}</div>
            </div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                <Button variant="primary" size="sm" onClick={buttonOnClick}
                        disabled={disabled ? disabled : false}>{buttonName}</Button>
            </div>
        </div>
    </Card.Header>
);

export default CardButtonHeader;