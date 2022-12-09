import { Link } from 'react-router-dom';
import '../style/side-bar.style.scss';

const SideBar = () => {
    return (
        <div className="side-bar">
            <Link href="#" className="links active"><img src="img/home.PNG" alt="" />home</Link>
            <Link href="#" className="links"><img src="img/explore.PNG" alt="" />explore</Link>
            <Link href="#" className="links"><img src="img/subscription.PNG" alt="" />subscription</Link>
            <hr className="seperator" />
            <Link href="#" className="links"><img src="img/library.PNG" alt="" />library</Link>
            <Link href="#" className="links"><img src="img/history.PNG" alt="" />history</Link>
            <Link href="#" className="links"><img src="img/your-video.PNG" alt="" />your video</Link>
            <Link href="#" className="links"><img src="img/watch-later.PNG" alt="" />watch leater</Link>
            <Link href="#" className="links"><img src="img/liked video.PNG" alt="" />like video</Link>
            <Link href="#" className="links"><img src="img/show more.PNG" alt="" />show more</Link>
        </div>
    )
}

export default SideBar