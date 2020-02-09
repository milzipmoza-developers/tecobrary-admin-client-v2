import * as React from "react";

const SearchBookInputContext = React.createContext({
    keyword: '',
    onInputChange: (e: any) => {

    },
    onKeyUp: (e: any) => {

    },
    onSearchButtonClickHandler: (e: any) => {

    },
});

export default SearchBookInputContext;