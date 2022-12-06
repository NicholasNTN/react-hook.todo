import '../style/social.style.scss';
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

const Social = (props) => {

    // props chính là truyền dư liệu từ cha xg con.
    // tác dụng tái sử dụng dữ liệu, code
    // chia tách các component.
    // cách 1
    // const todos = props.todos; //lấy dữ liệu thông qua props
    // --> hoặc lấy trược tiếp props.todos.map
    // --> hoặc truyền trực tiếp vào "const SocialItem = (props) =>" 
    // cách 2
    const { name, jobTitle } = props;
    const { todos } = props;
    const { handleOnchangeName, handleOnchangeTitle, handleEClick, handleDelete, handleEdit } = props;

    return (
        <div className="right">
            <input type="text" value={name} onChange={(event) => handleOnchangeName(event)} />
            <input type="text" value={jobTitle} onChange={(event) => handleOnchangeTitle(event)} />
            <button type='button' onClick={() => handleEClick()}>Post</button>
            <h3>Your posts here</h3>
            {
                todos.map((item) => {
                    console.log('>>>Check item what is:', item);
                    return (
                        <div id="posts" key={item.id}>
                            <div>
                                <li>{item.name} - {item.title}</li>
                                <span className="options">
                                    <i className="AiFillEdit" onClick={() => handleEdit()}><AiFillEdit /></i>
                                    <i className="RiDelete" onClick={() => handleDelete(item.id)}><RiDeleteBin5Line /></i>
                                </span>
                            </div>
                        </div>
                    );
                })
            }
        </div>

    );
}
export default Social;