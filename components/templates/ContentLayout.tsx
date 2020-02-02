import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: any;
}

const outer: CSSProperties = {
    width: '100%',
    height: '100%',
};

const inner: CSSProperties = {
    marginTop: '10vh',
    marginLeft: '15vw',
    marginRight: '15vw',
};

const ContentLayout = ({children}: IProps) => (
    <div className='outer-content-layout' style={outer}>
        <div className="inner-content-layout" style={inner}>
            {children}
        </div>
    </div>
);

export default ContentLayout;