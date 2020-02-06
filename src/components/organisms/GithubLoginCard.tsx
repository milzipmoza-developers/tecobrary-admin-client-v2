import {Card} from "react-bootstrap";
import GithubLoginBtnWrapper from "../atoms/GithubLoginBtnWrapper";
import GithubLoginButton from "../molecules/GithubLoginButton";
import * as React from "react";

const GithubLoginCard = () => (
    <Card style={{height: '270px'}}>
        <Card.Header as="h5">로그인이 필요합니다.</Card.Header>
        <GithubLoginBtnWrapper>
            <GithubLoginButton/>
        </GithubLoginBtnWrapper>
    </Card>
);

export default GithubLoginCard;