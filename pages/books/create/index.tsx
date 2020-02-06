import * as React from "react";
import {useState} from "react";
import AppBarContainer from "../../../src/components/organisms/containers/AppBarContainer";
import ContentContainer from "../../../src/components/organisms/containers/ContentContainer";
import {Button, Card, Col, Form, ListGroup, Row} from "react-bootstrap";
import SearchBookItem from "../../../src/components/molecules/SearchBookItem";
import SearchBookInputContext from "../../../src/contexts/SearchBookInputContext";
import SearchBookCardInput from "../../../src/components/organisms/SearchBookCardInput";
import SearchBookCardButton from "../../../src/components/organisms/SearchBookCardButton";
import SearchBookResultContext from "../../../src/contexts/SearchBookResultContext";

export interface ISearchBook {
    title: string;
    link: string;
    image: string;
    author: string;
    price: string;
    discount: string;
    publisher: string;
    pubdate: string;
    isbn: string;
    description: string;
}

const remoteSearchBooks: ISearchBook[] = [
    {
        title: "<b>개발자</b>의 글쓰기 (변수 네이밍부터 릴리스 노트, 장애 보고서, 기술 블로그까지, 프로그래머의 글쓰기 고민 끝!)",
        link: "http://book.naver.com/bookdb/book_detail.php?bid=15513595",
        image: "https://bookthumb-phinf.pstatic.net/cover/155/135/15513595.jpg?type=m1&udate=20191213",
        author: "김철수",
        price: "18000",
        discount: "16200",
        publisher: "위키북스",
        pubdate: "20191004",
        isbn: "1158391749 9791158391744",
        description: "오직 <b>개발자</b>를 위한 글쓰기의 모든 것을 담았습니다!이 책은 <b>개발자</b>의 글쓰기 능력을 종합적으로 향상하기 위한 책이다. 코드 안에서는 함수와 변수... 외주 개발을 하는 <b>개발자</b>를 위해 SI 제안서의 기술 부문을 설득력 있게 쓰는 법도 놓치지 않았다. 블로그를 운영하려는 <b>개발자</b>나 IT기업을 위해 기술 블로그를... "

    },
    {
        title: "이기적 SQL <b>개발자</b>이론서+문제집 (무료 동영상 강의 제공,2019,Developer, 실전 문제 7회 제공)",
        link: "http://book.naver.com/bookdb/book_detail.php?bid=14364997",
        image: "https://bookthumb-phinf.pstatic.net/cover/143/649/14364997.jpg?type=m1&udate=20191115",
        author: "임호진",
        price: "18000",
        discount: "16200",
        publisher: "영진닷컴",
        pubdate: "20190110",
        isbn: "893145712X 9788931457124",
        description: "본 도서는 한국데이터진흥원에서 시행하는 ‘SQL <b>개발자</b>(DEVELOPER)’ 자격의 합격을 위한 도서입니다. SQLD 시험의 출제 기준과 출제된 기출문제를 분석하여 핵심 내용만 엄선하였습니다. 과목과 섹션마다 개념을 정리할 수 있는 문제를 수록하여 이론 학습을 더욱 탄탄히 할 수 있습니다. 기출문제를... "

    },
    {
        "title": "IT <b>개발자</b>의 영어 필살기 (11가지 영문서 유형으로 공략하는 IT 업계 맞춤형 영어 학습법)",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=15986525",
        "image": "https://bookthumb-phinf.pstatic.net/cover/159/865/15986525.jpg?type=m1&udate=20200108",
        "author": "니시노 류타로",
        "price": "16000",
        "discount": "14400",
        "publisher": "책만",
        "pubdate": "20200107",
        "isbn": "118990909X 9791189909093",
        "description": "경쟁력 있는 <b>개발자</b>가 되기 위한 필수 언어는 C나 자바가 아니라 ‘영어’다! 이 책의 목표 필살기는 ‘IT 영문서 읽기’다. 장문의 영어를 차분히... 영어 기본기를 새로이 다잡고 싶은 <b>개발자</b>와 엔지니어, 취업준비생, 학생을 위한 IT 맞춤형 영어 학습법을 제시하는 책이다.\n\n이 책에서는 ‘UI 텍스트, 커밋... "
    },
    {
        "title": "나는 LINE <b>개발자</b>입니다 (라인의 개발 고수 12인의 도전과 기회, 성장의 개발 라이프)",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=15372183",
        "image": "https://bookthumb-phinf.pstatic.net/cover/153/721/15372183.jpg?type=m1&udate=20191008",
        "author": "강윤신|김영환|김재석|김정엽|김택주|노승헌|박민우|배권한|이서연|이승진|이홍규|하태호",
        "price": "16000",
        "discount": "14400",
        "publisher": "한빛미디어",
        "pubdate": "20190823",
        "isbn": "1162242167 9791162242162",
        "description": "글로벌 테크 기업 LINE의 개발 고수 12인의 개발 라이프 \n10대 창업자, 게임 마니아, 철학 전공 <b>개발자</b>, 아마존 출신 <b>개발자</b> 등 다양한 경력의 12인이 라인(LINE) <b>개발자</b>가 되기까지의 이야기, 그리고 라인에서 동료들과 함께 글로벌 <b>개발자</b>로 한 단계 성장하는 과정을 책으로 엮었다. 세계를 무대로 활약하는... "

    },
    {
        "title": "한권으로 <b>개발자</b>가 원하던 파이썬 심화 A to Z (실무를 위해 반드시 알아야 할)",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=15816230",
        "image": "https://bookthumb-phinf.pstatic.net/cover/158/162/15816230.jpg?type=m1&udate=20191130",
        "author": "문용준|문성혁",
        "price": "32000",
        "discount": "28800",
        "publisher": "잇플",
        "pubdate": "20191125",
        "isbn": "1190283662 9791190283663",
        "description": "‘<b>개발자</b>가 원하던 파이썬 심화’는 이런 부분을 잘 설명하였으며, 파이썬을 공부하려는 분들이 반드시 알아야 할 내용들로 구성되어 있습니다. 파이썬은 수학이나 과학용을 처리하는 다양한 모듈부터 인공지능을 구현하는 머신러닝과 딥러닝 알고리즘까지 쓰이고 있습니다. 다시 말하면 파이썬은 4차... "

    },
    {
        "title": "<b>개발자</b>도 궁금한 IT 인프라 (하룻밤에 읽는 개궁금 IT 팟캐스트)",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=13651221",
        "image": "https://bookthumb-phinf.pstatic.net/cover/136/512/13651221.jpg?type=m1&udate=20200102",
        "author": "정송화|김영선|전성민",
        "price": "20000",
        "discount": "18000",
        "publisher": "제이펍",
        "pubdate": "20180611",
        "isbn": "118862122X 9791188621224",
        "description": "최강 조합의 IT 인프라 만담가 3인이 뭉쳤다!\n\n이 책은 IT 인프라 기술에 관심이 있거나 입문하려는 분들에게 필요한 기술과 현장의 생생한 이야기 등 꼭 알려주고 싶은 이야기를 담았습니다. IT 인프라의 기초 개념부터 실무에서의 다양한 사례까지를 읽기 편한 대화체로 구성하였으며, 이야기만으로 부족한... "

    },
    {
        "title": "IT <b>개발자</b>의 거의 모든 것 (<b>개발자</b>를 꿈꾸는, <b>개발자</b>로 일하는,<b>개발자</b>와 일하는 모든 이를 위한 실용 지침서)",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=14959158",
        "image": "https://bookthumb-phinf.pstatic.net/cover/149/591/14959158.jpg?type=m1&udate=20190802",
        "author": "이병덕",
        "price": "14000",
        "discount": "12600",
        "publisher": "미래의창",
        "pubdate": "20190610",
        "isbn": "8959895849 9788959895847",
        "description": "어떻게 하면 인정받는 <b>개발자</b>로 자리 잡을 수 있을까?<b>개발자</b>와 IT 기술에 대한 관심은 날로 높아지고 있지만 <b>개발자</b>의 삶이 어떤지 제대로 아는 사람은 많지 않다. <b>개발자</b>를 꿈꾸는 사람들은 지금 무엇을 배워야 하고, 대학의 해당 학과를 졸업해야 성공할 수 있을까? <b>개발자</b>로 일하면 도대체 얼마나 벌 수... "

    },
    {
        "title": "<b>개발자</b>도 알아야 할 소프트웨어 테스팅 실무 (Practical Software Testing Foundation)",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=6374411",
        "image": "https://bookthumb-phinf.pstatic.net/cover/063/744/06374411.jpg?type=m1&udate=20190204",
        "author": "권원일|이현주|최승희|이승호|박은영|조현길",
        "price": "28000",
        "discount": "25200",
        "publisher": "STA",
        "pubdate": "20100915",
        "isbn": "8994711007 9788994711003",
        "description": "ISTQB 국제 표준적 지식체계 근간 『<b>개발자</b>도 알아야할 소프트웨어 테스팅 실무』. 테스팅을 어려워하는 이들도 실무에 대한 내용을 파악할 수 있도록 소프트웨어 테스팅에 대한 상세한 정보를 제공한다. 테스팅에 대한 지식을 체계적으로 습득할 수 있게 구성했으며, 테스팅 지역 영역간의 상호 연관성을... "

    },
    {
        "title": "초보 웹 <b>개발자</b>를 위한 스프링5 프로그래밍 입문",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=13786861",
        "image": "https://bookthumb-phinf.pstatic.net/cover/137/868/13786861.jpg?type=m1&udate=20180724",
        "author": "최범균",
        "price": "26500",
        "discount": "23850",
        "publisher": "가메",
        "pubdate": "20180720",
        "isbn": "8980782977 9788980782970",
        "description": "스프링 프레임워크의 버전업으로 개선된 내용을 담았습니다.\n\n필자의 한마디 : 처음 스프링을 배우고자 하는 독자들이 입문할 때 필요한 것은 스프링의 방대한 내용이 아닌 기초와 전반적인 흐름을 잡아주는 것으로 생각한다.\n\n● 스프링 DI 기초와 의존 자동 주입\n● 스프링 AOP 기초\n● 스프링을... "

    },
    {
        "title": "인문학도, <b>개발자</b>되다",
        "link": "http://book.naver.com/bookdb/book_detail.php?bid=14257826",
        "image": "https://bookthumb-phinf.pstatic.net/cover/142/578/14257826.jpg?type=m1&udate=20181130",
        "author": "마르코",
        "price": "16000",
        "discount": "14400",
        "publisher": "영진닷컴",
        "pubdate": "20181130",
        "isbn": "8931459599 9788931459593",
        "description": "이제 막 개발에 입문하려는 비전공자를 위해\n문과 출신 <b>개발자</b>가 들려주는 개발 이야기\n\n<b>개발자</b>가 되고 싶은 비전공자를 위해 인문학도 출신인 저자가 어떻게 <b>개발자</b>가 되었는지 그 과정을 이 책 한 권에 녹여냈다. 어떻게 개발 공부를 시작해야 하는지, IT 회사에는 어떤 종류가 있는지, <b>개발자</b>로 취업하려면... "

    }
];

