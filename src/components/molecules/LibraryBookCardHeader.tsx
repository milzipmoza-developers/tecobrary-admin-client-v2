import {useRouter} from "next/router";
import {Button, Card} from "react-bootstrap";
import * as React from "react";

const LibraryBookCardHeader = () => {
    const router = useRouter();

    const enrollButtonClickHandler = () => {
        router.push("/books/create");
    };

    return (
        <Card.Header as="h5">
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 13, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{width: 'fit-content'}}>
                        장서 목록
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <Button variant="primary" size="sm" onClick={enrollButtonClickHandler}>새 책 등록</Button>
                </div>
            </div>
        </Card.Header>
    );
};

export default LibraryBookCardHeader;