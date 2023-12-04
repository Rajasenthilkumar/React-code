import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate';
import { Input } from 'reactstrap';


export default function Datatable({ posts, setSelectPost }) {
    console.log("postspostspostsposts", posts)
    const columns = [
        {
            name: '',
            cell: (row, index) => {
                return (<Input
                    type='radio'
                    name="post"
                    id={`post${index}`}
                    onChange={(e) => setSelectPost(row)}
                />)
            },
            minWidth: '50px'
        },
        {
            name: 'Id',
            minWidth: '40px',
            selector: 'userId',
            sortable: true,
            cell: (row) => row.id
        },
        {
            name: 'Title',
            minWidth: '200px',
            selector: 'title',
            sortable: true,
            cell: (row) => row.title
        },
        {
            name: 'Body',
            selector: 'body',
            minWidth: '120px',
            sortable: true,
            cell: (row) => row.body
        },
    ]
    const [dataArray11, setDataArray11] = useState(posts.slice(0, 10))
    const [currentPage, setCurrentPage] = useState(0)

    const handlePagination = (page) => {
        setCurrentPage(page.selected)
        const dataarr = []
        for (let index = page.selected * 10; index < (page.selected + 1) * 10; index++) {
            dataarr.push(posts[index])
        }
        setDataArray11(dataarr)
    }
    const CustomPagination = () => {
        return (
            <ReactPaginate
                pageCount={posts.length / 10}
                forcePage={currentPage}
                onPageChange={page => handlePagination(page)}
                activeClassName='active'
            />
        )
    }
    return (
        <DataTable
            pagination
            responsive
            paginationServer
            columns={columns}
            data={dataArray11}
            paginationComponent={CustomPagination}

        />
    )
}