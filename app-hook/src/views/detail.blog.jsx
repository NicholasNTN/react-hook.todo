import { useNavigate, useParams } from "react-router-dom"; //useParams của hook -> lấy :id trên đường link url đến từng "path (app.js)" 
import Navbar from "./navbar";
import '../style/detail-blog.style.scss';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import React from "react";
import useFetch from "../customize/fetch.data";

const DetailBlog = () => {

    let { id } = useParams();
    // let history = useHistory(); can not use version react-router-dom version ^5.2.0
    // thay thế bằng 
    let history = useNavigate();

    const handlebackData = () => {
        history('/blog')
    }

    const { data: dataDetailBlog, isLoadding, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

    console.log(">>>Check data blog details", dataDetailBlog);

    return (
        <React.Fragment>
            <Navbar />
            <div className="detail-container">
                <div className="Back">
                    <span onClick={handlebackData}><MdOutlineArrowBackIosNew /> Blog ID: {id}</span>
                </div>
                {dataDetailBlog &&
                    <>
                        <div className="card-detail">
                            {isLoadding === false ? <div style={{ 'textAlign': 'center' }}><p>Loading...</p></div> : <><h2 className="title">{dataDetailBlog.title}</h2>
                                <div className="centent"><p>{dataDetailBlog.body}</p></div></>}

                        </div>
                    </>
                }
                {
                    isError === true && <div style={{ 'textAlign': 'center' }}><p>Something Wrongs...</p></div>
                }
            </div>
        </React.Fragment>
    );
}
export default DetailBlog;