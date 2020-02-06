import * as React from "react";
import {CSSProperties} from "react";
import {useRouter} from "next/router";

const githubBtnOuter: CSSProperties = {
    backgroundColor: 'black',
    width: '50%',
    color: 'white',
    height: '55px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
};

const GithubLoginButton = () => {
    const router = useRouter();

    const getOnClick = () => {
        router.push("/dashboard")
    };

    return (
        <div className="github-login-btn" style={githubBtnOuter} onClick={getOnClick}>
            <div style={{textAlign: 'center', fontSize: '24px'}}>
                Github 로그인
            </div>
        </div>
    );
};

export default GithubLoginButton;