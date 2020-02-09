import {CSSProperties, default as React} from "react";
import {Col} from "react-bootstrap";

interface IProps {
    sm: number;
    children: string;
}

const childrenWrapper: CSSProperties = {
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '16px',
    lineHeight: '22px',
    height: '44px',
    overflow: 'hidden',
    display: '-webkit-inline-box',
};

const SearchBookItem = ({sm, children}: IProps) => {
    const removeTags = (original: string) => (
        original.replace(/(<([^>]+)>)/ig,"")
            .replace(/\|/ig, ", ")
    );

    return (
        <Col sm={sm} style={{textAlign: 'center'}}>
            <div style={childrenWrapper}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {`${removeTags(children)}`}
                </div>
            </div>
        </Col>
    );
};

export default SearchBookItem;