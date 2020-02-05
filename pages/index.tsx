import AppBarLayout from "../components/templates/AppBarLayout";
import * as React from "react";
import UnFixedLayout from "../components/templates/UnFixedLayout";
import UnFixedFrame from "../components/atoms/UnFixedFrame";
import GithubLoginCard from "../components/organisms/GithubLoginCard";

const Index = () => {
    return (
        <AppBarLayout isLoggedIn={false}>
            <UnFixedLayout>
                <UnFixedFrame>
                    <GithubLoginCard/>
                </UnFixedFrame>
            </UnFixedLayout>
        </AppBarLayout>
    );
};

export default Index;