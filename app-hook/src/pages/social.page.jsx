import '../style/social-page.style.scss';
import { useState } from 'react';
import Social from '../views/social';
import Navbar from '../views/navbar';

// thao tác với state in hook
const SocialHome = () => {

    //[name, setName] trong arr cth có nhiều t.s hơn nữa và mỗi t.s tương ứng với 1 p tử vd: name -> 'Nicho' -> setName để tđ gtri
    const [name, setName] = useState(''); //corresponding to "id"
    const [jobTitle, setjobTitle] = useState(''); //coresponding to "title"
    const [todos, setTodos] = useState([
        { id: 1, name: 'Nicho', title: 'Learn react hook' },
        { id: 2, name: 'Lam', title: 'hello' }
    ]);

    // input
    const handleOnchangeName = (event) => {
        setName(event.target.value);
    };

    const handleOnchangeTitle = (event) => {
        setjobTitle(event.target.value);
    };

    // add
    const handleEClick = () => {
        // Thao tac voi string;
        // setName(address);

        // thao tac voi mang.
        // hook not merge state
        // ...spread syntax array is

        // điều kiện empty
        if (!name && !jobTitle) {
            alert("please enter full informations !");
            return; //để dừng hành động sau đó
        }

        // add
        let newTodos = {
            id: Math.floor((Math.random() * 100) + 1),
            name: name,
            title: jobTitle
        };
        setTodos([...todos, newTodos]);

        // clear
        setName('');
        setjobTitle('');
    };

    // delete
    const handleDelete = (id) => {
        // let index = todos.findIndex(todo => todo.id === id);
        // let todoCopy = [...todos];
        // todos.splice(index, 1);
        // setTodos(todoCopy);

        // let currentTodos = todos;
        // currentTodos = currentTodos.filter(item => item.id !== id);
        // setTodos(currentTodos);

        let todo = todos.filter(item => {
            console.log('Check filter item:', item, item.id !== id); //set true/ false
            return item.id !== id
        });
        setTodos(todo);
    };

    const handleEdit = (id) => {
        // let todoItem = todos.find(item => item.id === id);
        // newTodoItemId[todoItem] = {
        //     id: id,
        //     nane: name,
        //     title: jobTitle
        // };
        // setTodos(newTodoItemId);
    }

    return (
        <div >
            <Navbar />
            <div className="social-container">
                <h1>Social Medial app</h1>
                <Social
                    name={name}
                    jobTitle={jobTitle}
                    todos={todos} //"props": truyền dữ liệu xuống compo con 
                    handleOnchangeName={handleOnchangeName}
                    handleOnchangeTitle={handleOnchangeTitle}
                    handleEClick={handleEClick}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            </div>
        </div>
    );
}
export default SocialHome;

// {/* <div className="left">
// <form id="form">
//     <label for="">Write your post here</label>
//     <br />
//     <textarea name="" id="input" cols="30" rows="10" onChange={(event) => handleOnchange(event)}></textarea>
//     <br />
//     <div id="msg"></div>
//     <button onClick={(event) => handleEClick(event)}>Post</button>
// </form>
// </div> */}