import * as React from "react";
import AppBarContainer from "../../src/components/organisms/containers/AppBarContainer";
import ContentContainer from "../../src/components/organisms/containers/ContentContainer";

const Index = () => {
    return (
        <AppBarContainer isLoggedIn={true}>
            <ContentContainer>
                대여 내역 관리
            </ContentContainer>
        </AppBarContainer>
    );
};

export default Index;