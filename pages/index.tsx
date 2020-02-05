import AppBarContainer from "../components/organisms/containers/AppBarContainer";
import * as React from "react";
import UnFixedContainer from "../components/organisms/containers/UnFixedContainer";
import UnFixedFrame from "../components/atoms/UnFixedFrame";
import GithubLoginCard from "../components/organisms/GithubLoginCard";

const Index = () => {
    return (
        <AppBarContainer isLoggedIn={false}>
            <UnFixedContainer>
                <UnFixedFrame>
                    <GithubLoginCard/>
                </UnFixedFrame>
            </UnFixedContainer>
        </AppBarContainer>
    );
};

export default Index;