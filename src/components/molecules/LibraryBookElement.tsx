import {Image} from "react-bootstrap";
import * as React from "react";
import {ILibraryBook} from "../../models/interfaces";

interface IProps {
    libraryBook: ILibraryBook;
}

const Content = ({flex, children}: any) => (
    <div style={{flex: `${flex}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
        {children}
    </div>
);

const LibraryBookElement = ({libraryBook}: IProps) => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Image src={libraryBook.image} thumbnail/>
        </div>
        <Content flex={2}>
            {libraryBook.title}
        </Content>
        <Content flex={1}>
            {libraryBook.author}
        </Content>
        <Content flex={1}>
            {libraryBook.publisher}
        </Content>
        <Content flex={1}>
            {libraryBook.hasMany} 부
        </Content>
    </div>
);

export default LibraryBookElement;