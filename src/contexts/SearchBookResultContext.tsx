import * as React from "react";
import {ISearchBook} from "../models/interfaces";


const SearchBookResultContext = React.createContext({
    searchBooks: [],
    enrollButtonClickHandler: (searchBook: ISearchBook) => (e: any) => {

    }
});

export default SearchBookResultContext;