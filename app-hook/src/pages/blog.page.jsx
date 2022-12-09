import React, { useState } from "react";
import Navbar from "../views/navbar";
import '../style/blog-page.style.scss';
import useFetch from "../customize/fetch.data";
import { Link } from "react-router-dom";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import AddBlog from "../views/add-new.blog";
import { TiDocumentDelete } from "react-icons/ti";
import { useEffect } from "react";
// import CountDown from "../views/count.down";
import Loader from "../views/loader";

const BlogHome = () => {

    const [open, setOpen] = useState(false);
    const [newData, setNewData] = useState([]);

    const handleShow = () => {
        setOpen(true);
    };

    const { data: dataBlogs, isLoadding, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false); //ko chạy và hàm sử lý data như khi set isCovidData === true

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 12);
            setNewData(data);
        }
    }, [dataBlogs]); //khi tham số dataBlogs thì nó sẽ setNewData(data) set lại state.

    const handleAddBlogs = ((item) => {
        let data = newData;
        data.unshift(item); //đẩy phần tử lên đầu mảng.

        setOpen(false);
        setNewData(data);
        console.log("Check Item", item)
    });

    const handleDeletePost = (id) => {
        let data = newData;
        data = newData.filter(item => item.id !== id);
        setNewData(data);
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="blog-container">
                <h1>Blog</h1>
                <div className="blog-add">
                    <button onClick={handleShow}><HiOutlineViewGridAdd />Add new blog</button>
                </div>
                {
                    open && <AddBlog
                        open={open}
                        setOpen={setOpen}
                        handleAddBlogs={handleAddBlogs}
                    />
                }

                {
                    isError === false && isLoadding === true && newData && newData.length > 0 && newData.map(item => {
                        return (
                            <div className="card" key={item.id}>
                                <i className="delete" onClick={() => handleDeletePost(item.id)}><TiDocumentDelete /></i>
                                <div className="title">{item.title}</div>
                                <div className="centent">{item.body} <Link to={`/blog/${item.id}`}>View detail...</Link></div>
                            </div>
                        );
                    })
                }

                {
                    isLoadding === false
                    // && <div style={{ 'textAlign': 'center' }}><CountDown /></div>
                    && <Loader />
                }
                {
                    isError === true && <div style={{ 'textAlign': 'center' }}><p>Something...</p></div>
                }

            </div>
        </React.Fragment>
    );
}
export default BlogHome;