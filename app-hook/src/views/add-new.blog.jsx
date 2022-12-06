import '../style/add-blog.style.scss';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useState } from 'react';

const AddBlog = () => {

    const [blog, setBlog] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [style, setStyle] = useState("main-container");

    const changleStyle = () => {
        setStyle("main-containerOne");
    };

    const handleOnSubmit = (event) => {
        // tranh re-render form
        event.preventDefault();
        console.log(">>Check Form", title, content);
    }

    return (
        <>
            <div className={style}>
                <div className='add-container' >
                    <button className="back" onClick={changleStyle}>Close</button>
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