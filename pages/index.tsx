import AppBarLayout from "../components/templates/AppBarLayout";
import * as React from "react";
import {CSSProperties} from "react";
import {Card, Col, Row} from "react-bootstrap";
import GithubLoginButton from "../components/molecules/GithubLoginButton";

const outer: CSSProperties = {
    width: '100%',
    height: '100%',
};

const inner: CSSProperties = {
    marginTop: '10vh',
    marginLeft: '15vw',
    marginRight: '15vw',
};

const Index = () => {
    return (
        <AppBarLayout isLoggedIn={false}>
            <div className='outer-content-layout' style={outer}>
                <div className="inner-content-layout" style={inner}>
                    <Row style={{justifyContent: 'center'}}>
                        <Col xs={12} sm={10} md={8} lg={7} xl={6}>
                            <Card style={{height: '270px'}}>
                                <Card.Header as="h5">로그인이 필요합니다.</Card.Header>
                                <div className="github-login-btn-wrapper"
                                     style={{
                                         display: 'flex',
                                         justifyContent: 'center',
                                         height: '100%',
                                         alignItems: 'center'
                                     }}>
                                    <GithubLoginButton/>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </AppBarLayout>
    );
};

export default Index;