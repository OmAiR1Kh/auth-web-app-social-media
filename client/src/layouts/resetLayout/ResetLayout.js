import './resetlayout.css'
import shuttle from '../AuthLayout/shuttle.svg'
import Reset from '../../components/Reset/Reset'
import { useNavigate } from 'react-router-dom'

const ResetLayout = () => {
    const history = useNavigate()
    const handleClick = () =>{
        history('/')
    }

    return ( 
        <div className="authlayout">
            {/* logo */}
            <div className="authlayout_logo">
                <img src={shuttle} alt="logo" />
            </div>
            {/* form */}
            <Reset />
            {/* actions */}
            <p className="reset_p" onClick={handleClick}>
                login
            </p>
        </div>
     );
}
 
export default ResetLayout;