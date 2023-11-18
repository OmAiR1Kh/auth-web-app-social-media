import './appbar.css'
import Avatar from '../Avatar/Avatar'
import {BiMenuAltLeft} from 'react-icons/bi'
import shuttle from '../../layouts/AuthLayout/shuttle.svg'

const Appbar = ({handleSidebar}) => {
    return ( 
        <div className="appbar">
            <div className="appbar_wrapper">
                {/* logo */}
                <div className="appbar_logo">
                    <img src={shuttle} alt="logo"/>
                    <p>mernAuth</p>
                </div>
                {/* avatar */}
                <div className="appbar_avatar">
                    <Avatar />
                    <BiMenuAltLeft onClick={handleSidebar}/>
                </div>
            </div>
        </div>
     );
}
 
export default Appbar;