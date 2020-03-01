import BookListCardFooter from "../organisms/BookListCardFooter";
import Divider from "../atoms/Divider";
import BookListCardHeader from "../molecules/BookListCardHeader";
import {Card} from "react-bootstrap";

interface IProps {
    title: string;
    page: number;
    onPageDown: any;
    onPageUp: any;
    children: any;
}

const BookListCardTemplate = ({title, page, onPageDown, onPageUp, children}: IProps) => {
    return (
        <Card>
            <BookListCardHeader>{title}</BookListCardHeader>
            {children}
            <Divider/>
            <BookListCardFooter page={page} onPageDown={onPageDown} onPageUp={onPageUp}/>
        </Card>
    )
};

export default BookListCardTemplate;