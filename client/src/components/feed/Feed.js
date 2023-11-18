import Avatar from '../../components/Avatar/Avatar'
import './feed.css'
import random from '../../img/random.png'

const Feed = () => {
    return ( 
        <div className="feed">
            {/* date */}
            <div className="feed_date">
                <Avatar />
                <p>20/01/2022</p>
            </div>
            {/* img */}
            <div className="feed_img">
                <img alt="feed_image" src={random}/>
            </div>
            {/* content */}
            <div className="feed_content">
                <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
        </div>
     );
}
 
export default Feed;