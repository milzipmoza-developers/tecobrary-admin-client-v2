import BookListPageContext from "../../contexts/BookListPageContext";
import BookListPageButtons from "../molecules/BookListPageButtons";
import * as React from "react";


const BookListCardFooter = ({page, onPageDown, onPageUp}) => (
    <BookListPageContext.Provider value={{page, onPageDown, onPageUp}}>
        <BookListPageButtons/>
    </BookListPageContext.Provider>
);

export default BookListCardFooter;