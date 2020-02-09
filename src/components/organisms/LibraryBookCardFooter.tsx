import LibraryBookPageContext from "../../contexts/LibraryBookPageContext";
import LibraryBookPageButtons from "../molecules/LibraryBookPageButtons";
import * as React from "react";


const LibraryBookCardFooter = ({page, onPageDown, onPageUp}) => (
    <LibraryBookPageContext.Provider value={{page, onPageDown, onPageUp}}>
        <LibraryBookPageButtons/>
    </LibraryBookPageContext.Provider>
);

export default LibraryBookCardFooter;