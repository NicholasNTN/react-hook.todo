import { useNavigate } from 'react-router-dom';
import '../style/not-found.style.scss';
import Navbar from './navbar';

const NotFound = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <>
            <Navbar />
            <div className='container-err'>
                <h1>404 Error Page</h1>
                <p className="zoom-area">Page does not exist, 404 page. </p>
                <section className="error-container">
                    <span className="four"><span className="screen-reader-text">4</span></span>
                    <span className="zero"><span className="screen-reader-text">0</span></span>
                    <span className="four"><span className="screen-reader-text">4</span></span>
                </section>
                <div className="link-container">
                    <button onClick={handleGoBack} className="more-link">Go back to the homepage</button>
                </div>
            </div>
        </>
    )
}

export default NotFound