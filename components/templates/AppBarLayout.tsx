import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import * as React from "react";
import {CSSProperties} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {
    isLoggedIn: boolean;
    children: object;
}

const style: CSSProperties = {
    height: '100vh',
    width: '100vw',
};

const NotLoggedInAppBar = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">테코브러리 어드민</Navbar.Brand>
    </Navbar>
);

const LoggedInAppBar = () => (
    <Navbar bg="dark" variant="dark" style={{minWidth: '1080px'}}>
        <Navbar.Brand href="/">테코브러리 어드민</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/dashboard">대시보드</Nav.Link>
            <Nav.Link href="/users">회원 관리</Nav.Link>
            <Nav.Link href="/books">장서 관리</Nav.Link>
            <Nav.Link href="/histories">대여 내역 관리</Nav.Link>
            <Nav.Link href="/wishes">희망도서 관리</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="검색" className="mr-sm-2"/>
            <Button variant="outline-info">검색</Button>
        </Form>
    </Navbar>
);

const AppBarLayout = ({isLoggedIn, children}: IProps) => {
    return (
        <div style={style}>
            {isLoggedIn ? <LoggedInAppBar/> : <NotLoggedInAppBar/>}
            <div className="body-content-wrapper">
                {children}
            </div>
        </div>
    );
};

export default AppBarLayout;