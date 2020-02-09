import * as React from "react";

const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center'
};

const GithubLoginBtnWrapper = ({children}: any) => (
    <div className="github-login-btn-wrapper" style={wrapperStyle}>
        {children}
    </div>
);

export default GithubLoginBtnWrapper;