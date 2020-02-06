import AppBarContainer from "../src/components/organisms/containers/AppBarContainer";
import * as React from "react";
import UnFixedContainer from "../src/components/organisms/containers/UnFixedContainer";
import UnFixedFrame from "../src/components/atoms/UnFixedFrame";
import GithubLoginCard from "../src/components/organisms/GithubLoginCard";

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