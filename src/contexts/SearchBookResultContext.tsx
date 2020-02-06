import * as React from "react";
import {ISearchBook} from "../../pages/books/create";

const SearchBookResultContext = React.createContext({
    searchBooks: [],
    enrollButtonClickHandler: (searchBook: ISearchBook) => (e: any) => {

    }
});

export default SearchBookResultContext;