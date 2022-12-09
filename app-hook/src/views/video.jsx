import '../style/video.style.scss';
import moment from 'moment';

const Video = (props) => {

    const { videos } = props;

    return (
        <div className="video-container">
            {
                videos && videos.length > 0 && videos.map(item => {
                    return (
                        <div className="video" key={item.id}>
                            <div className="left">
                                <iframe className='thumbnail'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture" allowFullScreen>
                                </iframe>
                            </div>
                            <div className="right">
                                <div className="title">
                                    <h4 className="info-title">{item.title}</h4>
                                </div>
                                <div className="created-at">
                                    <span>101 N lượt xem</span> |
                                    <span> {moment(item.createAt).format('DD-MM-YYYY HH:mm:ss A')}</span>
                                </div>
                                <div className="channel-info">
                                    <img src="img/profile-pic.png" className="channel-icon" alt="" />
                                    <p className="channel-name">{item.author}</p>
                                </div>
                                <div className="description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Video
