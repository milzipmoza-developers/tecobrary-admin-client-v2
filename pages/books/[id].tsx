import * as React from "react";
import AppBarContainer from "../../src/components/organisms/containers/AppBarContainer";
import ContentContainer from "../../src/components/organisms/containers/ContentContainer";
import {Card} from "react-bootstrap";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <AppBarContainer isLoggedIn={true}>
            <ContentContainer>
                <Card>
                    <Card.Header as="h5">장서 상세 정보</Card.Header>
                    조회 할 책 id - {id}
                </Card>
            </ContentContainer>
        </AppBarContainer>
    );
};

export default Index;