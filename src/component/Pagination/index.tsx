import React from 'react'
import { Pagination } from 'react-bootstrap'


type Props = {
    // pageNumber: number;
    prevPage: (page: number) => void;
    nextPage: (page: number) => void;

}

const MyPagination = (props: Props) => {
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev onClick={() => props.prevPage} />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{42}</Pagination.Item>
            <Pagination.Next onClick={() => props.nextPage} />
            <Pagination.Last />
        </Pagination>
    )
}

export default MyPagination