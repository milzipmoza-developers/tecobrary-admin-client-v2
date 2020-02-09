import * as React from "react";

const LibraryBookPageContext = React.createContext({
    page: 1,
    onPageDown: () => {

    },
    onPageUp: () => {

    },
});

export default LibraryBookPageContext;