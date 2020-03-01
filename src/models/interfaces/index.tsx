export interface IHistory {
    rentDate: string;
    title: string;
    serialNumber: string;
    userName: string;
}

export interface IWishBook {
    id: string;
    title: string;
    userName: string;
    buyLink: string;
    createTime: string;
}

export interface ISearchBook {
    title: string;
    link: string;
    image: string;
    author: string;
    price: string;
    discount: string;
    publisher: string;
    pubdate: string;
    isbn: string;
    description: string;
}

export interface ILibraryBook {
    id: number;
    title: string;
    image: string;
    author: string;
    publisher: string;
    isbn: string;
    description: string;
    hasMany: number;
}

export interface ISerialInfo {
    serialNumber: number;
    rentStatus: boolean;
    rentUser: string;
}