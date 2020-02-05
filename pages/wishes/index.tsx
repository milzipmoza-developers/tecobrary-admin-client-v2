import * as React from "react";
import AppBarContainer from "../../components/organisms/containers/AppBarContainer";
import ContentContainer from "../../components/organisms/containers/ContentContainer";

const Index = () => {
    return (
        <AppBarContainer isLoggedIn={true}>
            <ContentContainer>
                희망 도서 관리
            </ContentContainer>
        </AppBarContainer>
    );
};

export default Index;