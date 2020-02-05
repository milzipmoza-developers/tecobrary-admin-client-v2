import * as React from "react";
import AppBarLayout from "../../components/templates/AppBarLayout";
import ContentLayout from "../../components/templates/ContentLayout";

const Index = () => {
    return (
        <AppBarLayout isLoggedIn={true}>
            <ContentLayout>
                장서 관리
            </ContentLayout>
        </AppBarLayout>
    );
};

export default Index;