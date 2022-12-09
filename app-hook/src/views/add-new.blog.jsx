import '../style/add-blog.style.scss';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useState } from 'react';
import axios from 'axios';

const AddBlog = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [style] = useState("main-container");

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleOnSubmit = async (event) => {
        // tranh re-render form
        event.preventDefault();

        if (!title && !content) {
            alert("please enter full informations !")
            return;
        } else if (!title) {
            alert("Enter your title !")
            return;
        } else if (!content) {
            alert(`Enter your describe !`)
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1
        }

        let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddBlogs(newBlog); //truyền newBlog từ th cha.
        }

        console.log(">>Check Form", title, content);

        setTitle('');
        setContent('');
    }

    return (
        <>
            <div className={style}>
                <div className='add-container' >
                    <button className="back" onClick={handleClose}>Close</button>
                    <div className='add-title'>Add New Blog<AiOutlineAppstoreAdd /></div>
                    <form onSubmit={handleOnSubmit}>
                        <label htmlFor="fname">Title</label>
                        <input type="text" placeholder="Your title.."
                            value={title}
                            onChange={(event) => setTitle(event.target.value)} />

                        <label htmlFor="lname">Describe</label>
                        <input type="text" placeholder="Your describe.."
                            value={content}
                            onChange={(event) => setContent(event.target.value)} />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddBlog;