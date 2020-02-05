import {Card} from "react-bootstrap";
import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    userName: string;
    userEmail: string;
}

const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
};

const ProfileCardHeader = ({userName, userEmail}: IProps) => (
    <div style={style}>
        <Card.Title>{userName}님 환영합니다.</Card.Title>
        <Card.Subtitle
            className="mb-2 text-muted">{userEmail}</Card.Subtitle>
    </div>
);

export default ProfileCardHeader;