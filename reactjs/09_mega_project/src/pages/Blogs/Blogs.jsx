import React, { useEffect, useState } from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import { BLOG_IMG } from '../../components/Images'
import BlogCard from '../../components/BlogCard'
import axiosInstance from "../../services/instance"
import { FETCH_ALL_BLOGS } from "../../constants"
import OverlayLoader from '../../components/OverlayLoader'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalData, setTotalData] = useState(0);
    const [isFetching, setIsFetching] = useState(false);

    const DATA_PER_LOAD = 3;

    const fetchBlogs = async (pageNo = 1) => {
        setIsFetching(true);
        try {
            const data = {
                curr_page: pageNo,
                data_per_page: DATA_PER_LOAD
            }
            const response = await axiosInstance.post(FETCH_ALL_BLOGS, data);
            // console.log("response >>", response);
            setBlogs([...blogs, ...response.data.data.blogs]);
            setTotalData(response.data.data.total)
            setCurrPage(pageNo);
        } catch (error) {
            // {TASK} ERROR MESSAGE
        } finally {
            setIsFetching(false);
        }
    }

    const handleLoadMore = () => {
        fetchBlogs(currPage + 1)
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <section className='Blog py-5' id='Blog'>
            <div className='container'>
                <h1 className='fw-bold text-center pb-4' style={{ fontSize: '50px' }}>
                    All Blog
                </h1>
                <OverlayLoader isLoading={isFetching}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
                        {blogs.map((blog) => <BlogCard blog={blog} />)}
                    </div>
                </OverlayLoader>
                {totalData !== blogs.length &&
                    <div className='text-center'>
                        <Button
                            variant="primary"
                            className='px-5 mt-5'
                            size="lg"
                            onClick={handleLoadMore}
                            disabled={isFetching}
                        >
                            Load More
                            {isFetching && <Spinner style={{ marginLeft: 8, fontSize: 16, width: 16, height: 16 }} animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                        </Button>
                    </div>}
            </div>
        </section>
    )
}

export default Blogs