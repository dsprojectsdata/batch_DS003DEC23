import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment';
import parse from 'html-react-parser';

import { BLOG_IMG } from '../../components/Images';
import { Container, Image, Placeholder } from 'react-bootstrap';
import axiosInstance from "../../services/instance"
import { FETCH_BLOG_DETAILS } from "../../constants"

const BlogDetails = () => {

    const [blogDetails, setBlogDetails] = useState(null);

    const { slug } = useParams();

    const fetchBlogDetails = async () => {
        try {
            const response = await axiosInstance.get(`${FETCH_BLOG_DETAILS}/${slug}`);
            setBlogDetails(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogDetails();
    }, [])

    const style = {
        sectionStyle: {
            width: 900,
            margin: "auto",
        },
        image: {
            width: "auto",
            maxWidth: "100%",
        },
        topHeader: {
            display: "flex",
            justifyContent: "space-between",
        },
    };

    return (
        <Container className="py-5">
            {/* {blogDetails ?  */}
            <section style={style.sectionStyle}>
                <div style={style.topHeader}>
                    <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {/* <FaRegCalendarAlt /> */}
                        {/* {blogDetails.created_at} */}
                        {moment(blogDetails?.created_at).format("DDMMM YYYY")}
                    </p>
                    <p>{blogDetails?.category.name}</p>
                    {/* <p>
                        <Placeholder style={{ width: "150px" }} />
                    </p> */}
                </div>

                <Image src={blogDetails?.image} style={style.image} />

                <h1 className="mt-3 mb-2">
                    {blogDetails?.title}
                    {/* {blogDetails?.title || <Placeholder xs={6} />} */}
                </h1>
                <hr />

                <div className="content mt-3">
                    {/* <p>{blogDetails.content}</p> */}
                    {blogDetails?.content && parse(blogDetails?.content)}
                </div>
            </section>
            {/* : <p>Loading...</p>} */}
        </Container>
    )
}

export default BlogDetails