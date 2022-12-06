import React, { useState } from "react";
import Navbar from "../views/navbar";
import '../style/blog-page.style.scss';
import useFetch from "../customize/fetch.data";
import { Link } from "react-router-dom";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import AddBlog from "../views/add-new.blog";

const BlogHome = () => {

    const [open, setOpen] = useState(false);

    const { data: dataBlogs, isLoadding, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false); //ko chạy và hàm sử lý data như khi set isCovidData === true

    // console.log(">>>Check data:", dataBlogs)

    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 12);
        console.log(">>>Check newBlogs", newData);
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="blog-container">
                <h1>Blog</h1>
                <div className="blog-add">
                    {/* <button onClick={handleAddBlog}><HiOutlineViewGridAdd />Add new blog</button> */}
                    <button onClick={() => setOpen(true)}><HiOutlineViewGridAdd />Add new blog</button>
                </div>
                {
                    open && <AddBlog />
                }

                {
                    isError === false && isLoadding === true && newData && newData.length > 0 && newData.map(item => {
                        return (
                            <div className="card" key={item.id}>
                                <div className="title">{item.title}</div>
                                <div className="centent">{item.body} <Link to={`/blog/${item.id}`}>View detail...</Link></div>
                            </div>
                        );
                    })
                }
                
                {
                    isLoadding === false
                    && <div style={{ 'textAlign': 'center', 'width': '100%' }}><p>Loading...</p></div>
                }
                {
                    isError === true && <div style={{ 'textAlign': 'center' }}><p>Something...</p></div>
                }

            </div>
        </React.Fragment>
    );
}
export default BlogHome;