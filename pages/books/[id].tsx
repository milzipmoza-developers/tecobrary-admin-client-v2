import * as React from "react";
import {useEffect, useState} from "react";
import AppBarContainer from "../../src/components/organisms/containers/AppBarContainer";
import ContentContainer from "../../src/components/organisms/containers/ContentContainer";
import {useRouter} from "next/router";
import {ILibraryBook} from "../../src/models/interfaces";
import BookRentListCard from "../../src/components/organisms/BookRentListCard";
import BookDetailCard from "../../src/components/organisms/BookDetailCard";

const mockLibraryBook: ILibraryBook = {
    id: 8,
    title: "개발자의 글쓰기 (변수 네이밍부터 릴리스 노트, 장애 보고서, 기술 블로그까지, 프로그래머의 글쓰기 고민 끝!)",
    image: "https://bookthumb-phinf.pstatic.net/cover/155/135/15513595.jpg?type=m1&udate=20191213",
    author: "김철수",
    publisher: "위키북스",
    isbn: "1158391749 9791158391744",
    description: "오직 개발자를 위한 글쓰기의 모든 것을 담았습니다!이 책은 개발자의 글쓰기 능력을 종합적으로 향상하기 위한 책이다. 코드 안에서는 함수와 변수... 외주 개발을 하는 개발자를 위해 SI 제안서의 기술 부문을 설득력 있게 쓰는 법도 놓치지 않았다. 블로그를 운영하려는 개발자나 IT기업을 위해 기술 블로그를... ",
    hasMany: 1,
};

const Index = () => {
    const router = useRouter();

    const {id} = router.query;
    const [libraryBook, setLibraryBook] = useState();

    useEffect(() => {
        setLibraryBook(mockLibraryBook)
    }, [router]);

    const addSerialBtnClickHandler = () => {
        console.log('add serial edit')
    };

    return (
        <AppBarContainer isLoggedIn={true}>
            <ContentContainer>
                <BookDetailCard libraryBook={libraryBook}/>
                <BookRentListCard bookId={id} onClick={addSerialBtnClickHandler}/>
            </ContentContainer>
        </AppBarContainer>
    );
};

export default Index;