const SearchBookCardHeader = () => {
    const [keyword, setKeyword] = useState('');
    const [searchBooks, setSearchBooks] = useState<ISearchBook[]>([]);

    const onInputChange = (e: any) => {
        e.preventDefault();
        setKeyword(e.target.value);
    };

    const onKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            onSearchButtonClickHandler(e);
        }
    };

    const onSearchButtonClickHandler = (e: any) => {
        e.preventDefault();
        console.log(keyword, '검색');
        console.log(remoteSearchBooks);
        setSearchBooks(remoteSearchBooks);
    };

    const enrollButtonClickHandler = (searchBook: ISearchBook) => (e: any) => {
        e.preventDefault();
        console.log(searchBook);
    };

    return (
        <div style={{margin: '16px'}}>
            <SearchBookResultContext.Provider value={{searchBooks, enrollButtonClickHandler}}>
                <SearchBookInputContext.Provider value={{keyword, onInputChange, onKeyUp, onSearchButtonClickHandler}}>
                    <Row style={{justifyContent: 'center'}}>
                        <SearchBookCardInput/>
                        <SearchBookCardButton/>
                    </Row>
                </SearchBookInputContext.Provider>
            </SearchBookResultContext.Provider>
        </div>
    );
};

const SearchBookCardBody = () => {
    return (
        <div>
            <div style={{width: '100%', borderTop: '1px solid #DFDFDF'}}>
                <div style={{overflow: 'scroll'}}>
                    <ListGroup variant="flush" style={{maxHeight: '700'}}>
                        <SearchBookResultContext.Consumer>
                            {({searchBooks, enrollButtonClickHandler}) => (
                                searchBooks.map((searchBook: ISearchBook, i: number) => (
                                    <ListGroup.Item key={i} style={{height: '70px'}}>
                                        <Row>
                                            {false ? <Col sm={1}>
                                                <Form.Group controlId={`select-search-book-${i}`}>
                                                    <Form.Check type="checkbox"/>
                                                </Form.Group>
                                            </Col> : null}
                                            <SearchBookItem sm={4}>{searchBook.title}</SearchBookItem>
                                            <SearchBookItem sm={2}>{searchBook.author}</SearchBookItem>
                                            <SearchBookItem sm={2}>{searchBook.publisher}</SearchBookItem>
                                            <SearchBookItem sm={2}>{searchBook.price}</SearchBookItem>
                                            <Col sm={2} style={{justifyContent: 'center'}}>
                                                <div style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Button onClick={enrollButtonClickHandler(searchBook)}>한 권씩 등록</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>))
                            )}
                        </SearchBookResultContext.Consumer>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

const Index = () => {
    return (
        <AppBarContainer isLoggedIn={true}>
            <ContentContainer>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Header as="h5">등록할 장서 검색</Card.Header>
                            <SearchBookCardHeader/>
                            <SearchBookCardBody/>
                        </Card>
                    </Col>
                </Row>
            </ContentContainer>
        </AppBarContainer>
    );
};

export default Index;