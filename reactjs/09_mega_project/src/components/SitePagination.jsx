import React from 'react'
import { Pagination } from 'react-bootstrap'

const SitePagination = ({ totalData, dataPerPage, currPage, handlePagination }) => {

    if (totalData <= dataPerPage) {
        return <></>;
    }

    const noOfPages = Math.ceil(totalData / dataPerPage);

    // console.log("noOfPages >>", noOfPages)

    return (
        <Pagination>
            <Pagination.Prev disabled={currPage === 1} onClick={() => handlePagination(currPage-1)} />
            {Array(noOfPages).fill("").map((_, index) => (
                <Pagination.Item
                    key={index + 1}
                    active={(index+1) === currPage}
                    onClick={() => handlePagination(index+1)}
                >
                    {index + 1}
                </Pagination.Item>
            ))}
            <Pagination.Next disabled={currPage === noOfPages} onClick={() => handlePagination(currPage + 1)} />
            {/* <Pagination.Item key={1} active={true}>1</Pagination.Item>
            <Pagination.Item key={2}>2</Pagination.Item>
            <Pagination.Item key={3}>3</Pagination.Item>
            <Pagination.Item key={4}>4</Pagination.Item>
            <Pagination.Item key={5}>5</Pagination.Item>
            <Pagination.Item key={6}>6</Pagination.Item> */}
        </Pagination>
    )
}

export default SitePagination