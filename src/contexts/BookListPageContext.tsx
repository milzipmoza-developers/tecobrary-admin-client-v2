import * as React from "react";

const BookListPageContext = React.createContext({
    page: 1,
    onPageDown: () => {

    },
    onPageUp: () => {

    },
});

export default BookListPageContext;